# Ketan's Fasting Tracker - Setup Instructions

> For detailed technical documentation, see [TECHNICAL_DOCUMENTATION.md](./TECHNICAL_DOCUMENTATION.md)

## Quick Start

### Prerequisites

- Node.js 18+
- npm
- Git
- Supabase account (for database)
- Vercel account (for deployment)

### Local Development

```bash
# Clone repository
git clone https://github.com/ketankshukla/fasting-focused-lifestyle.git
cd fasting-focused-lifestyle

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173/ in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## Project Setup (From Scratch)

If you're setting up this project from the original `fasting_tracker.jsx` file:

### Step 1: Create React Project

```bash
npm create vite@latest . -- --template react
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 2: Install Dependencies

```bash
npm install @supabase/supabase-js recharts
```

### Step 3: Configuration Files

**vite.config.js:**

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

**tailwind.config.js:**

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

**vercel.json:**

```json
{
  "trailingSlash": false
}
```

### Step 4: Environment Variables

Set the following environment variables in your deployment platform:

| Variable                 | Description                  |
| ------------------------ | ---------------------------- |
| `VITE_SUPABASE_URL`      | Your Supabase project URL    |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous key  |
| `VITE_OWNER_PIN`         | PIN for owner authentication |

---

## Supabase Setup

### Create Tables

Run these SQL commands in your Supabase SQL editor:

```sql
-- Profiles table
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  height INTEGER,
  starting_weight DECIMAL,
  goal_weight DECIMAL,
  starting_waist DECIMAL,
  goal_waist DECIMAL,
  start_date DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Daily logs table
CREATE TABLE daily_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  date_key TEXT NOT NULL,
  weight DECIMAL,
  waist DECIMAL,
  notes TEXT,
  energy INTEGER,
  mood INTEGER,
  systolic INTEGER,
  diastolic INTEGER,
  glucose DECIMAL,
  sleep_hours DECIMAL,
  sleep_quality INTEGER,
  ketones DECIMAL,
  water_intake DECIMAL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, date_key)
);

-- Photos table
CREATE TABLE photos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  date_key TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Create Storage Bucket

1. Go to Supabase Dashboard → Storage
2. Create a new bucket called `progress-photos`
3. Set it to public (or configure RLS as needed)

### Enable Real-time

1. Go to Database → Replication
2. Enable real-time for `profiles`, `daily_logs`, and `photos` tables

---

## Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Vercel Settings

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Environment Variables in Vercel

1. Go to Project Settings → Environment Variables
2. Add all required variables (see Environment Variables section above)

---

## Features Overview

| Feature          | Description                                   |
| ---------------- | --------------------------------------------- |
| Dashboard        | Main view with timer, calendar, and stats     |
| Progress Charts  | Weight, waist, wellness, vitals, sleep charts |
| Photo Progress   | Upload and track progress photos              |
| Journal          | Personal diary with mood/energy tracking      |
| Rewards & Goals  | Streaks, achievements, and motivation         |
| Export Data      | Export as Text, JSON, or PDF                  |
| Backup & Restore | Full data backup/restore                      |
| Owner Mode       | PIN-protected data editing                    |

---

## File Structure

```
src/
├── components/
│   ├── Calendar/         # Calendar views
│   ├── Dashboard/        # Dashboard components
│   ├── Header/           # Header component
│   ├── Layout/           # Sidebar navigation
│   ├── Modals/           # Log and profile modals
│   └── FastingTracker.jsx # Main component
├── data/                 # Static data (schedule, colors)
├── hooks/                # Custom hooks for Supabase
├── lib/                  # Supabase client
├── utils/                # Utility functions
├── App.jsx
├── main.jsx
└── index.css
```

---

## Related Documentation

- [Technical Documentation](./TECHNICAL_DOCUMENTATION.md) - Detailed technical specs
- [README](./README.md) - Project overview
