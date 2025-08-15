# Frontend - Redesign Challenge

Frontend website untuk Redesign Challenge yang dibangun menggunakan React dengan Vite, Tailwind CSS, dan React Icons.

## 📁 Struktur Kode

```
frontend/
├── public/                 # Static assets
│   ├── berita-1.png       # Gambar berita
│   ├── berita-3.png       # Gambar berita
│   ├── berita-4.jpeg      # Gambar berita
│   └── ...                # Asset lainnya
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Berita.tsx     # Berita section
│   │   ├── NewsSection1.tsx # News section 1
│   │   ├── NewsSection2.tsx # News section 2
│   │   ├── Department.tsx # Department section
│   │   ├── CardSection.tsx # Card section
│   │   ├── ProfilDanSosmed.tsx # Profile & social media
│   │   └── Footer.tsx     # Footer
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies & scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── index.html             # HTML template
```

## 🚀 Fitur Utama

### 1. **Responsive Design**

- Mobile-first approach
- Responsive grid layouts
- Adaptive typography
- Touch-friendly interactions

### 2. **Modern UI/UX**

- Clean dan modern design
- Smooth hover animations
- Gradient effects
- Card-based layouts

### 3. **Component-Based Architecture**

- Reusable React components
- Modular structure
- Easy maintenance
- Scalable codebase

### 4. **Performance Optimized**

- Vite for fast development
- Optimized builds
- Lazy loading ready
- Minimal bundle size

## 🛠️ Tech Stack

### **Core Technologies**

- **React 19.1.0**: UI library
- **Vite 7.0.4**: Build tool & dev server
- **TypeScript**: Type safety (dalam file .tsx)

### **Styling**

- **Tailwind CSS 4.1.11**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

### **Development Tools**

- **ESLint**: Code linting
- **React Icons**: Icon library
- **Hot Module Replacement**: Fast development

## 🔧 Cara Menggunakan

### 1. **Setup Environment**

```bash
# Masuk ke folder frontend
cd frontend

# Install dependencies
npm install
```

### 2. **Development Mode**

```bash
# Jalankan development server
npm run dev
```

Server akan berjalan di `http://localhost:5173`

### 3. **Build untuk Production**

```bash
# Build aplikasi
npm run build

# Preview build
npm run preview
```

### 4. **Code Quality**

```bash
# Lint code
npm run lint
```

## 📱 Komponen Utama

### **Navbar.tsx**

- Navigation menu responsive
- Logo dan branding
- Mobile hamburger menu
- Smooth scrolling

### **Hero.tsx**

- Hero section dengan background
- Call-to-action buttons
- Animated elements
- Responsive layout

### **Berita.tsx**

- Grid layout untuk berita
- Card design dengan hover effects
- Image optimization
- External link handling

### **NewsSection1.tsx & NewsSection2.tsx**

- Different news layouts
- Featured content
- Category filtering
- Read more functionality

### **Department.tsx**

- Department information
- Faculty details
- Program overview
- Contact information

### **ProfilDanSosmed.tsx**

- Profile information
- Social media links
- Contact details
- About section

### **Footer.tsx**

- Site links
- Contact information
- Social media
- Copyright notice

## 🎨 Design System

### **Color Palette**

```css
/* Primary Colors */
--yellow-500: #F4B619
--orange-500: #FF6B35
--gray-800: #1F2937
--gray-600: #4B5563
--gray-50: #F9FAFB

/* Gradients */
bg-gradient-to-r from-yellow-500 to-orange-500
```

### **Typography**

- **Headings**: Font-extrabold, responsive sizes
- **Body**: Font-medium, readable line-height
- **Captions**: Font-light, smaller sizes

### **Spacing**

- Consistent padding: `px-4 sm:px-8 lg:px-16`
- Section spacing: `py-12`
- Component gaps: `gap-8`

### **Components**

- **Cards**: Rounded corners, shadows, hover effects
- **Buttons**: Gradient backgrounds, rounded-full
- **Sections**: Background colors, padding

## 📱 Responsive Breakpoints

```css
/* Mobile First */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
```

### **Grid Layouts**

```jsx
// Mobile: 1 column
grid - cols - 1;

// Tablet: 2 columns
sm: grid - cols - 2;

// Desktop: 3 columns
lg: grid - cols - 3;
```

## 🔄 State Management

### **Local State**

- Component-level state dengan React hooks
- Form handling
- UI interactions

### **Data Flow**

- Props drilling untuk simple data
- Component composition
- Event handling

## 📦 Build & Deployment

### **Development Build**

```bash
npm run dev
# Hot reload enabled
# Source maps
# Fast refresh
```

### **Production Build**

```bash
npm run build
# Optimized bundle
# Minified code
# Asset optimization
```

### **Preview Build**

```bash
npm run preview
# Local preview of production build
```

## 🧪 Testing

### **Manual Testing**

- Cross-browser testing
- Responsive testing
- Performance testing
- Accessibility testing

### **Code Quality**

```bash
npm run lint
# ESLint rules
# React best practices
# Code formatting
```

## 📋 Scripts Available

| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 🔧 Configuration Files

### **vite.config.js**

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### **eslint.config.js**

- React hooks rules
- React refresh plugin
- TypeScript support
- Modern JavaScript features

## 🚀 Performance Tips

### **Optimization**

- Lazy loading untuk images
- Component code splitting
- Bundle size optimization
- CSS purging dengan Tailwind

### **Best Practices**

- Semantic HTML
- Accessibility features
- SEO optimization
- Mobile-first design

## 🔗 Integration dengan Backend

### **API Integration**

- RESTful API calls
- Error handling
- Loading states
- Data caching

### **Authentication**

- Token-based auth
- Protected routes
- User sessions
- Logout functionality

## 📈 Monitoring & Analytics

### **Performance Monitoring**

- Core Web Vitals
- Page load times
- User interactions
- Error tracking

### **Analytics**

- Page views
- User behavior
- Conversion tracking
- A/B testing ready

## 🔄 Development Workflow

1. **Setup**: Install dependencies
2. **Develop**: Run dev server
3. **Test**: Manual testing
4. **Lint**: Code quality check
5. **Build**: Production build
6. **Deploy**: Deploy to hosting

## 🎯 Future Enhancements

- **Admin Panel**: CRUD operations
- **Real-time Updates**: WebSocket integration
- **PWA Features**: Offline support
- **Internationalization**: Multi-language support
- **Advanced Animations**: Framer Motion
- **State Management**: Redux/Zustand
