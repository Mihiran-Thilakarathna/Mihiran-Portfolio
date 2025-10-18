# ⚡ Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🚀 Step 1: Customize Your Data

Edit `src/data/portfolio.ts` and update:

### Personal Info
```typescript
export const personalInfo = {
  name: 'YOUR NAME',
  tagline: ['Your Title 1', 'Your Title 2', 'Your Title 3'],
  bio: 'Your bio text here...',
  email: 'your@email.com',
  phone: '+94 XX XXX XXXX',
  location: 'Your Location',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  kaggle: 'https://kaggle.com/yourusername',
  twitter: 'https://twitter.com/yourusername',
};
```

## 📝 Step 2: Add Your Content

### Work Experience
Update the `workExperience` array with your jobs

### Education
Update the `education` array with your degrees

### Projects
Update the `projects` array with your projects

### Certifications
Update the `certifications` array with your courses

### Skills
Update the `skills` array with your technologies

## 🎨 Step 3: Replace Images

Replace placeholder images with your photos:
1. Hero section image
2. About section image
3. Project screenshots

Place images in `public/` or `src/assets/`

## 🎯 Step 4: Test Locally

```bash
npm run dev
```

Visit http://localhost:5173 and check:
- [ ] All sections display correctly
- [ ] Your information is correct
- [ ] Links work
- [ ] Images load
- [ ] Contact form works
- [ ] Theme switching works
- [ ] Responsive on mobile

## 🚀 Step 5: Deploy

### Option A: Vercel (Recommended)
1. Push to GitHub
2. Go to vercel.com
3. Import your repository
4. Click Deploy
5. Done! 🎉

### Option B: GitHub Pages
```bash
npm install -D gh-pages
```

Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

Update `vite.config.ts`:
```typescript
base: '/portfolio/'
```

Deploy:
```bash
npm run build
npm run deploy
```

### Option C: Netlify
1. Build: `npm run build`
2. Drag `dist/` folder to netlify.com
3. Done! 🎉

## ✅ Pre-Launch Checklist

- [ ] Personal information updated
- [ ] All links tested
- [ ] Images replaced
- [ ] Contact form tested
- [ ] Tested on mobile
- [ ] Tested on different browsers
- [ ] No console errors
- [ ] SEO tags updated in `index.html`
- [ ] CV file added for download (optional)
- [ ] Google Analytics added (optional)

## 🎨 Optional: Customize Theme Colors

Edit `src/index.css`:

```css
:root {
  --bg-color: #f8f9fa;
  --card-bg: #ffffff;
  --text-color: #1f2937;
  --primary: #6366f1;  /* Change this to your brand color */
}
```

## 📞 Optional: Setup Contact Form with EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create email service
3. Create email template
4. Get your keys
5. Update Contact component

## 🎯 That's It!

Your portfolio is ready to go live! 🚀

**Need help?** Check:
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Detailed deployment guide
- `PROJECT_SUMMARY.md` - Complete feature list
- `CONTRIBUTING.md` - Development guidelines

---

**Made with ❤️ using React & TypeScript**
