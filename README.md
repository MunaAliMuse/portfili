# Muna Ali Muuse – Full Stack Developer Portfolio

**Repository:** [https://github.com/MunaAliMuse/portfilia](https://github.com/MunaAliMuse/portfilia)

Portfolio built with **React + Vite** only (no backend, no API). Data is in the frontend.

## Structure

- **frontend/** – React + Vite app
  - **src/components/** – Header, Hero, About, Skills, Projects, ContactSection
  - **src/data/profile.js** – profile (name, email, bio, aboutMe, links) and skills
  - Plain CSS (Dark Blue + Green theme)

## Run locally

```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:5173**.

**CV Download:** Put your PDF as `frontend/public/cv.pdf` so “Download CV” works.

## Deploy (Vercel)

1. Push the project to GitHub.
2. In [Vercel](https://vercel.com): New Project → import repo.
3. Set **Root Directory** to `frontend`.
4. Deploy (Vercel will run `npm install` and `npm run build` in `frontend/`).

## Deploy – GitHub Pages (live site)

1. Repo-ka GitHub **Settings** → **Pages** → **Source:** Deploy from a branch.
2. **Branch:** `master` (ama `main`), **Folder:** `/ (root)` → **Save**.
3. Gudaha project-ka (frontend):
   ```bash
   cd frontend
   npm install
   npm run deploy:gh
   ```
4. Marka push-ku dhammaado, site-ka live waa: **https://MunaAliMuse.github.io/portfilia/**  
   (Haddii repo-ku magaciisa yahay `port` ama `portfio`, beddel **vite.config.js** → `base: '/port/'` ama `'/portfio/'`).

More options in **DEPLOY.md**.

## Customize

- **frontend/src/data/profile.js** – Edit `profile` (name, title, email, whatsapp, github, linkedin, bio, aboutMe) and `skills` (Frontend, Backend, Database, Tools).
- **frontend/src/components/Projects.jsx** – Edit the `PROJECTS` array for project titles, descriptions, and links.

## GitHub

- Profile: **https://github.com/MunaAliMuse**
