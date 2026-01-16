# Netlify Deployment Guide

## Method 1: Deploy via Netlify UI (Recommended - Easiest)

### Step 1: Push to GitHub
1. Create a new repository on GitHub
2. Initialize git in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Step 2: Deploy on Netlify
1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Sign up or log in
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub** and authorize Netlify
5. Select your repository
6. Netlify will auto-detect settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. Click **"Deploy site"**

### Step 3: Configure Environment (Optional)
- Go to Site settings → Environment variables (if needed)
- Your site will be live at: `https://your-site-name.netlify.app`

---

## Method 2: Deploy using npx (No Global Install)

Since you have Node.js 19.7.0, you can use npx to run Netlify CLI without installing globally:

```bash
# Login to Netlify
npx netlify-cli login

# Initialize and deploy
npx netlify-cli init
npx netlify-cli deploy --prod
```

---

## Method 3: Manual Drag & Drop Deployment

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)

3. Drag and drop the `dist` folder

4. Your site will be deployed instantly!

---

## Important Notes

- Your `netlify.toml` is already configured correctly
- The build output is in the `dist` folder
- All images are in `public/images/` and will be included
- The contact form uses Netlify Forms (works automatically)

## After Deployment

1. **Custom Domain:** Go to Site settings → Domain management
2. **Form Submissions:** View in Site overview → Forms
3. **Analytics:** Enable in Site settings → Analytics
