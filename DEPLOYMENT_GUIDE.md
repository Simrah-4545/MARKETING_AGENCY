# 🚀 Hosting & Deployment Guide for adwaydigital.org

This document provides step-by-step instructions to host your website **adwaydigital.org** on **Hostinger** or **Vercel**.

---

## 🛠️ Option 1: Hosting Directly on Hostinger (Recommended & Easiest)

Since you already purchased the domain `adwaydigital.org` from **Hostinger**, hosting the website directly on Hostinger takes under 5 minutes:

### Step 1: Log in to Hostinger hPanel
1. Go to [Hostinger hPanel](https://hpanel.hostinger.com) and sign in.
2. Click on **Websites** in the top menu and select **adwaydigital.org** (or click **Create or Migrate a Website** if not listed).
3. If setting up a standard web hosting plan (Premium/Business Web Hosting):
   - Choose **Create a new website** -> **Empty Website** or **File Manager**.

### Step 2: Upload Website Files via Hostinger File Manager
1. In your **hPanel dashboard**, click on **File Manager**.
2. Navigate inside the `public_html` directory.
3. If there are default sample files (like `default.php` or `index.html`), delete them.
4. Upload all files from the `MARKETING_AGENCY` folder:
   - `index.html`
   - `style.css`
   - `app.js`
   - `vercel.json`
   - The entire `assets` folder (containing `logo.png`).
5. Ensure `index.html` is directly inside `public_html/index.html`.

### Step 3: Verify Domain & SSL Certificate
1. In hPanel, go to **Security** -> **SSL**.
2. Ensure **Free Unlimited SSL** is active for `adwaydigital.org` so your site loads securely over `https://adwaydigital.org`.
3. Open `https://adwaydigital.org` in your browser to test your site!

---

## ⚡ Option 2: Hosting on Vercel (Free High-Performance CDN) + Hostinger Domain Connection

If you want super-fast global loading and automatic git deployments, you can host your files on **Vercel** and connect your Hostinger domain.

### Step 1: Deploy to Vercel
#### Method A: Using Vercel CLI (Command Line)
1. Open PowerShell / Terminal in your project folder (`d:\antigravity\MARKETING_AGENCY`).
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the prompts:
   - Log in / Link Vercel account.
   - Project name: `adwaydigital`
   - Output directory: `./`
4. Deploy to production:
   ```bash
   npx vercel --prod
   ```

#### Method B: Drag and Drop via Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com) and log in.
2. Click **Add New...** -> **Project**.
3. Import your GitHub repository (or upload the folder).
4. Click **Deploy**.

### Step 2: Connect Domain `adwaydigital.org` on Vercel
1. In your Vercel Project Dashboard, go to **Settings** -> **Domains**.
2. Type `adwaydigital.org` and click **Add**.
3. Vercel will show DNS records to add to Hostinger.

### Step 3: Add DNS Records in Hostinger DNS Zone Editor
1. Log in to **Hostinger hPanel**.
2. Go to **Domains** -> **adwaydigital.org** -> **DNS / Nameservers**.
3. Add/Update the following DNS records:
   - **Type**: `A`
   - **Name**: `@`
   - **Points to / Value**: `76.76.21.21`
   - **TTL**: `3600`
   
   - **Type**: `CNAME`
   - **Name**: `www`
   - **Points to / Value**: `cname.vercel-dns.com.`
   - **TTL**: `3600`
4. Save DNS changes. Propagation takes 5-15 minutes.
5. Your site will automatically go live at `https://adwaydigital.org` with free SSL!

---

## 📞 Primary Contact Numbers Configured in Website

- **WhatsApp Direct**: `+91-9760094558` (`https://wa.me/919760094558`)
- **Calling Line**: `8923815818` (`tel:8923815818`)
- **Official Domain**: `adwaydigital.org`
