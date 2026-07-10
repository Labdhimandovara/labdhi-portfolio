# Labdhi Mandovara - Personal Portfolio Website

A premium, highly interactive personal portfolio website showcasing the intersection of artificial intelligence, core systems engineering, and creative graphic design.

Built with a light, warm humanistic theme (creams, warm oatmeal beiges, and muted terracotta highlights), clean bento card structures, and responsive layouts.

---

## 🚀 Tech Stack

* **Core**: React, Vite (SPA configuration)
* **Styling**: Tailwind CSS
* **Animations**: Framer Motion
* **Icons**: Lucide React
* **Deployment**: Configured for Vercel

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   └── favicon.svg           # Website favicon
├── src/
│   ├── assets/               # Integrated graphics & imagery
│   │   ├── profile.jpg       # Profile picture (with organic animation)
│   │   ├── projects/         # Generated project mockups
│   │   └── artwork/          # Drawings and illustrations
│   ├── components/           # Reusable modular components
│   │   ├── Navbar.jsx        # Sticky floating glass header
│   │   ├── Hero.jsx          # Bio greeting & typing animation
│   │   ├── About.jsx         # Authentic story narrative
│   │   ├── Skills.jsx        # Tabbed skills exploration board
│   │   ├── Projects.jsx      # alternating case studies detailed display
│   │   ├── Timeline.jsx      # Work, Hackathon badges, & Certifications cards
│   │   ├── CreativeCorner.jsx# Tilt-on-hover Polaroid grid & lightbox modal
│   │   └── Contact.jsx       # Connect form & footer credits
│   ├── data/
│   │   └── portfolioData.js  # Central database for updating copy easily
│   ├── App.jsx               # Page layout assembly
│   ├── main.jsx              # DOM rendering root
│   └── index.css             # Styling rules, custom animations
├── tailwind.config.js        # Design tokens & color system
├── vercel.json               # SPA routing configurations for Vercel
├── package.json              # Script dependencies
└── README.md                 # Project handbook
```

---

## 🛠️ Local Development

### 1. Prerequisite
Ensure you have [Node.js](https://nodejs.org/) installed.

### 2. Install Dependencies
Navigate to the root directory and install dependencies:
```bash
npm install
```

### 3. Launch Development Server
Start the hot-reloading dev environment:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## ✍️ How to Edit & Update Content

The entire website is database-driven. To update your bio text, change skills, add new project links, or upload new artwork:
1. Open the file `src/data/portfolioData.js`.
2. Edit the plain JavaScript objects (e.g. `personalInfo`, `skills`, `projects`, `experience`, `artworks`).
3. Save the file. The site will hot-reload automatically in your local preview!

To swap photos:
* Place your new `.jpg`/`.png` file inside the appropriate `src/assets` folder.
* Update the import statements at the top of `src/data/portfolioData.js` to point to your new file name.

---

## ☁️ Deployment to Vercel

### Option 1: Vercel Dashboard (Easiest)
1. Push your code folder to a **GitHub** repository.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select your GitHub repository.
4. Keep the default settings (Vercel automatically detects Vite) and click **Deploy**.

### Option 2: Vercel CLI
If you have Vercel CLI installed:
```bash
npm install -g vercel
vercel
```
Follow the interactive CLI prompts to link and deploy your site instantly.
