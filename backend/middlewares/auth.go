package middlewares

import (
	"redesign-challenge/database"
	"redesign-challenge/models"
	"time"

	"github.com/gofiber/fiber/v2"
)

func Auth(c *fiber.Ctx) error {
	var admin models.Admin
	cookieToken := c.Cookies("admin_token")
	if err := database.DB.Where("token =? AND token_exp >= ?", cookieToken, time.Now()).First(&admin).Error;err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Token tidak valid",
		})
	}
	return c.Next()
}