# Mihiran Thilakarathna | Portfolio

A React + TypeScript portfolio that highlights Mihiran Thilakarathna’s AI/ML and software-development work. The site ships with smooth animations, multiple themes, and a contact form so collaborators can reach out quickly.

## ✨ Highlights

- **Animated hero** section with typewriter headline and rotating avatar
- **Theme switcher** offering default, light, and dark palettes
- **Responsive layout** that scales gracefully from phones to desktops
- **Scroll-aware navigation** with active link states
- **Multi-category project filter** with polished cards and quick actions
- **Contact hub** featuring direct messaging links and a validated form
- **Centralized data layer** (`src/data/portfolio.ts`) for easy updates

## 🛠️ Tech Stack

| Layer | Tools |
| --- | --- |
| Core | React 19, TypeScript 5.9, Vite 7 |
| Animations | Framer Motion, React Type Animation |
| Styling | CSS Modules, CSS variables, Flexbox & Grid |
| Icons | React Icons |

## 🗂️ Project Structure

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

## 🚀 Quick Start

```powershell
# install dependencies
npm install

# run in development (opens Vite with HMR)
npm run dev


# create an optimized production bundle
npm run build

# preview the build locally
npm run preview
```

> **Requirements:** Node.js 18+ and npm (or another package manager such as pnpm/yarn).

## 📙 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Bootstraps the Vite development server with hot-module replacement. |
| `npm run build` | Runs TypeScript project references and builds an optimized production bundle. |
| `npm run preview` | Serves the contents of `dist/` locally for testing. |
| `npm run lint` | Executes ESLint using the configuration in `eslint.config.js`. |
## 🧩 Customization Guide

- **Content**: Update personal details, experience, certifications, and multi-category projects in `src/data/portfolio.ts`.
- **Branding**: Replace imagery under `src/assets/` and edit the favicon at `public/favicon.svg`.
- **Themes**: Adjust the CSS variables defined in `src/index.css` to tweak colors, typography, and shadows.
- **Animations**: Motion variants live alongside each component (e.g. `src/components/Hero.tsx`).

## 📦 Deployment Notes

- The build output in `dist/` is static—host it on services such as Netlify, Vercel, or GitHub Pages.
- Review social/Open Graph metadata in `index.html` before publishing.
- If you connect analytics for profile views, update `profileViews` and `profileViewsUpdatedAt` programmatically instead of editing data manually.

### Live Demo (GitHub Pages)

- Push your repository to GitHub with a default branch named `main`.
- This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the site and publishes it to GitHub Pages automatically.
- After the first successful run, your site will be available at:
	- `https://<your-username>.github.io/<repository-name>/`
- The Vite base path is set via `VITE_BASE_PATH` during CI so assets resolve correctly under the repository subpath.

## 📬 Contact

- Email: `thmthilakarathna@gmail.com`
- WhatsApp: `+94 76 045 3356`
- LinkedIn: [linkedin.com/in/mihiran-thilakarathna-9478302a8](https://www.linkedin.com/in/mihiran-thilakarathna-9478302a8)
- GitHub: [github.com/Mihiran-Thilakarathna](https://github.com/Mihiran-Thilakarathna)

## ✅ Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📱 Responsive Breakpoints

- 📱 Mobile: < 640px
- 📱 Tablet: 640px - 968px
- 💻 Desktop: > 968px

## 👤 Author

**Mihiran Thilakarathna**
- GitHub: https://github.com/Mihiran-Thilakarathna
- LinkedIn: https://www.linkedin.com/in/mihiran-thilakarathna-9478302a8



## 📄 License

This project is open-source under the MIT License. See `LICENSE` for details.

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Made with ❤️ using React, TypeScript, and Vite
