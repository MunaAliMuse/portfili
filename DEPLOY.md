# Online u saar – Portfolio (Deploy)

Si aad portfolio-ga ugu saarto internet (online), raac talaabooyinkan. **Render.com** waa free oo fudud.

---

## Option 1: Render.com (recommended – backend + bogga)

1. **GitHub-ka push**
   - Haddii aad hore ugu push galeen, skip.
   - Haddii aan: fur https://github.com/new, abuur repo (e.g. `portfolio`), kadib:
   ```powershell
   cd c:\Users\hp\Desktop\portfio
   git init
   git add .
   git commit -m "Portfolio Muna Ali Muuse"
   git branch -M main
   git remote add origin https://github.com/MunaAliMuse/portfilia.git
   git push -u origin main
   ```

2. **Render-ka**
   - Tag https://render.com, **Sign Up** (oo isticmaal GitHub).
   - **New** → **Web Service**.
   - Xiriir repo-kaaga (portfolio).
   - **Settings:**
     - **Root Directory:** `backend`
     - **Build Command:** (ka tag; ma baahna)
     - **Start Command:** `node server.js`
     - **Instance type:** Free
   - **Create Web Service**.

3. **Link-kaaga**
   - Kadib waxaad heli doontaa link sida: `https://portfolio-xxxx.onrender.com`
   - Tag link-kaan – waa portfolio-gaaga online.

**Xusuus:** Free instance waxay seegi kartaa (sleep) haddii wax traffic ah ma jiro; page first load wuu gaaban yahay.

---

## Option 2: Vercel (bogga React + API)

1. GitHub-ka push (sida Option 1).
2. Tag https://vercel.com, **Add New** → **Project**, xiriir repo-kaaga.
3. **Root Directory:** `frontend`
4. **Build Command:** `npm run build`
5. **Output Directory:** `dist`
6. **Deploy**.

Backend (API) waa inaad ku saarto meel kale (e.g. Render sida Option 1) oo frontend-ka Vercel ku beddashaa API URL-ka.

---

## Option 3: GitHub Pages (bogga kaliya – ma jiro backend)

- Portfolio-ga HTML (static) waxaad u buildi kartaa oo u pushi kartaa `gh-pages` branch.
- Contact form-ka ma shaqeyn doono haddii backend online ah ma jiro (waxaad isticmaali kartaa tusaale Formspree).

---

## Summary

| Service   | Waxaad heli kartid              | Free |
|----------|----------------------------------|------|
| Render   | Portfolio + API (one link)       | Yes  |
| Vercel   | React frontend                   | Yes  |
| Netlify  | Static / React                   | Yes  |

**Recommendation:** Use **Render** with **Root Directory: backend** so one URL gives you the full portfolio (page + API + contact form).
