# Madhyamik Vidyalay Kalmadu - School & College Website

A professional, modern website for Madhyamik Vidyalay Kalmadu, a secondary school and college located in Kalmadu village, Jalgaon District, Maharashtra.

## Features

- **Modern Angular Framework**: Built with Angular 17+ using standalone components
- **Responsive Design**: Fully responsive layout that works on all devices
- **Professional UI/UX**: Beautiful, modern design with smooth animations
- **Gallery Section**: Photo and video gallery with category filtering
- **Contact Form**: Interactive contact form for inquiries
- **Multiple Sections**: Home, About, Facilities, Gallery, and Contact pages

## Installation

1. Install Node.js (v18 or higher) and npm
2. Install Angular CLI globally:
   ```bash
   npm install -g @angular/cli
   ```
3. Install project dependencies:
   ```bash
   npm install
   ```

## Development

Run the development server:
```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/` in your browser.

## Build

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/      # Navigation header
│   │   └── footer/      # Footer component
│   ├── pages/
│   │   ├── home/        # Home page
│   │   ├── about/       # About page
│   │   ├── facilities/  # Facilities page
│   │   ├── gallery/     # Gallery page
│   │   └── contact/     # Contact page
│   ├── app.component.ts
│   └── app.routes.ts
├── assets/              # Static assets
├── index.html
├── main.ts
└── styles.css
```

## Customization

### Adding Images
Replace placeholder images in the gallery and other sections with your actual school photos. Update the image URLs in:
- `src/app/pages/gallery/gallery.component.ts`
- `src/app/pages/home/home.component.html`
- Other component files

### Adding Videos
Update the video embed URLs in `src/app/pages/gallery/gallery.component.ts` with your actual YouTube or video URLs.

### Contact Information
Update contact details in:
- `src/app/pages/contact/contact.component.ts`
- `src/app/components/footer/footer.component.html`

### Google Maps
Update the Google Maps embed URL in `src/app/pages/contact/contact.component.html` with your actual school location coordinates.

## Technologies Used

- Angular 17+
- TypeScript
- CSS3 (with modern features)
- Google Fonts (Poppins & Playfair Display)
- Responsive Grid Layout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Madhyamik Vidyalay Kalmadu.

## Support

For any questions or support, please contact the school administration.

