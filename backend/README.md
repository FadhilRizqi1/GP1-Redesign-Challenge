# Backend API - Redesign Challenge

Backend service untuk website Redesign Challenge yang dibangun menggunakan Go dengan Fiber framework dan GORM untuk database management.

## 📁 Struktur Kode

```
backend/
├── main.go                 # Entry point aplikasi
├── go.mod                  # Dependency management
├── go.sum                  # Dependency checksums
├── config/
│   └── env.go             # Environment configuration loader
├── database/
│   ├── database.go        # Database connection & migration
│   └── redesign-challenge.sql  # Database schema
├── models/
│   ├── admin.go           # Model Admin
│   ├── berita.go          # Model Berita
│   └── dokumen.go         # Model Dokumen
├── controllers/
│   ├── admin.go           # Controller untuk autentikasi admin
│   ├── berita.go          # Controller untuk CRUD berita
│   └── dokumen.go         # Controller untuk upload dokumen
├── routes/
│   ├── routes.go          # Main router configuration
│   ├── admin.go           # Route untuk admin
│   ├── berita.go          # Route untuk berita
│   └── dokumen.go         # Route untuk dokumen
├── middlewares/
│   └── auth.go            # Middleware autentikasi
├── utils/
│   └── dokumen.go         # Helper untuk upload file
├── cache/
│   └── berita.go          # Cache management untuk berita
└── assets/
    ├── covers/            # Folder untuk cover berita
    └── files/             # Folder untuk dokumen upload
```

## 🚀 Fitur Utama

### 1. **Autentikasi Admin**

- Login dengan username dan password
- Token-based authentication dengan cookie
- Logout dengan invalidasi token
- Middleware untuk proteksi endpoint

### 2. **Manajemen Berita**

- CRUD operasi untuk berita
- Upload cover image (PNG, JPG, JPEG)
- Priority flag untuk berita penting
- Scheduled posting dengan `posted_at`
- Cache untuk performa listing

### 3. **Upload Dokumen**

- Upload file PDF dan gambar
- Validasi tipe file
- Auto-generate nama file unik
- Static file serving

### 4. **Caching System**

- In-memory cache untuk berita
- Cache invalidation
- Separate cache untuk berita priority dan all

## 🔧 Cara Menggunakan

### 1. **Setup Environment**

```bash
# Clone repository
git clone <repository-url>
cd G1_Redesign_challenge/backend

# Install dependencies
go mod tidy

# Buat file .env
cp .env.example .env
```

### 2. **Konfigurasi Database**

Buat file `.env` dengan konfigurasi berikut:

```env
DB_USER=your_username
DB_PASS=your_password
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=redesign_challenge
BASE_URL=http://localhost:8080
```

### 3. **Setup Folder Assets**

```bash
mkdir -p assets/covers assets/files
```

### 4. **Jalankan Aplikasi**

```bash
go run main.go
```

Server akan berjalan di `http://localhost:8080`

## 📡 API Endpoints

### **Admin Authentication**

| Method | Endpoint                 | Deskripsi         | Auth |
| ------ | ------------------------ | ----------------- | ---- |
| POST   | `/api/admin/login`       | Login admin       | ❌   |
| POST   | `/api/admin/signup`      | Daftar admin baru | ✅   |
| POST   | `/api/admin/logout`      | Logout admin      | ✅   |
| POST   | `/api/admin/sync-berita` | Sync cache berita | ✅   |

### **Berita Management**

| Method | Endpoint                       | Deskripsi            | Auth |
| ------ | ------------------------------ | -------------------- | ---- |
| GET    | `/api/berita`                  | Ambil semua berita   | ❌   |
| GET    | `/api/berita?is_priority=true` | Berita priority saja | ❌   |
| GET    | `/api/berita?limit=10`         | Berita dengan limit  | ❌   |
| POST   | `/api/berita`                  | Buat berita baru     | ✅   |
| PATCH  | `/api/berita/:id`              | Update berita        | ✅   |
| DELETE | `/api/berita/:id`              | Hapus berita         | ✅   |

### **Dokumen Management**

| Method | Endpoint       | Deskripsi           | Auth |
| ------ | -------------- | ------------------- | ---- |
| GET    | `/api/dokumen` | Ambil semua dokumen | ❌   |
| POST   | `/api/dokumen` | Upload dokumen baru | ✅   |

## 📝 Contoh Penggunaan API

### **Login Admin**

```bash
curl -X POST http://localhost:8080/api/admin/login \
  -F "username=admin" \
  -F "password=password123"
```

### **Buat Berita**

```bash
curl -X POST http://localhost:8080/api/berita \
  -H "Cookie: admin_token=your_token" \
  -F "judul=Judul Berita" \
  -F "is_priority=true" \
  -F "posted_at=2024-01-15T10:00:00Z" \
  -F "cover=@/path/to/cover.jpg"
```

### **Upload Dokumen**

```bash
curl -X POST http://localhost:8080/api/dokumen \
  -H "Cookie: admin_token=your_token" \
  -F "nama_dokumen=Dokumen Penting" \
  -F "dokumen=@/path/to/document.pdf"
```

### **Ambil Berita**

```bash
curl http://localhost:8080/api/berita
curl http://localhost:8080/api/berita?is_priority=true&limit=5
```

## 🔒 Keamanan

- **Token Authentication**: Menggunakan secure HTTP-only cookies
- **Password Hashing**: Bcrypt untuk enkripsi password
- **File Validation**: Validasi tipe file yang diupload
- **CORS**: Cross-origin resource sharing dikonfigurasi
- **Token Expiration**: Token expired setelah 1 jam

## 💾 Database Schema

### **Tabel Admin**

- `id` (Primary Key)
- `username` (Unique)
- `password` (Hashed)
- `token`
- `token_exp`
- `created_at`, `updated_at`, `deleted_at`

### **Tabel Berita**

- `id` (Primary Key)
- `judul`
- `cover`
- `is_priority`
- `posted_at`
- `created_at`, `updated_at`, `deleted_at`

### **Tabel Dokumen**

- `id` (Primary Key)
- `nama_dokumen`
- `path_dokumen`
- `created_at`, `updated_at`, `deleted_at`

## 🎯 Fitur Khusus

### **Cache Management**

- Cache berita untuk performa optimal
- Auto-invalidation saat data berubah
- Separate cache untuk berita priority

### **File Upload**

- Support format: PNG, JPG, JPEG, PDF
- Auto-generate nama file unik
- Validasi ukuran dan tipe file
- Static file serving

### **Scheduled Posting**

- Berita bisa dijadwalkan dengan `posted_at`
- Hanya berita yang sudah waktunya yang ditampilkan
- Support format ISO 8601 (RFC3339)

## 📋 Dependencies

- **Fiber**: Web framework
- **GORM**: ORM untuk database
- **MySQL Driver**: Database driver
- **Bcrypt**: Password hashing
- **Go Cache**: In-memory caching
- **Godotenv**: Environment variable loader
