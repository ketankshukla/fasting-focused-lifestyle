# Technical Documentation - Ketan's Fasting Tracker

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Core Features](#core-features)
6. [Data Management](#data-management)
7. [Component Documentation](#component-documentation)
8. [Security Features](#security-features)
9. [Deployment](#deployment)
10. [Environment Variables](#environment-variables)
11. [Development Guide](#development-guide)
12. [Changelog](#changelog)

---

## Project Overview

Ketan's Fasting Tracker is a comprehensive web application designed to track and visualize a structured fasting journey throughout 2026. The application supports multiple fasting protocols including prolonged dry fasts, water fasts, and strategic refeed days with detailed physiological information and meal planning.

### Key Objectives

- Track daily fasting progress with detailed metrics (weight, waist, vitals, mood, energy)
- Visualize progress through interactive charts and statistics
- Provide motivational content and achievement tracking
- Enable data export in multiple formats (Text, JSON, PDF)
- Support photo progress tracking
- Maintain a personal journal/diary
- Share progress via social media or direct sharing

---

## Architecture

### Frontend Architecture

The application follows a **component-based architecture** using React 18 with functional components and hooks. State management is handled through React's built-in `useState` and `useEffect` hooks, with custom hooks for data persistence.

```
┌─────────────────────────────────────────────────────────────┐
│                        App.jsx                               │
│                           │                                  │
│                  ┌────────┴────────┐                        │
│                  │ FastingTracker  │                        │
│                  └────────┬────────┘                        │
│                           │                                  │
│    ┌──────────────────────┼──────────────────────┐          │
│    │                      │                      │          │
│ ┌──┴──┐            ┌──────┴──────┐         ┌────┴────┐     │
│ │Sidebar│          │Main Content │         │ Modals  │     │
│ └─────┘            └─────────────┘         └─────────┘     │
│                           │                                  │
│         ┌─────────────────┼─────────────────┐               │
│         │                 │                 │               │
│    Dashboard        Progress Charts    Rewards & Goals      │
│    - Timer          - Weight Chart     - Streaks            │
│    - Calendar       - Waist Chart      - Achievements       │
│    - Stats          - Wellness         - Motivation         │
│                     - Vitals                                 │
│                     - Sleep                                  │
│                     - Share Progress                         │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

```
┌──────────┐     ┌─────────────┐     ┌──────────┐
│  User    │────▶│   React     │────▶│ Supabase │
│  Input   │     │   State     │     │    DB    │
└──────────┘     └─────────────┘     └──────────┘
                       │
                       ▼
               ┌───────────────┐
               │  Real-time    │
               │  Subscriptions│
               └───────────────┘
```

---

## Technology Stack

### Frontend

| Technology   | Version | Purpose                 |
| ------------ | ------- | ----------------------- |
| React        | 18.x    | UI Framework            |
| Vite         | 6.x     | Build Tool & Dev Server |
| Tailwind CSS | 3.x     | Styling                 |
| Recharts     | 2.x     | Data Visualization      |

### Backend & Data

| Technology              | Purpose                     |
| ----------------------- | --------------------------- |
| Supabase                | Database & Authentication   |
| PostgreSQL              | Data Storage (via Supabase) |
| Supabase Storage        | Photo Storage               |
| Real-time Subscriptions | Live Data Sync              |

### Deployment

| Service | Purpose              |
| ------- | -------------------- |
| Vercel  | Hosting & Deployment |
| GitHub  | Version Control      |

---

## Project Structure

```
fasting_focused_lifestyle/
├── public/
│   └── favicon.svg                 # Fire emoji favicon
├── src/
│   ├── components/
│   │   ├── Calendar/
│   │   │   ├── MonthView.jsx       # Monthly calendar grid
│   │   │   ├── YearView.jsx        # Yearly overview
│   │   │   └── index.js            # Calendar exports
│   │   ├── Dashboard/
│   │   │   ├── AchievementBadges.jsx    # Achievement system
│   │   │   ├── BackupRestore.jsx        # Data backup/restore
│   │   │   ├── ExportData.jsx           # Export functionality
│   │   │   ├── FastingTimer.jsx         # Live fasting timer
│   │   │   ├── FastTypeStats.jsx        # Fasting type statistics
│   │   │   ├── JournalDiary.jsx         # Personal journal
│   │   │   ├── Legend.jsx               # Calendar legend
│   │   │   ├── MonthNavigation.jsx      # Month navigation
│   │   │   ├── MotivationalQuotes.jsx   # Daily inspiration
│   │   │   ├── PhotoProgress.jsx        # Photo tracking
│   │   │   ├── ProgressCharts.jsx       # Data visualization
│   │   │   ├── ProgressDashboard.jsx    # Main dashboard stats
│   │   │   ├── QuickLogButton.jsx       # Quick log FAB
│   │   │   ├── ShareProgress.jsx        # Social sharing
│   │   │   ├── StreakCounter.jsx        # Streak tracking
│   │   │   └── index.js                 # Dashboard exports
│   │   ├── Header/
│   │   │   ├── Header.jsx          # Page header
│   │   │   └── index.js            # Header exports
│   │   ├── Layout/
│   │   │   ├── Sidebar.jsx         # Navigation sidebar
│   │   │   └── index.js            # Layout exports
│   │   ├── Modals/
│   │   │   ├── LogModal.jsx        # Daily log entry modal
│   │   │   ├── ProfileModal.jsx    # Profile settings modal
│   │   │   └── index.js            # Modal exports
│   │   └── FastingTracker.jsx      # Main app component
│   ├── data/
│   │   ├── colors.js               # Color definitions for fast types
│   │   ├── defaultProfile.js       # Default profile settings
│   │   ├── fastingSchedule.js      # 2026 fasting schedule
│   │   └── index.js                # Data exports
│   ├── hooks/
│   │   ├── useSupabaseStorage.js   # Profile & logs hook
│   │   └── useSupabasePhotos.js    # Photo storage hook
│   ├── lib/
│   │   └── supabase.js             # Supabase client config
│   ├── utils/
│   │   └── calculations.js         # Utility functions
│   ├── App.jsx                     # App entry point
│   ├── main.jsx                    # React DOM render
│   └── index.css                   # Tailwind imports
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── vercel.json                     # Vercel deployment config
├── .gitignore                      # Git ignore rules
├── README.md                       # Project readme
├── INSTRUCTIONS.md                 # Setup instructions
└── TECHNICAL_DOCUMENTATION.md      # This file
```

---

## Core Features

### 1. Dashboard

The main dashboard provides an at-a-glance view of the fasting journey:

- **Fasting Timer**: Real-time tracking of current fast duration

  - Calculates elapsed time from 9 PM PST start time
  - Shows total hours, completed 24-hour days, current day progress
  - Daily log time indicator with countdown

- **Calendar Integration**: Interactive calendar showing fasting schedule

  - Color-coded days by fast type
  - Click to log daily data
  - Month and year navigation

- **Progress Statistics**: Key metrics display
  - Current weight, weight lost, remaining to goal
  - BMI calculation
  - Progress percentage with visual bar

### 2. Progress Charts

Comprehensive data visualization with multiple chart types:

- **Weight Progress**: Line chart tracking weight over time
- **Waist Progress**: Waist measurement trends
- **Wellness Metrics**: Energy and mood tracking (1-10 scale)
- **Vitals**: Blood pressure and glucose monitoring
- **Sleep Tracking**: Sleep hours and quality visualization

Features:

- Works with as little as 1 day of data
- Local timezone date handling
- Interactive tooltips
- Summary statistics

### 3. Share Progress

Integrated sharing functionality (moved under Progress Charts):

- Generate shareable text summaries
- Copy to clipboard
- Create progress images for social media
- Native share API support (mobile)
- Download progress images

### 4. Rewards & Goals

Combined section featuring:

- **Streak Counter**: Track consecutive logging days
- **Achievement Badges**: Unlock achievements based on milestones
- **Motivational Quotes**: Daily inspiration with quote rotation

### 5. Photo Progress

Visual progress tracking:

- Upload progress photos
- Organize by date
- View photo timeline
- Delete old photos
- Cloud storage via Supabase

### 6. Journal/Diary

Personal journaling feature:

- View daily notes chronologically
- Filter by mood and energy
- Search entries
- Modal view for detailed reading

### 7. Export Data

Multiple export formats:

- **Text Report**: Human-readable summary
- **JSON**: Raw data export for backup
- **PDF**: Styled printable report (opens in new tab)

### 8. Backup & Restore

Data management:

- Export complete data backup (JSON)
- Import data from backup file
- Preserves all logs, profile, and settings

---

## Data Management

### Supabase Schema

#### profiles Table

```sql
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
```

#### daily_logs Table

```sql
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
```

#### photos Table

```sql
CREATE TABLE photos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  date_key TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Real-time Subscriptions

The application uses Supabase real-time subscriptions to keep data in sync:

```javascript
// Profile changes subscription
supabase
  .channel("profiles-changes")
  .on(
    "postgres_changes",
    {
      event: "*",
      schema: "public",
      table: "profiles",
      filter: `user_id=eq.${USER_ID}`,
    },
    handleProfileChange
  )
  .subscribe();

// Daily logs subscription
supabase
  .channel("daily-logs-changes")
  .on(
    "postgres_changes",
    {
      event: "*",
      schema: "public",
      table: "daily_logs",
      filter: `user_id=eq.${USER_ID}`,
    },
    handleLogChange
  )
  .subscribe();
```

---

## Component Documentation

### FastingTracker.jsx (Main Component)

The root component that orchestrates the entire application.

**State Management:**

- `profile`: User profile data
- `dailyLogs`: All daily log entries
- `photos`: Progress photos
- `activeSection`: Current navigation section
- `isOwnerMode`: Owner authentication status
- `showPinModal`: PIN entry modal visibility

**Key Functions:**

- `requireOwnerAccess(action)`: Wraps actions requiring authentication
- `handleDayClick(dateKey)`: Opens log modal for a specific date
- `handleSectionChange(section)`: Navigation handler with localStorage persistence
- `renderContent()`: Renders appropriate content based on active section

### Custom Hooks

#### useSupabaseStorage.js

Manages profile and daily log data:

```javascript
const {
  profile, // Current profile object
  dailyLogs, // Object of all daily logs by date_key
  saveLog, // Function to save a daily log
  saveProfile, // Function to save profile changes
  loading, // Loading state
} = useSupabaseStorage(defaultProfile);
```

#### useSupabasePhotos.js

Manages photo storage:

```javascript
const {
  photos, // Object of photos by date_key
  savePhoto, // Upload new photo
  deletePhoto, // Remove photo
  getAllPhotoDates, // Get all dates with photos
  loading, // Loading state
} = useSupabasePhotos();
```

---

## Security Features

### Owner Mode Authentication

The application implements a PIN-based authentication system to protect data modifications:

**Protected Actions:**

- Editing profile settings
- Logging daily data (calendar click)
- Quick log button (pencil FAB)

**Implementation:**

```javascript
const requireOwnerAccess = (action) => {
  if (isOwnerMode) {
    action();
  } else {
    setPendingAction(() => action);
    setShowPinModal(true);
  }
};
```

**PIN Storage:**

- PIN is stored as an environment variable (`VITE_OWNER_PIN`)
- Not hardcoded in source code
- Set in deployment platform (Vercel) environment variables

**UI Indicators:**

- 🔒 icon when locked
- ⚙️ icon when unlocked
- Green "✓ Owner" badge when authenticated
- Click badge to lock again

---

## Deployment

### Vercel Configuration

**vercel.json:**

```json
{
  "trailingSlash": false
}
```

**vite.config.js:**

```javascript
export default defineConfig({
  plugins: [react()],
});
```

### Build Process

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Deployment Steps

1. Push to GitHub repository
2. Vercel auto-deploys from `master` branch
3. Environment variables set in Vercel dashboard
4. Site available at configured domain

---

## Environment Variables

| Variable                 | Description              | Required |
| ------------------------ | ------------------------ | -------- |
| `VITE_SUPABASE_URL`      | Supabase project URL     | Yes      |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key   | Yes      |
| `VITE_OWNER_PIN`         | Owner authentication PIN | Yes      |

**Note:** All Vite environment variables must be prefixed with `VITE_` to be exposed to the client.

---

## Development Guide

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Local Setup

```bash
# Clone repository
git clone https://github.com/ketankshukla/fasting-focused-lifestyle.git
cd fasting-focused-lifestyle

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

### Code Style

- Functional components with hooks
- Tailwind CSS for styling
- Component files use PascalCase
- Utility files use camelCase
- Consistent indentation (2 spaces)

---

## Changelog

### Version 1.0.0 (December 2025)

#### Initial Release

- Complete React application setup with Vite
- Tailwind CSS styling
- LocalStorage data persistence

#### Supabase Migration

- Migrated from localStorage to Supabase
- Added real-time subscriptions
- Photo storage with Supabase Storage
- Profile and daily logs tables

#### UI Improvements

- Sidebar navigation with grouped sections
- Responsive design for mobile
- Modal dialogs with proper centering
- Loading states with spinner

#### Feature Additions

- Fasting timer with 24-hour tracking
- Daily log time indicator (9 PM PST)
- Progress charts (Weight, Waist, Wellness, Vitals, Sleep)
- Export options (Text, JSON, PDF)
- Share progress functionality
- Photo progress tracking
- Achievement badges
- Streak counter
- Motivational quotes
- Journal/Diary

#### Dashboard Reorganization

- Moved Fasting Timer and Calendar to main Dashboard
- Combined Motivation, Achievements, Streaks into "Rewards & Goals"
- Moved Share Progress under Progress Charts
- Removed redundant menu items

#### Personalization

- Added Ketan's name throughout the application
- Sidebar: "Ketan's Tracker"
- Header: "Ketan's 2026 Fasting Journey"
- Dashboard: "Ketan's Progress"

#### Security

- Owner mode PIN authentication
- Protected all data-editing actions
- PIN stored in environment variable
- Visual indicators for locked/unlocked state

#### Bug Fixes

- Fixed date display to use local timezone
- Fixed modal centering with max-height constraints
- Fixed photo deletion real-time sync
- Fixed active section persistence across refreshes

---

## Support

For issues or questions, please open an issue on the GitHub repository.

**Repository:** https://github.com/ketankshukla/fasting-focused-lifestyle

**Live Site:** https://fasting.ketanshukla.com
