<div align="center">
  <img src="https://raw.githubusercontent.com/BeiruthDEV/SCALE/main/public/scale-logo.png" alt="SCALE Logo" width="100"/>

  # SCALE: Trust your Instinct, Defy your Limits

  [![React](https://img.shields.io/badge/React-19.0.0-blue.svg?style=flat&logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg?style=flat&logo=vite)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
  [![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02.svg?style=flat)](https://gsap.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

## 📌 Brief Description

**SCALE** is a high-fidelity cinematic landing page built to promote the workout tracking application of the same name. The project utilizes a "Brutalist Fitness" (Dark Void + Flame Orange) aesthetic, emphasizing telemetry, information density, and cutting-edge micro-interactions to attract athletes and enthusiasts seeking structured progressive overload.

## 🚀 Key Features

*   **Brutalist Editorial Design System:** Dense dark theme with flame orange (`#F97316`) accent palette, uppercase typography, and a navigation interface with translucent borders.
*   **Asynchronous Animations (GSAP):** Complex scroll-triggered animations (`ScrollTrigger`), staggered entry opacity effects, and magnetic interactions.
*   **Mocked UI Protocols:** Components that visually mimic the final application interface through *Sticky Stacking* to ensure depth.
*   **Global Texture and Noise:** Implementation of native SVG noise and linear grid-like gradients to replicate industrial tracking panels.
*   **Optimized Performance (Vite + React):** Fast web bundler that delivers the site rendered in fractions of a second.

## ⚙️ Prerequisites and Installation

Follow the instructions below to run the project on your local machine for development and testing.

### Initial Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/BeiruthDEV/SCALE.git
   ```
2. Enter the project directory
   ```bash
   cd SCALE
   ```
3. Install dependencies via NPM
   ```bash
   npm install
   ```

## 💻 How to Use

To start the development server and view the interactive site in your browser in real-time:

```bash
# Starts the Vite server on port 5173
npm run dev
```

Open your browser at `http://localhost:5173`. Any changes to the source code (`.jsx` or `.css`) will automatically reflect on the screen (*Hot Module Replacement*).

To build the project for production:

```bash
# Bundles and minifies files into the /dist folder
npm run build
```

## 📁 Project Structure

Below is an overview of the main source code organization:

```text
SCALE/
├── public/                 # Public assets and meta-flags
├── src/
│   ├── components/         # Modular visual blocks of the application
│   │   ├── Features.jsx    # "App Features", micro-UI interactions
│   │   ├── Footer.jsx      # Call-to-action operative footer
│   │   ├── Header.jsx      # Navigation Bar with Blur/Magnetic effects
│   │   ├── Hero.jsx        # Main Cinematic Cover
│   │   ├── Philosophy.jsx  # Parallax Manifesto
│   │   └── Protocol.jsx    # UI Screens with GSAP Sticky Stacking
│   ├── App.jsx             # Main structure and component mounting
│   ├── index.css           # Global Tailwind styles and custom frames
│   └── main.jsx            # Central React entry point -> DOM
├── package.json            # CLI Scripts and dependency registry
├── tailwind.config.js      # Palette integrations and CSS tokens
└── vite.config.js          # Vite build tool configurations
```

## 🛠️ Built With

The foundation of the application and interface uses the following technical stack:

*   **[React 19](https://react.dev/):** Library for dynamic component-based interfaces.
*   **[Vite](https://vitejs.dev/):** Next-generation optimizing fast web build tool.
*   **[Tailwind CSS v4](https://tailwindcss.com/):** Utility-first CSS framework for lightning-fast prototyping.
*   **[GSAP](https://gsap.com/):** The industry standard for animations and visual manipulations in JavaScript.
*   **[Lucide React](https://lucide.dev/):** Modern vector library for clean iconography.

## 🤝 Contributing

Contributions make the open-source community an amazing place for technical evolution. Any structural suggestions and bug reports are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingNewFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingNewFeature`)
5. Open a Pull Request

## 📝 License

Distributed under the MIT License. See the `LICENSE` file in the root for more detailed information.

## ✉️ Author / Contact

**BeiruthDEV** - [GitHub Profile](https://github.com/BeiruthDEV)

Project Repository Link: [https://github.com/BeiruthDEV/SCALE](https://github.com/BeiruthDEV/SCALE)
