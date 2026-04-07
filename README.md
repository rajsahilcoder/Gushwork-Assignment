# Mangalam Pipes Design Assignment

This project is a pixel-perfect, responsive web page implementing the "Mangalam Pipes" interface from Figma specifications. Built using **vanilla HTML, CSS, and JS only** (no libraries or frameworks).

## Setup & Running the Project

Since the project strictly avoids modern build tools and ES Modules (`type="module"`), you can run this project locally without needing complex Node.js or Python environments.

**Method 1: Direct File Access (Easiest)**
1. Navigate to the project root directory in your file explorer.
2. Double-click the `index.html` file to open it directly in your default web browser. 

**Method 2: Local Web Server (For Development)**
If you use VS Code, install the "Live Server" extension:
1. Open the project folder in VS Code.
2. Right-click on `index.html` and select **"Open with Live Server"**.

### Asset Configuration
Temporary placeholder images have been used to fill the carousel components. 
To inject your own exported Figma assets:
- Drop your exported PNGs/SVGs into the `assets/` directory.
- Open `index.html` and search for `<img src="https://images.unsplash.com/...`
- Replace that `src` with the relative path to your file (e.g., `src="assets/Background Shape.png"`).

## Modular Architecture 

To adhere dynamically to the maximum 300 line-of-code rule and to strictly enforce SOLID principles using vanilla languages, the architecture has been thoroughly fractured into highly scalable functional components.

### 🗂 File Structure Overview
```
├── index.html            // Core Entrypoint
├── styles.css            // Core Stylesheet (Responsible for Importing smaller CSS files)
├── styles/               // Modular CSS Repository
│   ├── variables.css     // Figma tokens (Fonts, Colors, Spacing Breakpoints)
│   ├── global.css        // Layout resets, typography config, native button styling
│   ├── header.css        // Component: Sticky Header Styling
│   ├── hero-carousel.css // Component: Main Hero layout and the Interactive zoom styling
│   ├── sections.css      // Component: Pricing grids, Contact grid, Feature grid
│   └── footer.css        // Component: Footer layouts
└── js/                   // Modular JS Repository
    ├── header.js         // Logic for passive scroll tracking and sticky mechanics
    ├── carousel.js       // Logic for Image gallery switching and cursor coordinate zoom mapping
    └── accordion.js      // Logic for expanding/collapsing FAQ items
```

## Key Features

1. **Sticky Header Functionality**
   - The header remains entirely absolute alongside the hero section until the user scrolls beyond the first fold (`100vh`).
   - If scrolling downwards after the fold, the header minimizes cleanly. If the user scrolls upwards, the header reappears securely affixed to the viewport roof.
   
2. **E-Commerce Image Carousel with Zoom**
   - Incorporates a lens element positioned directly over your mouse pointer.
   - Calculates proportional coordinates to render a 2X magnified preview panel simultaneously adjacent to the carousel body.

3. **Responsive Grid Design**
   - Evaluated to ensure complete structural fluidity up to desktop (`1600px`/`1440px`), seamlessly resizing to tablet variants (`1080px`, `800px`) and collapsing elegantly into stacked mobile views (`360px`).
