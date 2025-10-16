# Hunnu Store Front-End Prototype

This repository contains the bilingual, responsive front-end prototype for the Hunnu Store e-commerce experience. It showcases the landing page, localization tooling, and interactive merchandising modules that pair modern technology with Mongolian cultural motifs.

## Getting started

You can open `index.html` directly in a browser, or launch the lightweight development server that is bundled with the project:

```bash
npm start
```

By default the site will be served at [http://localhost:4173](http://localhost:4173). Set the `PORT` environment variable to expose a different port when needed.

## Project structure

- `index.html` – landing page markup, data attributes for localization, and component layout.
- `styles.css` – design tokens, responsive grid system, and component styling.
- `script.js` – localization engine, carousel logic, and interactive behaviors.
- `serve.js` – zero-dependency static file server used by `npm start`.
- `assets/` – brand imagery such as the flame-and-circuit logomark.

## Customizing

Translate copy by updating the dictionaries inside `script.js`. Visual adjustments (colors, typography, spacing) can be applied through the CSS custom properties at the top of `styles.css`.

## License

Released under the MIT License.
