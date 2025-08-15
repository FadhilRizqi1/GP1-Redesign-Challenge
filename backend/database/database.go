package database

import (
	"fmt"
	"os"
	"redesign-challenge/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func DBLoad() {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASS"),
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_NAME"),
	)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Gagal terhubung ke database")
	}
	fmt.Println("Koneksi database berhasil dibuat")
	DB = db
}

func DBMigrate() {
	if err := DB.Debug().AutoMigrate(&models.Berita{},&models.Admin{},&models.Dokumen{}); err != nil {
		panic("Gagal melakukan migrasi database")
	}
	fmt.Println("Migrasi database selesai")
}