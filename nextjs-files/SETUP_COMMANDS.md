# 🚀 Complete Setup Commands - Copy & Paste

Follow these steps in order. Copy and paste each command into your terminal.

---

## 1️⃣ Create Next.js Project

```bash
npx create-next-app@latest vijaya-construction-nextjs
```

**When prompted, answer:**
- TypeScript? → **Yes**
- ESLint? → **Yes**
- Tailwind CSS? → **Yes**
- `src/` directory? → **No**
- App Router? → **Yes**
- Customize import alias? → **No**

---

## 2️⃣ Navigate to Project

```bash
cd vijaya-construction-nextjs
```

---

## 3️⃣ Install Dependencies

```bash
npm install motion lucide-react
```

---

## 4️⃣ File Structure Setup

Your project will have this structure:

```
vijaya-construction-nextjs/
├── app/
│   ├── layout.tsx       ← Replace with converted file
│   ├── page.tsx         ← Replace with converted file
│   ├── globals.css      ← Replace with your existing globals.css
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx       ← Copy from converted files
│   ├── Hero.tsx         ← Copy from converted files
│   ├── Services.tsx     ← Copy from converted files
│   ├── Stats.tsx        ← Copy from converted files
│   ├── Projects.tsx     ← Copy from converted files
│   ├── Testimonials.tsx ← Copy from converted files
│   ├── Contact.tsx      ← Copy from converted files
│   └── Footer.tsx       ← Copy from converted files
├── public/
│   ├── project1.png     ← Copy from your Figma assets
│   ├── project2.png     ← Copy from your Figma assets
│   ├── robots.txt       ← Copy your existing file
│   └── sitemap.xml      ← Copy your existing file
├── next.config.js       ← Create this file (see below)
└── package.json
```

---

## 5️⃣ Create Components Folder

```bash
mkdir components
```

---

## 6️⃣ Copy All Files

### From Figma Make Environment to Next.js:

1. **Copy `app/layout.tsx`** - Use the file from `/nextjs-files/layout.tsx`
2. **Copy `app/page.tsx`** - Use the file from `/nextjs-files/page.tsx`
3. **Copy `app/globals.css`** - Use your existing `/styles/globals.css`
4. **Copy all components** - From `/nextjs-files/components/` to `components/`
5. **Copy images** - Download project1.png and project2.png, place in `public/`
6. **Copy robots.txt** - From `/public/robots.txt` to `public/`
7. **Copy sitemap.xml** - From `/public/sitemap.xml` to `public/`

---

## 7️⃣ Create next.config.js

Create a file `next.config.js` in the root folder:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
```

---

## 8️⃣ Update sitemap.xml

Edit `public/sitemap.xml` and change the domain if needed:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.vijayaconstructionpblr.com/</loc>
    <lastmod>2024-12-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 9️⃣ Test Locally

```bash
npm run dev
```

**Open:** http://localhost:3000

✅ Your site should work perfectly!

---

## 🔟 Deploy to Vercel (FREE)

### Method 1: Vercel CLI (Fastest)

```bash
# Install Vercel globally
npm i -g vercel

# Login (creates account if needed)
vercel login

# Deploy to production
vercel --prod
```

### Method 2: GitHub + Vercel Dashboard

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Vijaya Construction Next.js"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/vijaya-construction.git
git branch -M main
git push -u origin main
```

Then:
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

---

## 1️⃣1️⃣ Connect Custom Domain

1. In Vercel Dashboard → Project Settings → Domains
2. Add: `vijayaconstructionpblr.com` and `www.vijayaconstructionpblr.com`
3. Update DNS at your domain registrar:

**Add these DNS records:**

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

4. Wait 24-48 hours for DNS propagation

---

## 1️⃣2️⃣ Submit to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `vijayaconstructionpblr.com`
3. Verify ownership (use DNS TXT record method)
4. Submit sitemap: `https://www.vijayaconstructionpblr.com/sitemap.xml`

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Site loads at your domain
- [ ] Right-click → "View Page Source" shows full HTML content (not empty divs)
- [ ] Meta tags visible in page source
- [ ] JSON-LD schema visible in page source
- [ ] Images load correctly
- [ ] Contact form submits to Google Sheets
- [ ] Mobile responsive
- [ ] Google Search Console shows sitemap

---

## 🐛 Troubleshooting

### Build Error: "Module not found"
```bash
npm install
```

### Images not loading
- Make sure images are in `public/` folder
- Reference them as `/image.png` (starting with `/`)

### Motion/React errors
```bash
npm install motion@latest
```

### Port 3000 already in use
```bash
npx kill-port 3000
npm run dev
```

---

## 📊 Your Next.js package.json Should Look Like:

```json
{
  "name": "vijaya-construction-nextjs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.0.0",
    "motion": "^10.16.0",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "eslint": "^8",
    "eslint-config-next": "14.0.0"
  }
}
```

---

## 🎉 Done!

Your site is now:
- ✅ Server-side rendered
- ✅ SEO optimized
- ✅ Hosted for FREE
- ✅ Google indexable
- ✅ Lightning fast

**Total Cost:** ~₹700/year (domain only)
