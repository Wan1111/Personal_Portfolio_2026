# Troubleshooting URL Issues

## If Local Dev Server (localhost:5173) Doesn't Work:

1. **Check if the server is running:**
   ```bash
   npm run dev
   ```
   You should see: `Local: http://localhost:5173/`

2. **If port 5173 is busy, Vite will use the next available port**

3. **Check browser console for errors (F12)**

4. **Clear browser cache and hard refresh (Ctrl+Shift+R)**

---

## If Netlify URL Doesn't Work:

### Check 1: Verify Deployment
- Go to Netlify dashboard
- Check if deployment succeeded (green checkmark)
- Look for any build errors

### Check 2: Verify Build Settings
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18 (set in netlify.toml)

### Check 3: Check _redirects File
The `_redirects` file should be in `public/_redirects` and will be copied to `dist/_redirects` during build.

Content should be:
```
/*    /index.html   200
```

### Check 4: Common Issues

**404 Errors:**
- Make sure `_redirects` file exists in `public/` folder
- Rebuild: `npm run build`
- Redeploy on Netlify

**Blank Page:**
- Check browser console (F12) for JavaScript errors
- Verify all assets are loading
- Check Network tab for failed requests

**Routing Issues:**
- The `_redirects` file handles SPA routing
- All routes should redirect to `/index.html`

---

## Quick Fixes:

1. **Rebuild the project:**
   ```bash
   npm run build
   ```

2. **Verify dist folder:**
   - Should contain: `index.html`, `_redirects`, `assets/`, `images/`

3. **Test locally:**
   ```bash
   npm run preview
   ```
   This serves the built `dist` folder

4. **Redeploy on Netlify:**
   - Trigger a new deployment
   - Or drag & drop the `dist` folder again

---

## Still Not Working?

1. Check Netlify deployment logs
2. Verify all environment variables (if any)
3. Check browser console for specific errors
4. Try incognito/private browsing mode
5. Clear Netlify cache: Site settings → Build & deploy → Clear cache
