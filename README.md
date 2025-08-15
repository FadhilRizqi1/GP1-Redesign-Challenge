# 🎨 Redesign Challenge - GDGOC Universitas Sriwijaya

Website redesign untuk Fakultas Ilmu Komputer Universitas Sriwijaya.

## 🎯 UI/UX Design

**Figma Design:** [View Design](https://www.figma.com/design/SFZo7UVTWvrfYgYlkNiZ9K/Redesign?node-id=0-1&t=Mo74gUMFiFwokcvn-1)

---

## 📋 Tentang Website

Website ini merupakan hasil redesign dari website Fakultas Ilmu Komputer Universitas Sriwijaya dengan fokus pada:

### 🎨 **Modern Design**

- Clean dan minimalist design
- Responsive layout untuk semua device

### 📱 **User Experience**

- Intuitive navigation
- Fast loading times
- Mobile-first approach
- Accessibility friendly

### 🚀 **Performance**

- Optimized images dan assets
- Efficient code structure
- Fast API responses
- SEO optimized

## 🏗️ Arsitektur Sistem

```
G1_Redesign_challenge/
├── frontend/          # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx        # Main application
│   │   └── main.jsx       # Entry point
│   ├── public/            # Static assets
│   └── package.json       # Dependencies
├── backend/           # Go + Fiber + GORM
│   ├── controllers/   # API handlers
│   ├── models/        # Database models
│   ├── routes/        # Route definitions
│   ├── middlewares/   # Authentication
│   ├── utils/         # Helper functions
│   └── main.go        # Server entry point
└── README.md          # Project documentation
```

## 🛠️ Tech Stack

### **Frontend**

- **React 19.1.0** - Modern UI library
- **Vite 7.0.4** - Fast build tool
- **Tailwind CSS 4.1.11** - Utility-first CSS
- **React Icons** - Icon library
- **TypeScript** - Type safety

### **Backend**

- **Go 1.24.2** - High-performance language
- **Fiber** - Fast web framework
- **GORM** - Database ORM
- **MySQL** - Database
- **JWT** - Authentication

## 🚀 Fitur Utama

### **🎯 Landing Page**

- Hero section dengan call-to-action
- Berita dan pengumuman terbaru
- Informasi program studi
- Profil fakultas dan social media

### **📰 Manajemen Berita**

- CRUD operasi berita
- Upload cover image
- Priority flag untuk berita penting
- Scheduled posting
- Cache untuk performa

### **📁 Upload Dokumen**

- Upload file PDF dan gambar
- Validasi tipe file
- Auto-generate nama file
- Static file serving

### **🔐 Admin Panel**

- Login/logout system
- Token-based authentication
- Protected routes
- User management

## 📱 Responsive Design

Website dirancang dengan pendekatan mobile-first dan mendukung:

- **Mobile** (320px - 768px)
- **Tablet** (768px - 1024px)
- **Desktop** (1024px+)

### **Breakpoints**

```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
```

## 🎨 Design System

### **Color Palette**

```css
Primary: #F4B619 (Yellow)
Secondary: #FF6B35 (Orange)
Dark: #1F2937 (Gray-800)
Light: #F9FAFB (Gray-50)
```

### **Typography**

- **Headings**: Font-extrabold, responsive sizes
- **Body**: Font-medium, readable line-height
- **Captions**: Font-light, smaller sizes

### **Components**

- **Cards**: Rounded corners, shadows, hover effects
- **Buttons**: Gradient backgrounds, rounded-full
- **Sections**: Background colors, consistent padding

## 🔧 Cara Menjalankan

### **Prerequisites**

- Node.js 18+ dan npm
- Go 1.24+
- MySQL 8.0+
- Git

### **1. Clone Repository**

```bash
git clone <repository-url>
cd G1_Redesign_challenge
```

### **2. Setup Backend**

```bash
cd backend

# Install dependencies
go mod tidy

# Setup environment
cp .env.example .env
# Edit .env dengan konfigurasi database

# Create asset folders
mkdir -p assets/covers assets/files

# Run server
go run main.go
```

Backend akan berjalan di `http://localhost:8080`

### **3. Setup Frontend**

```bash
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Frontend akan berjalan di `http://localhost:5173`

## 📡 API Endpoints

### **Authentication**

- `POST /api/admin/login` - Login admin
- `POST /api/admin/signup` - Daftar admin
- `POST /api/admin/logout` - Logout

### **Berita**

- `GET /api/berita` - Ambil semua berita
- `POST /api/berita` - Buat berita baru
- `PATCH /api/berita/:id` - Update berita
- `DELETE /api/berita/:id` - Hapus berita

### **Dokumen**

- `GET /api/dokumen` - Ambil semua dokumen
- `POST /api/dokumen` - Upload dokumen

## 🗄️ Database Schema

### **Tabel Admin**

- `id`, `username`, `password`, `token`, `token_exp`
- `created_at`, `updated_at`, `deleted_at`

### **Tabel Berita**

- `id`, `judul`, `cover`, `is_priority`, `posted_at`
- `created_at`, `updated_at`, `deleted_at`

### **Tabel Dokumen**

- `id`, `nama_dokumen`, `path_dokumen`
- `created_at`, `updated_at`, `deleted_at`

## 🔒 Keamanan

- **Token Authentication** dengan HTTP-only cookies
- **Password Hashing** menggunakan bcrypt
- **File Validation** untuk upload
- **CORS** dikonfigurasi dengan aman
- **Input Sanitization** untuk mencegah XSS

## 📊 Performance

### **Frontend**

- **Bundle Size**: < 500KB (gzipped)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### **Backend**

- **Response Time**: < 100ms
- **Database Queries**: Optimized dengan GORM
- **File Upload**: Validasi dan compression
- **Cache**: In-memory cache untuk berita

## 🧪 Testing

### **Manual Testing**

- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Responsive testing di berbagai device
- Performance testing dengan Lighthouse
- Accessibility testing

### **Code Quality**

```bash
# Frontend
cd frontend
npm run lint

# Backend
cd backend
go fmt ./...
go vet ./...
```

## 📦 Build & Deployment

### **Frontend Production**

```bash
cd frontend
npm run build
```

### **Backend Production**

```bash
cd backend
go build -o app main.go
```

## 🔄 Development Workflow

1. **Design** → Figma design review
2. **Frontend** → React component development
3. **Backend** → API development
4. **Integration** → Frontend-Backend connection
5. **Testing** → Manual dan automated testing
6. **Deployment** → Production deployment

## 📈 Monitoring & Analytics

- **Performance Monitoring**: Core Web Vitals
- **Error Tracking**: Console errors dan API errors
- **User Analytics**: Page views dan interactions
- **SEO**: Meta tags dan structured data

## 🎯 Future Enhancements

- **Admin Dashboard**: Full CRUD interface
- **Real-time Updates**: WebSocket integration
- **PWA Features**: Offline support
- **Multi-language**: Internationalization
- **Advanced Search**: Full-text search
- **Analytics Dashboard**: User behavior insights

## 👥 Tim Pengembang

**Event Redesign Challenge** - GDGOC Universitas Sriwijaya

### **Roles**

- **UI/UX Design**: Figma design system
- **Frontend Development**: React + Tailwind CSS
- **Backend Development**: Go + Fiber

## 📄 License

Proyek ini dibuat untuk tujuan edukasi dan kompetisi **Event Redesign Challenge** yang diselenggarakan oleh GDGOC Universitas Sriwijaya.

---

## 🔗 Links

- **UI/UX Design**: [Figma](https://www.figma.com/design/SFZo7UVTWvrfYgYlkNiZ9K/Redesign?node-id=0-1&t=Mo74gUMFiFwokcvn-1)
- **Frontend Documentation**: [frontend/README.md](frontend/README.md)
- **Backend Documentation**: [backend/README.md](backend/README.md)
- **Live Demo**: [Coming Soon]
- **API Documentation**: [Coming Soon]
