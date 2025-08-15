package models

import "gorm.io/gorm"

type Dokumen struct {
	gorm.Model
	NamaDokumen string `json:"nama_dokumen"`
	PathDokumen string `json:"path_dokumen"`
}