# Deployment Guide for Hugo Cisneros CV Website

## Quick Deploy Options

### 1. GitHub Pages (Free, Recommended)

**Steps:**
1. Create a GitHub account if you don't have one
2. Create a new repository (e.g., "hugo-cv")
3. Open PowerShell in your project folder and run:

```powershell
git init
git add .
git commit -m "Initial CV website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hugo-cv.git
git push -u origin main
```

4. Go to your repository on GitHub
5. Click "Settings" → "Pages"
6. Under "Source", select "main" branch
7. Click "Save"
8. Your site will be live at: `https://YOUR_USERNAME.github.io/hugo-cv/`

**Time to deploy:** ~5 minutes  
**Cost:** Free  
**Custom domain:** Supported

---

### 2. Netlify (Free, Easiest)

**Method A - Drag & Drop (Fastest):**
1. Go to https://www.netlify.com/
2. Sign up with GitHub/email
3. Drag your entire `CV_HUGO` folder to the drop zone
4. Done! You'll get a URL like `https://random-name.netlify.app`

**Method B - Git Integration:**
1. Push code to GitHub (see GitHub Pages steps 1-3)
2. Go to Netlify → "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Leave build settings empty
5. Click "Deploy"

**Enable Contact Form:**
- Already configured! The form will automatically work on Netlify
- View submissions in Netlify Dashboard → Forms

**Time to deploy:** ~2 minutes  
**Cost:** Free  
**Custom domain:** Supported  
**SSL:** Automatic

---

### 3. Vercel (Free, Fast)

**Steps:**
1. Push your code to GitHub (see GitHub Pages steps 1-3)
2. Go to https://vercel.com/
3. Sign up with GitHub
4. Click "Import Project"
5. Select your repository
6. Click "Deploy"

**Time to deploy:** ~2 minutes  
**Cost:** Free  
**Custom domain:** Supported  
**SSL:** Automatic

---

### 4. Local Testing with XAMPP (Already Working!)

Since you have XAMPP:
1. The site is already in `C:\Users\JORGE_HP\Desktop\XAMPP2024\htdocs\CV_HUGO\`
2. Start Apache in XAMPP Control Panel
3. Visit: `http://localhost/CV_HUGO/`

---

## Custom Domain Setup

If you have a custom domain (e.g., hugocisneros.com):

### GitHub Pages:
1. Add a file named `CNAME` with your domain
2. Configure DNS: `A` record to `185.199.108.153`

### Netlify/Vercel:
1. Go to Domain Settings
2. Add your custom domain
3. Update DNS as instructed

---

## Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] Add your profile photo as `assets/profile.jpg`
- [ ] Add your CV PDF as `assets/Hugo_Cisneros_CV.pdf`
- [ ] Update LinkedIn URL in footer if needed
- [ ] Test the site locally
- [ ] Check all links work
- [ ] Verify mobile responsiveness

---

## Environment Variables (If needed for contact form)

For Netlify Forms, no environment variables are needed!
The form is already configured with `data-netlify="true"`.

---

## Post-Deployment

After deploying:

1. **Test the site** on different devices
2. **Check SEO**: Use Google Search Console
3. **Share your URL**: Add it to LinkedIn, resume, etc.
4. **Monitor traffic**: Use Netlify/Vercel analytics (free)

---

## Troubleshooting

**Site not loading?**
- Wait 2-5 minutes after deployment
- Check if DNS propagated (use https://dnschecker.org/)
- Clear browser cache

**Contact form not working?**
- Make sure you're deployed on Netlify
- Check Netlify Dashboard → Forms

**Images not showing?**
- Verify file paths are correct
- Check file names match exactly (case-sensitive)

---

## Recommended: Netlify

**Why Netlify is best for this project:**
- ✅ Easiest deployment (drag & drop)
- ✅ Free SSL certificate
- ✅ Contact form works automatically
- ✅ Fast global CDN
- ✅ Preview deployments
- ✅ Custom domain support

**Your Netlify URL will look like:**
`https://hugo-cisneros.netlify.app`

You can customize it in Site Settings → Change site name

---

Need help? Contact the developer or check the documentation for each platform.
