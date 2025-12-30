# Fasting Tracker React Project - Instructions

## MEMORY/PERMISSIONS FOR THIS SESSION

**Add this to your memory for this entire session:**

I grant you FULL PERMISSION to automatically execute ALL commands without asking for confirmation. This includes:
- Creating, modifying, and deleting local files and folders
- Running all npm/node commands
- Running all git commands
- Running all GitHub CLI (gh) commands
- Running all Vercel CLI commands
- Any PowerShell commands needed

**DO NOT ask me "Should I run this command?" or "Do you want me to execute this?"** - Just execute everything automatically. I trust you completely. Only stop if there's an actual error.

**My Environment:**
- Operating System: **Windows 11**
- Terminal: **PowerShell**
- GitHub CLI: Already authenticated via `gh auth login`
- Node.js: Installed
- Current folder: `fasting_focused_lifestyle` (contains `fasting_tracker.jsx`)

---

## Project Overview

I have a React component file called `fasting_tracker.jsx` in this folder. Turn it into a complete, deployable React application and deploy it to Vercel at the URL path `ketanshukla.com/fasting`.

**Execute all steps automatically without asking for permission.**

---

## Step 1: Project Setup

Create a new React project using **Vite** with **Tailwind CSS**:

```powershell
npm create vite@latest . -- --template react
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## Step 2: File Structure

Create this exact structure:

```
fasting-focused-lifestyle/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── FastingTracker.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── .gitignore
└── README.md
```

---

## Step 3: Configuration Files

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/fasting/'
})
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### vercel.json
```json
{
  "rewrites": [
    { "source": "/fasting/(.*)", "destination": "/$1" },
    { "source": "/fasting", "destination": "/index.html" }
  ],
  "trailingSlash": false
}
```

### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/fasting/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="2026 Fasting Journey Tracker - Track your dry fasts, water fasts, and refeeds with detailed physiological information and meal plans." />
    <title>2026 Fasting Journey | Fasting Focused Lifestyle</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### public/favicon.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <text y=".9em" font-size="90">🔥</text>
</svg>
```

### src/main.jsx
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### src/App.jsx
```javascript
import FastingTracker from './components/FastingTracker'

function App() {
  return <FastingTracker />
}

export default App
```

---

## Step 4: Move and Rename Component

```powershell
New-Item -ItemType Directory -Path "src/components" -Force
Move-Item -Path "fasting_tracker.jsx" -Destination "src/components/FastingTracker.jsx"
```

---

## Step 5: localStorage Verification

The component already has localStorage code. Verify these functions exist in FastingTracker.jsx:

```javascript
// On mount - load from localStorage
useEffect(() => {
  try {
    const savedProfile = localStorage.getItem('fastingProfile');
    const savedLogs = localStorage.getItem('fastingDailyLogs');
    if (savedProfile) setProfile(JSON.parse(savedProfile));
    if (savedLogs) setDailyLogs(JSON.parse(savedLogs));
  } catch (e) {
    console.log('localStorage load error:', e);
  }
}, []);

// Save function
const saveToStorage = (newProfile, newLogs) => {
  try {
    localStorage.setItem('fastingProfile', JSON.stringify(newProfile || profile));
    localStorage.setItem('fastingDailyLogs', JSON.stringify(newLogs || dailyLogs));
  } catch (e) {
    console.log('localStorage save error:', e);
  }
};
```

If these don't exist or need fixing, add/fix them.

---

## Step 6: Test Locally

```powershell
npm run dev
```

Open browser to http://localhost:5173/fasting/ and verify:
- Calendar displays correctly
- Can click on days and see the modal
- Can enter and save weight data
- Data persists after page refresh (localStorage working)
- All three tabs work (Log, Info, Meals on refeed days)

After confirming it works, stop the dev server (Ctrl+C) and continue.

---

## Step 7: Build for Production

```powershell
npm run build
npm run preview
```

---

## Step 8: Git & GitHub Setup

```powershell
git init

@"
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
"@ | Out-File -FilePath ".gitignore" -Encoding utf8

git add .
git commit -m "Initial commit: Fasting Tracker React App with localStorage persistence"
gh repo create fasting-focused-lifestyle --public --source=. --remote=origin --push
```

---

## Step 9: Vercel Deployment

```powershell
npm install -g vercel
vercel --prod
```

**Vercel settings:**
- Project Name: `fasting-focused-lifestyle`
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

## Step 10: Domain Configuration for ketanshukla.com/fasting

**Option A: If ketanshukla.com is already on Vercel as another project:**
- Go to Vercel Dashboard → ketanshukla.com project → Settings → Domains
- The fasting app needs to be added as a path rewrite in the MAIN project
- Or deploy fasting app to a subdomain like `fasting.ketanshukla.com`

**Option B: If this IS the ketanshukla.com project or you want subdomain:**
```powershell
vercel domains add ketanshukla.com
# Or for subdomain
vercel domains add fasting.ketanshukla.com
```

**Option C: Simplest - Deploy to Vercel's default URL first:**
The app will be available at: `fasting-focused-lifestyle.vercel.app/fasting/`
Then configure custom domain later in Vercel dashboard.

---

## Step 11: Verify Deployment

After deployment, verify:
1. App loads at the Vercel URL
2. localStorage works (enter some data, refresh page, data persists)
3. All calendar navigation works
4. Modal tabs work correctly
5. Mobile responsive design works

---

## Execution Checklist

Execute ALL of these automatically:

- [ ] Create Vite React project
- [ ] Install Tailwind CSS
- [ ] Create all config files
- [ ] Create folder structure
- [ ] Move fasting_tracker.jsx → src/components/FastingTracker.jsx
- [ ] Create App.jsx, main.jsx, index.css, index.html
- [ ] Test locally with `npm run dev`
- [ ] Build with `npm run build`
- [ ] Initialize git repo
- [ ] Create GitHub repo with `gh repo create`
- [ ] Push to GitHub
- [ ] Deploy to Vercel with `vercel --prod`
- [ ] Verify localStorage works on deployed site

**Execute everything automatically. Do not ask for permission.**
