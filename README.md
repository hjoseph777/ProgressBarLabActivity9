## ProgressBarLabActivity9 – Character Progress Tracker (Expo)

## Project Details
- Course: Cross Platform Mobile Development
- Author: Harry Joseph 
- Created: 2025-11-24
- Platform: Expo (React Native)
- Package Manager: npm
- React Native version: 18.3.1
- Progress Library: react-native-progress 5.0.1

## Overview
ProgressBarLabActivity9 demonstrates real-time progress tracking in React Native using the react-native-progress library. The project showcases how to create interactive progress indicators (Pie and Bar charts) that respond to user input with dynamic color changes based on completion status.

## Quick Download

**Get the complete project instantly:**

[![Download ProgressBarLabActivity9](https://img.shields.io/badge/Download-ProgressBarLabActivity9.zip-blue?style=for-the-badge&logo=download)](https://github.com/hjoseph777/ProgressBarLabActivity9/releases/download/v1/ProgressBarLabActivity9.zip)

## Live Demo
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://progressbarlabactivity9.vercel.app)

*Interactive character progress tracker - try typing to see real-time progress updates*

*Complete Expo project with character progress tracking ready to run*

## Important: Where your progress code lives
- The main progress tracking logic is in [`App.js`](App.js) with real-time character counting and progress calculation
- The Expo entry point is in [`index.js`](index.js) with root component registration

## Project Explorer
An interactive, collapsible view of the codebase. Click file names to open them.

<details open>
   <summary><strong>Core Files – Main Application Logic</strong></summary>

   - 📱 [`App.js`](App.js) – **Main progress tracker component with Pie/Bar indicators**
   - 🚀 [`index.js`](index.js) – **Expo root component registration**
</details>

<details>
   <summary><strong>Configuration & Meta</strong></summary>

   - ⚙️ [`app.json`](app.json) – Expo configuration (name, icons, splash)
   - 📦 [`package.json`](package.json) – Dependencies & scripts
   - 📝 [`README.md`](README.md) – Documentation (this file)
   - 🖼️ `assets/` – App icons and splash screens
</details>

## File Structure

```text
ProgressBarLabActivity9/
├── 📱 App.js                        # Main progress tracker component
├── 🚀 index.js                      # Expo entry point & root registration  
├── ⚙️ app.json                      # Expo configuration
├── 📦 package.json                  # Dependencies & scripts
├── 📁 assets/                       # App assets (icons, splash)
└── 📝 README.md                     # Documentation (this file)
```

### Quick Code Reference
| Icon | Type | Path | Purpose |
|------|------|------|---------|
| 📱 | Component | [`App.js`](App.js) | **Main progress tracker with Pie/Bar charts** |
| 🚀 | Entry | [`index.js`](index.js) | **Expo root component registration** |
| ⚙️ | Config | [`app.json`](app.json) | Expo app configuration |
| 📦 | Config | [`package.json`](package.json) | Dependencies & npm scripts |

## Core Features

### Progress Tracking
- **Real-time character counting**: Updates as user types (0-100 characters)
- **Dual progress indicators**: Both Pie chart and Bar chart synchronized
- **Dynamic color changes**: Blue for progress, Red when complete (100%)
- **Character limit enforcement**: TextInput maxLength prevents overflow

### Key Components Used
- `react-native-progress` Pie component for circular progress
- `react-native-progress` Bar component for linear progress  
- `TextInput` with multiline and maxLength properties
- `useState` hook for state management

### Color Scheme
- **Blue (`#007AFF`)**: Default progress color (iOS system blue)
- **Red (`#FF3B30`)**: Complete state color (iOS system red)
- **Light Gray (`#E1E1E1`)**: Unfilled progress background

## Getting Started

### Prerequisites
- Node.js (latest LTS)
- Expo CLI or Expo Go app
- npm or yarn package manager

### Installation
1. Clone or download the project
2. Navigate to project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
```bash
# Start the development server
npm start

# Or run on specific platform
npm run android    # Android device/emulator
npm run ios        # iOS device/simulator  
npm run web        # Web browser
```

### Deploying to Vercel
```bash
# Build for web deployment
npm run build-web

# Deploy to Vercel (make sure you have Vercel CLI installed)
vercel --prod
```

The project includes `vercel.json` configuration for seamless deployment to Vercel.

## How It Works

### Character Progress Logic
```javascript
// Calculate progress as fraction (0-1) based on character count
const progress = Math.min(inputText.length / 100, 1);

// Determine color based on completion status
const progressColor = isComplete ? '#FF3B30' : '#007AFF';
```

### Progress Components
- **Pie Progress**: Always blue for visual consistency
- **Bar Progress**: Changes color (blue → red) when reaching 100%
- **Character Counter**: Shows "X / 100 characters" with completion indicator

## Testing Checklist

- Type 30 characters → progress shows ~30%
- Type 100 characters → bar turns red, shows "✓ Complete!"  
- Delete characters → progress decreases, color returns to blue
- TextInput enforces 100 character maximum
- Both Pie and Bar update simultaneously

---

*This project demonstrates real-time progress tracking with visual feedback using React Native and the react-native-progress library.*