# 🏍️ Bangalore Ride Planner

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

A modern, premium landing page for discovering 50+ curated motorcycle routes around Bangalore. Built with React 19, featuring dark theme with orange/red accents, smooth animations, and Google Maps integration.

![Version](https://img.shields.io/badge/version-1.0.0-orange)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/bangalore-ride-planner.git

# Navigate to project
cd bangalore-ride-planner

# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## ✨ Features

### 🏍️ 50+ Curated Routes
- **15 Sunrise Rides** - Nandi Hills, Skandagiri, Savandurga, Anthargange
- **15 Long Rides** - Mysore, Coorg, Hampi, Ooty, Gokarna, Munnar
- **10 Night Rides** - Airport Highway, NICE Road, Cubbon Park Circuit
- **10 Couple/Chill Rides** - Ramanagara, Wine Tasting, Lake Circuits

### 🎨 Premium Design
- Dark theme with orange/red accents (#ff5722)
- Smooth animations and hover effects
- Emoji badges for visual appeal (🌄 🌙 ❤️ 🏍️)
- Fully responsive mobile-first layout
- Glassmorphism effects and modern UI

### 🔥 Special Features
- **Best Picks Section** - 5 highlighted premium routes
- **Search & Filter** - Find routes by name, distance, or category
- **Google Maps Integration** - 📍 One-click navigation
- **Route Details** - Distance, duration, difficulty, stops, terrain, traffic
- **"Why This Ride?"** - Unique highlights for each route

## 📦 Tech Stack

- **React 19** - Latest React with concurrent features
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Beautiful, accessible components
- **Lucide React** - Modern icon library
- **React Router DOM** - Client-side routing
- **Vite/CRA** - Fast build tooling

## 🌐 Deploy

### Deploy to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

```bash
# Via CLI
yarn build
netlify deploy --prod --dir=build
```

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

```bash
# Via CLI
vercel --prod
```

## 📁 Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/ui/     # Shadcn UI components
│   ├── data/
│   │   └── routeData.js   # All 50 routes
│   ├── pages/
│   │   ├── Home.jsx       # Landing page
│   │   ├── RouteList.jsx  # Routes listing
│   │   └── RouteDetail.jsx # Route details
│   ├── hooks/
│   │   └── use-toast.js
│   ├── lib/
│   │   └── utils.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── netlify.toml           # Netlify config
├── vercel.json            # Vercel config
├── package.json
└── README.md
```

## 🎯 Routes Categories

### 🌄 Sunrise Rides (15)
Perfect for early morning adventures with breathtaking views:
- MG Road → Nandi Hills (62 km) - Most iconic
- Hebbal → Skandagiri (68 km) - Above clouds
- Bangalore → Savandurga (60 km) - Asia's largest monolith
- And 12 more...

### 🏍️ Long Rides (15)
Weekend getaways for experienced riders:
- Bangalore → Mysore (150 km) - Classic highway
- Bangalore → Coorg (270 km) - Coffee land
- Bangalore → Hampi (340 km) - UNESCO heritage
- And 12 more...

### 🌙 Night Rides (10)
Safe, well-lit routes for night riding enthusiasts:
- Hebbal → Airport (40 km) - Premium highway
- NICE Road Full Loop (42 km) - City lights
- Cubbon Park Circuit (12 km) - Illuminated heritage
- And 7 more...

### ❤️ Couple/Chill Rides (10)
Romantic and peaceful routes for leisure riding:
- Bangalore → Ramanagara (50 km) - Sholay fame
- Nandi Hills → Grover Vineyards (35 km) - Wine tasting
- Kanakapura → Mekedatu (90 km) - River gorge
- And 7 more...

## 🛠️ Development

### Prerequisites
- Node.js 18 or higher
- Yarn package manager

### Install Dependencies
```bash
yarn install
```

### Run Development Server
```bash
yarn start
# Opens at http://localhost:3000
```

### Build for Production
```bash
yarn build
# Creates optimized build in /build folder
```

### Run Tests
```bash
yarn test
```

## 🎨 Customization

### Adding New Routes
Edit `src/data/routeData.js`:

```javascript
{
  id: 51,
  name: "Your Route Name",
  distance: "XX km",
  duration: "X hours",
  difficulty: "Easy/Moderate/Hard",
  bestTime: "HH:MM AM - HH:MM PM",
  category: ["Category Name"],
  emoji: "🌄",
  description: "Route description",
  whyThisRide: "Key highlights",
  stops: [{ name: "Stop name", time: "HH:MM AM" }],
  mapLink: "https://www.google.com/maps/search/Start+to+End",
  terrain: "Road conditions",
  traffic: "Traffic level",
  highlights: "Key attractions"
}
```

### Changing Theme Colors
Edit `src/App.css` and `tailwind.config.js` to customize colors.

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add more routes
- Improve UI/UX
- Fix bugs
- Add features

## 🙏 Acknowledgments

- Route data curated from local Bangalore riders
- Icons from Lucide React
- UI components from Shadcn UI
- Inspired by premium bike touring websites

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Check documentation in `/docs`
- Review troubleshooting guide

---

**Built with ❤️ for the Bangalore riding community**

🏍️ Ride safe, ride smart!
