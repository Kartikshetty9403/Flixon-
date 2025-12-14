# Flixon 🎬

Flixon is a **movie web application** built using **React + Vite**.  
It allows users to explore trending movies, search for movies with debounce functionality, and dynamically ranks trending movies based on search popularity.

> 🚧 Currently a **frontend-only** project. Clicking on a movie card does not show movie details yet.

---

## ✨ Features

- 🔥 Trending movies section
- 🎞️ Movie cards with:
  - Rating
  - Language
  - Release date
- 🔍 Search bar with **debounce functionality**
- 📈 Trending movies ranked from **1–10** based on search count
- ⚡ Fast performance with Vite

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **TMDB API** – Fetch movie data
- **Appwrite** – Manage trending movies using search count
- **CSS / Tailwind** (if used)

---

## 🔐 Environment Variables

Create a '.env.local' file in the root directory:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id

▶️ How to Run Locally
npm install
npm run dev

```

📸 Screenshots:
Hero:
![Hero](https://github.com/Kartikshetty9403/Flixon-/blob/dc7528deafef8fcd7289634f8955db2ec2442582/screenshots/Flixon_hero.png)

Trending:

contents: 
![contents](https://github.com/Kartikshetty9403/Flixon-/blob/f2216f85f570757fcca82249ef0a8eccfec11c8e/screenshots/Flixon_content.png)


🚀 Future Improvements

Movie details page

User authentication

Watchlist feature

Improved trending algorithm
