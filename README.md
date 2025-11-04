# Hugo Cisneros CV Website

A professional, modern CV website for Hugo Cisneros Amengual built with HTML5, Tailwind CSS, and vanilla JavaScript.

## 🚀 Features

- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Dark Mode**: Automatic system preference detection + manual toggle
- **Accessibility**: WCAG AA compliant with proper ARIA labels, keyboard navigation, and semantic HTML
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **Performance**: No build tools, minimal dependencies, fast loading
- **Contact Form**: Ready for Netlify Forms integration
- **Downloadable CV**: Both PDF and Markdown versions available

## 📁 Project Structure

```
CV_HUGO/
├── index.html              # Main HTML file
├── main.js                 # JavaScript for interactions and dark mode
├── assets/
│   ├── Hugo_Cisneros_CV.md    # CV in Markdown format
│   ├── Hugo_Cisneros_CV.pdf   # CV in PDF format (add your PDF here)
│   ├── profile.jpg            # Profile photo (add your photo here)
│   └── favicon.svg            # Website favicon
└── README.md               # This file
```

## 🛠️ Setup Instructions

### Local Development

1. **Clone or download** this project to your local machine

2. **Add your assets**:
   - Add your profile photo as `assets/profile.jpg`
   - Add your CV PDF as `assets/Hugo_Cisneros_CV.pdf`

3. **Open locally**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using PHP
     php -S localhost:8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

4. **View in browser**: 
   - Navigate to `http://localhost:8000`

### 🌐 Deployment

#### Deploy to GitHub Pages

1. Create a new GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select "Deploy from branch" and choose `main` branch
5. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

#### Deploy to Netlify

**Option 1: Drag & Drop**
1. Go to [Netlify](https://www.netlify.com/)
2. Sign up or log in
3. Drag and drop your project folder to Netlify
4. Done! Your site is live

**Option 2: Git Integration**
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Configure:
   - Build command: (leave empty)
   - Publish directory: `/`
4. Deploy!

**Enable Netlify Forms:**
The contact form is already configured with `data-netlify="true"`. Once deployed to Netlify, forms will automatically work!

#### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts
4. Done!

## 🎨 Customization

### Colors
The site uses a blue primary color scheme. To change it, modify the Tailwind config in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    // Change these values
                    500: '#0ea5e9',
                    600: '#0284c7',
                    // ...
                }
            }
        }
    }
}
```

### Content
All content is in `index.html`. Simply search for the section you want to modify and update the text.

### Profile Photo
Replace `assets/profile.jpg` with your own photo. Recommended size: 400x400px or larger, square aspect ratio.

### CV Files
- Replace `assets/Hugo_Cisneros_CV.pdf` with your PDF
- The Markdown version is already in place

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS** (CDN): Utility-first styling
- **JavaScript**: Vanilla JS for interactions
- **No build tools**: Ready to run immediately

## ✨ Features Breakdown

### Accessibility
- Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible styles
- Alt text for images

### SEO
- Optimized title and meta descriptions
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data (schema.org)
- Semantic HTML structure

### Performance
- No external dependencies except Tailwind CDN
- Lazy loading ready
- Minimal JavaScript
- Optimized assets structure

### Dark Mode
- Respects system preference (`prefers-color-scheme`)
- Manual toggle with persistent storage
- Smooth transitions

## 📧 Contact

Hugo Cisneros Amengual
- Email: hugocisnerosamengual@gmail.com
- Phone: (+34) 635 80 98 12
- Location: Colmenar Viejo, Madrid, Spain

## 📄 License

This project is created for Hugo Cisneros Amengual's personal use.

---

Built with ❤️ for professional opportunities