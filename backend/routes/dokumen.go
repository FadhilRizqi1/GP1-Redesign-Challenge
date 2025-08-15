package routes

import (
	"redesign-challenge/controllers"
	"redesign-challenge/middlewares"

	"github.com/gofiber/fiber/v2"
)

func dokumenRoutes(api fiber.Router) {
	dokumen := api.Group("/dokumen")
	dokumen.Get("/", controllers.AmbilDokumen)
	dokumen.Post("/", middlewares.Auth, controllers.BuatDokumen)
}