# 🔥 Ketan's Fasting Tracker

A comprehensive React-based fasting journey tracker for 2026. Track dry fasts, water fasts, and refeeds with detailed physiological information, progress charts, and meal planning.

**Live Site:** [fasting.ketanshukla.com](https://fasting.ketanshukla.com)

## ✨ Features

### Core Tracking

- 📅 **Interactive Calendar** - Year and month navigation with color-coded fast types
- ⏱️ **Fasting Timer** - Real-time tracking with 24-hour period calculations
- 📊 **Daily Logging** - Weight, waist, vitals, mood, energy, sleep, and notes

### Progress Visualization

- 📈 **Progress Charts** - Weight, waist, wellness, vitals, and sleep charts
- 📸 **Photo Progress** - Upload and track visual progress over time
- 🏆 **Rewards & Goals** - Streaks, achievements, and daily motivation

### Data Management

- 📤 **Export Options** - Text, JSON, and styled PDF reports
- 💾 **Backup & Restore** - Full data backup and restore functionality
- ☁️ **Cloud Sync** - Real-time data sync with Supabase

### Security

- 🔐 **Owner Mode** - PIN-protected data editing for public sharing

## 🛠️ Tech Stack

| Category   | Technology            |
| ---------- | --------------------- |
| Frontend   | React 18, Vite        |
| Styling    | Tailwind CSS          |
| Charts     | Recharts              |
| Database   | Supabase (PostgreSQL) |
| Storage    | Supabase Storage      |
| Deployment | Vercel                |

## 🚀 Quick Start

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

## 📦 Build

```bash
npm run build
npm run preview
```

## 📚 Documentation

| Document                                                   | Description                       |
| ---------------------------------------------------------- | --------------------------------- |
| [INSTRUCTIONS.md](./INSTRUCTIONS.md)                       | Setup and deployment instructions |
| [TECHNICAL_DOCUMENTATION.md](./TECHNICAL_DOCUMENTATION.md) | Detailed technical documentation  |

## 🌐 Deployment

Deployed to Vercel with automatic deployments from the `master` branch.

### Environment Variables Required

| Variable                 | Description              |
| ------------------------ | ------------------------ |
| `VITE_SUPABASE_URL`      | Supabase project URL     |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key   |
| `VITE_OWNER_PIN`         | Owner authentication PIN |

## 📁 Project Structure

```
src/
├── components/        # React components
│   ├── Calendar/      # Calendar views
│   ├── Dashboard/     # Dashboard components
│   ├── Header/        # Header component
│   ├── Layout/        # Sidebar navigation
│   └── Modals/        # Modal dialogs
├── data/              # Static data (schedule, colors)
├── hooks/             # Custom React hooks
├── lib/               # External library configs
└── utils/             # Utility functions
```

## 📝 License

Private project for personal use.

---

**Author:** Ketan Shukla  
**Repository:** [github.com/ketankshukla/fasting-focused-lifestyle](https://github.com/ketankshukla/fasting-focused-lifestyle)
