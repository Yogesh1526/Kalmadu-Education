# Madhyamik Vidyalay Kalmadu - School & College Website

Official website for Madhyamik Vidyalay Kalmadu and Arts College located in Kalmadu village, Chalisgaon Taluka, Jalgaon District, Maharashtra.

## Features

- 🎓 Information about Secondary School (Grades 8-10)
- 🏛️ Details about Arts College (11th & 12th)
- 📚 Academic information and curriculum
- 🏫 Facilities and infrastructure details
- 📸 Gallery with images and videos
- 📰 News and announcements
- 📅 Upcoming events
- 💬 Testimonials
- 🌐 Bilingual support (English & Marathi)
- 📱 Fully responsive design

## Development

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`

### Build

```bash
# Production build
npm run build

# Build for GitHub Pages
npm run build:gh-pages
```

## Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Push your code to the `main` or `master` branch
2. The GitHub Actions workflow will automatically build and deploy to GitHub Pages
3. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

### Option 2: Manual Deployment

1. Build the project:
   ```bash
   npm run build:gh-pages
   ```

2. Copy `index.html` to `404.html` in the dist folder:
   ```bash
   # Windows PowerShell
   Copy-Item dist\kalmadu-school\browser\index.html dist\kalmadu-school\browser\404.html
   
   # Linux/Mac
   cp dist/kalmadu-school/browser/index.html dist/kalmadu-school/browser/404.html
   ```

3. Push the contents of `dist/kalmadu-school/browser` to the `gh-pages` branch

## Repository Structure

```
├── src/
│   ├── app/
│   │   ├── components/     # Reusable components (Header, Footer)
│   │   ├── pages/          # Page components
│   │   ├── services/       # Services (Translation)
│   │   ├── pipes/          # Custom pipes
│   │   └── translations/   # Translation data
│   └── assets/             # Static assets
├── .github/
│   └── workflows/          # GitHub Actions workflows
└── angular.json            # Angular configuration
```

## Technologies Used

- Angular 17+
- TypeScript
- CSS3
- HTML5

## License

This project is private and proprietary.

## Contact

For inquiries, please visit the [Contact Page](https://yogesh1526.github.io/Kalmadu-Education/contact) or email: info@kalmaduschool.edu.in
