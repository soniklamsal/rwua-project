# RWUA Website - Three Pages Implementation

This contribution adds three essential pages to the RWUA Nepal website:

## 📄 Pages Included

1. **Success Story Page** (`/success-story`)
   - Single-column layout displaying success stories
   - Responsive design for all devices
   - Clean, accessible interface

2. **All Vacancy Page** (`/vacancy`) 
   - Job listings in single-column format
   - Professional layout with job details
   - Apply button for each vacancy

3. **Contact Us Page** (`/contact`)
   - Organization contact information
   - Contact form with validation
   - Nepal-based address and details

## 🔍 Search Functionality

- **Right sidebar search** matching the original RWUA website layout
- **"Search" and "Recent Posts" sections** in the sidebar
- **Debounced search** (300ms delay) for optimal performance
- **Real-time filtering** of content
- **Nepali language support** with appropriate placeholder text

## 🛠 Technical Stack

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive design** (mobile-first approach)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📱 Features

- ✅ Fully responsive design
- ✅ Accessibility compliant
- ✅ Clean, maintainable code
- ✅ TypeScript support
- ✅ Optimized performance
- ✅ Mobile-first approach

## 🎯 Key Components

- `SearchBox` - Right sidebar search with Nepali text support
- `SearchSidebar` - Complete sidebar with Search and Recent Posts sections
- `StoryCard` - Success story display component
- `VacancyCard` - Job vacancy display component
- `ContactForm` - Contact form with validation
- `StoryHeading` - Compact story header component

## 📂 File Structure

```
app/
├── success-story/page.tsx    # Success stories page
├── vacancy/page.tsx          # Job vacancies page
└── contact/page.tsx          # Contact information page

components/
├── ui/
│   ├── SearchBox.tsx         # Right sidebar search component
│   ├── SearchSidebar.tsx     # Complete sidebar with Search & Recent Posts
│   ├── StoryCard.tsx         # Story display
│   ├── VacancyCard.tsx       # Vacancy display
│   ├── ContactForm.tsx       # Contact form
│   └── StoryHeading.tsx      # Story header
└── layout/
    ├── Header.tsx            # Site header
    └── Footer.tsx            # Site footer

lib/
├── types.ts                  # TypeScript interfaces
└── utils.ts                  # Utility functions
```

## 🎨 Design Principles

- **Two-column layout** with main content on left, sidebar on right
- **Right sidebar** with Search and Recent Posts sections (matching original RWUA design)
- **Single-column content** for better readability
- **Consistent spacing** and typography
- **Accessible color contrast**
- **Touch-friendly interface**
- **Clean, minimal design**

---

*This implementation focuses on clean, production-ready code that integrates seamlessly with the existing RWUA website.*

## 🚀 Quick Development Setup

### Using Helper Scripts

For easier development, use the provided batch scripts:

```bash
# Start development server with auto-install
scripts/dev.bat

# Build and deploy to GitHub
scripts/deploy.bat
```

### Manual Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🔧 Project Status

✅ **Build Status**: All builds passing  
✅ **Dependencies**: Up to date  
✅ **TypeScript**: No errors  
✅ **Responsive**: Mobile-first design  
✅ **Accessibility**: WCAG compliant  

## 📋 Deployment Checklist

Before pushing to GitHub:

- [ ] Run `npm run build` to ensure no build errors
- [ ] Test all pages in development mode
- [ ] Check responsive design on different screen sizes
- [ ] Verify all links and forms work correctly
- [ ] Run `npm run lint` to check code quality

## 🆘 Common Issues & Solutions

### Build Issues
- **Error**: "Module not found" → Run `npm install`
- **Error**: TypeScript errors → Check imports and types
- **Error**: Tailwind classes not working → Verify `globals.css` imports
- **Error**: "Out of memory" → Use `scripts/dev-light.bat` or `npm run build:safe`

### Development Issues
- **Port 3000 in use** → Use `npm run dev -- -p 3001`
- **Changes not reflecting** → Clear `.next` folder and restart
- **Slow build times** → Clear node_modules and reinstall
- **Memory errors** → Use memory-optimized scripts or restart computer

### Memory Issues (Important!)
- **Low RAM systems** → Use `scripts/dev-light.bat`
- **Build failures** → Use `npm run build:safe`
- **Out of memory errors** → Check `TROUBLESHOOTING.md`

### Git Issues
- **Push rejected** → Pull latest changes first: `git pull origin main`
- **Merge conflicts** → Resolve conflicts and commit
- **Authentication** → Set up GitHub credentials properly

---

**Project maintained by RWUA Development Team**