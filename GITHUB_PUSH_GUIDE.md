# GitHub Push Guide - RWUA Website 3 Pages

## 📁 Files to Push to GitHub

### **ESSENTIAL FILES** (Must include these):

#### 1. **Page Components** (3 main pages)
```
app/
├── success-story/page.tsx    # Success stories page with right sidebar search
├── vacancy/page.tsx          # Job vacancies page with right sidebar search  
└── contact/page.tsx          # Contact page (no search bar)
```

#### 2. **UI Components** (Required for pages to work)
```
components/ui/
├── SearchBox.tsx             # Search input component
├── SearchSidebar.tsx         # Right sidebar with search + recent posts
├── StoryCard.tsx             # Success story display card
├── StoryHeading.tsx          # Compact story header
├── VacancyCard.tsx           # Job vacancy display card
└── ContactForm.tsx           # Contact form component
```

#### 3. **Type Definitions** (TypeScript interfaces)
```
lib/
├── types.ts                  # All TypeScript interfaces
└── utils.ts                  # Utility functions
```

#### 4. **Images** (Sample images for content)
```
public/images/
├── success1.jpg              # Success story image 1
├── success2.jpg              # Success story image 2
├── vacancy1.jpeg             # Vacancy image 1
├── vacancy2.jpeg             # Vacancy image 2
└── vacancy3.jpg              # Vacancy image 3
```

#### 5. **Configuration Files**
```
package.json                  # Dependencies and scripts
tsconfig.json                 # TypeScript configuration
next.config.ts                # Next.js configuration
tailwind.config.ts            # Tailwind CSS configuration
postcss.config.mjs            # PostCSS configuration
```

#### 6. **Styling**
```
app/globals.css               # Global styles and RWUA color palette
```

### **OPTIONAL FILES** (Nice to have):
```
README.md                     # Documentation
eslint.config.mjs             # ESLint configuration
next-env.d.ts                 # Next.js TypeScript definitions
```

---

## 🚀 How to Push to GitHub

### **Step 1: Prepare Your Repository**
1. Open your existing RWUA website repository on GitHub
2. Create a new branch for your contribution:
   ```bash
   git checkout -b add-three-pages
   ```

### **Step 2: Copy Files to Repository**
Copy the files listed above from your `rwua-website-clone` folder to your GitHub repository folder, maintaining the same directory structure.

### **Step 3: Git Commands**
```bash
# Navigate to your repository folder
cd path/to/your/rwua-repository

# Add all the new files
git add app/success-story/page.tsx
git add app/vacancy/page.tsx  
git add app/contact/page.tsx
git add components/ui/
git add lib/
git add public/images/
git add package.json
git add tsconfig.json
git add next.config.ts
git add tailwind.config.ts
git add postcss.config.mjs
git add app/globals.css
git add README.md

# Or add all at once (be careful with this)
git add .

# Commit your changes
git commit -m "Add three pages: Success Story, Vacancy, and Contact Us

- Success Story page with right sidebar search and Nepali content
- All Vacancy page with job listings and search functionality  
- Contact Us page with contact form and organization details
- Responsive design with mobile-first approach
- Clean, production-ready code"

# Push to GitHub
git push origin add-three-pages
```

### **Step 4: Create Pull Request**
1. Go to your GitHub repository
2. Click "Compare & pull request" 
3. Add a descriptive title and description
4. Submit the pull request

---

## 📋 Pre-Push Checklist

✅ **Build Test**: Run `npm run build` to ensure no errors  
✅ **File Structure**: Maintain exact folder structure  
✅ **Dependencies**: Include package.json with all required dependencies  
✅ **Images**: Include all sample images in public/images/  
✅ **TypeScript**: Include types.ts for proper TypeScript support  
✅ **Styling**: Include globals.css with RWUA color palette  
✅ **Configuration**: Include all config files (Next.js, Tailwind, etc.)  

---

## 🎯 Key Features Being Added

1. **Success Story Page** (`/success-story`)
   - Right sidebar with search and recent posts
   - Nepali language content
   - Responsive card layout

2. **All Vacancy Page** (`/vacancy`)  
   - Right sidebar with search functionality
   - Job listings with apply buttons
   - Professional layout

3. **Contact Us Page** (`/contact`)
   - Contact information and form
   - No search bar (as requested)
   - Two-column layout

4. **Shared Components**
   - Reusable UI components
   - Search functionality
   - Responsive design

---

## 💡 Tips for Success

- **Test First**: Always run `npm run build` before pushing
- **Small Commits**: Consider making separate commits for each page
- **Clear Messages**: Use descriptive commit messages
- **Documentation**: Include this guide or README for other developers
- **Dependencies**: Make sure package.json includes all required packages

---

**Ready to push!** Your 3 pages are clean, production-ready, and follow best practices. 🚀