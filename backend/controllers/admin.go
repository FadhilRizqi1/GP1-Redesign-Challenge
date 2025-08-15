package controllers

import (
	"crypto/rand"
	"encoding/hex"
	"redesign-challenge/cache"
	"redesign-challenge/database"
	"redesign-challenge/models"
	"time"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func SignUp(c *fiber.Ctx) error {
	var admin models.Admin
	username := c.FormValue("username")
	if username == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Username wajib diisi",
		})
	}
	password := c.FormValue("password")
	if password == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Password wajib diisi",
		})
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Gagal mengenkripsi password",
		})
	}

	admin.Username = username
	admin.Password = string(hashedPassword)

	if err := database.DB.Create(&admin).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Gagal membuat admin",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"pesan": "Admin berhasil dibuat",
	})
}

func Login(c *fiber.Ctx) error {
	var admin models.Admin
	username := c.FormValue("username")
	password := c.FormValue("password")
	if username == "" || password == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Username dan Password wajib diisi",
		})
	}

	if err := database.DB.Where("username = ?", username).First(&admin).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Kredensial salah",
		})
	}

	if err := bcrypt.CompareHashAndPassword([]byte(admin.Password), []byte(password)); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Kredensial salah",
		})
	}

	bytes := make([]byte, 32)
	if _, err := rand.Read(bytes); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Gagal menghasilkan token",
		})
	}
	token := hex.EncodeToString(bytes)
	admin.Token = token
	admin.TokenExp = time.Now().Add(1 * time.Hour)

	if err := database.DB.Save(&admin).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Gagal menyimpan token admin",
		})
	}

	c.Cookie(&fiber.Cookie{
		Name:     "admin_token",
		Value:    token,
		Expires:  time.Now().Add(1 * time.Hour),
		HTTPOnly: true,
		Secure:   true,
		SameSite: "Strict",
	})

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"pesan": "Login berhasil",
	})
}

func Logout(c *fiber.Ctx) error {
	var admin models.Admin
	cookieToken := c.Cookies("admin_token")
	if err := database.DB.Where("token =? AND token_exp >= ?", cookieToken, time.Now()).First(&admin).Error; err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Token tidak valid",
		})
	}

	admin.Token = ""
	admin.TokenExp = time.Now()

	if err := database.DB.Save(&admin).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Gagal menyimpan token admin",
		})
	}

	c.Cookie(&fiber.Cookie{
		Name:    "admin_token",
		Value:   "",
		Expires: time.Now().Add(-1 * time.Hour),
	})

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"pesan": "Logout berhasil",
	})
}

func SyncBeritaCache(c *fiber.Ctx) error {
	var all []models.Berita
	if err := database.DB.Model(&models.Berita{}).Where("posted_at <= ?", time.Now()).Find(&all).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Gagal ambil semua berita",
		})
	}

	var priority []models.Berita
	if err := database.DB.Model(&models.Berita{}).Where("posted_at <= ? AND is_priority = ?", time.Now(), true).Find(&priority).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Gagal ambil berita priority",
		})
	}

	cache.SetBeritaCache("berita_all", all)
	cache.SetBeritaCache("berita_priority", priority)

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"pesan": "Cache berita berhasil disinkronisasi ulang",
	})
}
