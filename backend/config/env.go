package config

import "github.com/joho/godotenv"

func ENVLoad() {
	err := godotenv.Load()
	if err != nil {
		panic("Error saat memuat file .env")
	}
}