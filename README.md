# HITL Commerce UI

This repository contains a static prototype for the HITL (Human-In-The-Loop) e-commerce experience. The goal is to provide a high-fidelity front-end mockup that demonstrates the core UX flows for assisted shopping, curated collections, and AI-guided support.

## Getting started

Open `index.html` in your browser or serve the project locally with any static file server. For example:

```bash
python -m http.server 8080
```

Then browse to `http://localhost:8080`.

## Project structure

- `index.html` – landing page markup for the HITL experience.
- `styles.css` – visual design tokens and responsive layout styles.
- `script.js` – lightweight interactions such as product filtering and scroll effects.
- `assets/` – SVG textures used for backgrounds.

## Customizing

Update the product catalogue in `index.html` by editing the `data-category` attributes and associated card content. Colors, typography, and spacing can be tuned via CSS variables defined at the top of `styles.css`.

## License

Released under the MIT License.
