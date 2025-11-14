# Mihiran Thilakarathna Portfolio

Modern, responsive portfolio highlighting AI/ML and software development projects. Built with React, TypeScript, and Vite.

## Features

- Theme switcher with light and dark palettes
- Fixed navigation with active section tracking
- Branded loading overlay with progress indicator
- Local profile view counter and visit timestamp
- AI chat assistant for quick guidance
- Responsive layout across small and large screens
- Project filtering by category
- Contact hub linking WhatsApp, Telegram, Discord, and email
- Centralized data in `src/data/portfolio.ts`

## Tech Stack

| Layer | Tools |
| --- | --- |
| Core | React 19, TypeScript 5.9, Vite 7 |
| Animations | Framer Motion, React Type Animation |
| Styling | CSS Modules, CSS variables, Flexbox & Grid |
| Icons | React Icons |

## Project Structure

```
Portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── data/
│   ├── hooks/
│   ├── types/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── package.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Mihiran-Thilakarathna/Mihiran-Portfolio.git
cd Mihiran-Portfolio

# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

> Requirements: Node.js 18+ and npm (or pnpm/yarn)

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Customization

- **Content** — Edit `src/data/portfolio.ts` for personal info, projects, experience, and skills
- **Branding** — Replace images in `src/assets/` and `public/favicon.svg`
- **Themes** — Tune CSS variables in `src/index.css`
- **Animations** — Adjust Framer Motion configs in component files

## Deployment

Deployed to GitHub Pages through `.github/workflows/deploy.yml`. Live site: [mihiran-thilakarathna.github.io/Mihiran-Portfolio](https://mihiran-thilakarathna.github.io/Mihiran-Portfolio/)

## Contact

- **Email:** [thmthilakarathna@gmail.com](mailto:thmthilakarathna@gmail.com)
- **WhatsApp:** [+94 76 045 3356](https://wa.me/94760453356)
- **LinkedIn:** [Mihiran Thilakarathna](https://www.linkedin.com/in/mihiran-thilakarathna-9478302a8)
- **GitHub:** [@Mihiran-Thilakarathna](https://github.com/Mihiran-Thilakarathna)

## Author

**Mihiran Thilakarathna** — IT undergraduate, AI/ML enthusiast, and full stack developer.

## License

Released under the [MIT License](LICENSE).
