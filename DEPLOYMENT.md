# Deployment Guide

This guide covers multiple deployment options for your portfolio website.

## 📦 Build for Production

Before deploying, always build your project:

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

---

## 🚀 Deployment Options

### 1. GitHub Pages

**Free, easy, and perfect for personal portfolios**

#### Steps:

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to your `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Your repo name
})
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in your repository settings (Settings → Pages → Source: gh-pages branch)

---

### 2. Vercel

**Recommended - Zero configuration, automatic deployments**

#### Steps:

1. Push your code to GitHub

2. Visit [vercel.com](https://vercel.com) and sign up

3. Click "New Project" and import your GitHub repository

4. Vercel auto-detects Vite settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. Click "Deploy"

Your site will be live at: `https://your-project.vercel.app`

#### Custom Domain (Optional):
- Go to Project Settings → Domains
- Add your custom domain (e.g., mihiran.ai)
- Follow DNS configuration instructions

---

### 3. Netlify

**Another excellent option with drag-and-drop support**

#### Option A: Drag and Drop

1. Build your project:
```bash
npm run build
```

2. Visit [netlify.com](https://www.netlify.com) and sign up

3. Drag the `dist` folder to the Netlify dashboard

#### Option B: Git Integration

1. Push code to GitHub

2. Click "New site from Git" in Netlify

3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

4. Click "Deploy site"

---

### 4. Firebase Hosting

**Google's hosting solution**

#### Steps:

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase:
```bash
firebase init hosting
```

Configuration:
- Public directory: `dist`
- Single-page app: Yes
- Set up automatic builds with GitHub: No (optional)

4. Build and deploy:
```bash
npm run build
firebase deploy
```

---

### 5. AWS S3 + CloudFront

**For advanced users wanting AWS infrastructure**

#### Steps:

1. Create an S3 bucket in AWS Console

2. Enable static website hosting

3. Build your project:
```bash
npm run build
```

4. Upload `dist/` contents to S3

5. Create a CloudFront distribution pointing to your S3 bucket

6. Configure custom domain in Route 53

---

### 6. Render

**Free hosting with automatic deploys**

#### Steps:

1. Push code to GitHub

2. Visit [render.com](https://render.com) and sign up

3. Click "New Static Site"

4. Connect your GitHub repository

5. Configure:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

6. Click "Create Static Site"

---

## 🔧 Environment Variables

If you need environment variables (e.g., for EmailJS, Analytics):

### Vercel
1. Go to Project Settings → Environment Variables
2. Add your variables (e.g., `VITE_EMAILJS_SERVICE_ID`)

### Netlify
1. Go to Site Settings → Build & Deploy → Environment
2. Add your variables

### Local Development
Create a `.env.local` file:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🌐 Custom Domain Setup

### For Vercel:
1. Add domain in Project Settings
2. Update DNS records:
   - Type: A, Name: @, Value: `76.76.21.21`
   - Type: CNAME, Name: www, Value: `cname.vercel-dns.com`

### For Netlify:
1. Add domain in Domain Settings
2. Update DNS records:
   - Type: A, Name: @, Value: `75.2.60.5`
   - Type: CNAME, Name: www, Value: `your-site.netlify.app`

### For GitHub Pages:
1. Add `CNAME` file to `public/` folder with your domain
2. Update DNS:
   - Type: A, Name: @, Value: GitHub IPs
   - Type: CNAME, Name: www, Value: `yourusername.github.io`

---

## ✅ Pre-Deployment Checklist

- [ ] Update all personal information in `src/data/portfolio.ts`
- [ ] Replace placeholder images with real photos
- [ ] Test all links (social media, projects, etc.)
- [ ] Test contact form functionality
- [ ] Check responsive design on multiple devices
- [ ] Run `npm run build` successfully
- [ ] Test the production build locally with `npm run preview`
- [ ] Update README with correct URLs
- [ ] Add Google Analytics (optional)
- [ ] Set up proper error tracking (optional)
- [ ] Configure SEO meta tags in `index.html`

---

## 🔍 Performance Optimization

Before deploying:

1. **Optimize Images**: Compress all images using tools like TinyPNG
2. **Lazy Loading**: Images load as needed (already implemented)
3. **Code Splitting**: Vite handles this automatically
4. **Minimize Bundle**: Remove unused dependencies

Check performance:
```bash
npm run build
npm run preview
```

Use Lighthouse in Chrome DevTools to audit your site.

---

## 📊 Analytics (Optional)

### Google Analytics

1. Get your tracking ID from [analytics.google.com](https://analytics.google.com)

2. Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Blank Page After Deployment
- Check browser console for errors
- Verify `base` in `vite.config.ts` is correct
- Ensure all routes are properly configured

### 404 on Refresh
Add a `_redirects` file to `public/`:
```
/*    /index.html   200
```

---

## 📚 Additional Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Deployment Docs](https://react.dev/learn/start-a-new-react-project#deploying-to-production)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

---

**Need help?** Open an issue on GitHub or contact through the portfolio website.
