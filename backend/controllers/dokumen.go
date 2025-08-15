package controllers

import (
	"redesign-challenge/database"
	"redesign-challenge/models"
	"redesign-challenge/utils"

	"github.com/gofiber/fiber/v2"
)

func BuatDokumen(c *fiber.Ctx) error {
	var dokumen models.Dokumen
	namaDokumen := c.FormValue("nama_dokumen")
	pathDokumen, err := utils.SimpanDokumen(c, "dokumen", false)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err,
		})
	}

	if namaDokumen == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "nama_dokumen wajib diisi",
		})
	}

	dokumen.NamaDokumen = namaDokumen
	dokumen.PathDokumen = pathDokumen

	if err := database.DB.Create(&dokumen).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Gagal menyimpan dokumen",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"pesan": "Dokumen berhasil dibuat",
		"dokumen":  dokumen,
	})
}

func AmbilDokumen(c *fiber.Ctx) error {
	var dokumen []models.Dokumen

	if err := database.DB.Find(&dokumen).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Gagal mengambil data dokumen",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"dokumen": dokumen,
	})
}