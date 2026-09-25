# Scott Cheng portfolio

This is a static [Astro](https://astro.build) portfolio deployed to GitHub Pages.

For future AI agents, read [`.ai/PROJECT_CONTEXT.md`](.ai/PROJECT_CONTEXT.md)
before making changes. Keep that handoff file updated whenever the architecture,
content model, design system, deployment, or workflow changes.

## Edit the site

- Update homepage copy, topics, and contact text in `src/data/home.yml`.
- Change the number of projects shown on the homepage with `project_limit` in
  `src/data/home.yml`.
- Edit `src/content/home.md` for the homepage introduction; it supports
  Markdown links and normal Markdown formatting.
- Edit `src/data/cv.json` for education, experience, and student activities.
- Download the current generated CV from [`public/cv.pdf`](public/cv.pdf).
- Add or edit Markdown work in `src/content/publications/` and `src/content/projects/`.
- Edit the shared shell in `src/layouts/Shell.astro` and visual system in `src/styles/global.css`.

## Run locally with live editing

```sh
npm install
npm run dev
```

Astro serves the site at `http://localhost:4321` and refreshes the browser as you edit YAML, Markdown, Astro, or CSS files.

## Build

```sh
npm run build
npm run preview
```

The GitHub Actions workflow in `.github/workflows/deploy-astro.yml` builds and deploys `dist/` to GitHub Pages on pushes to `master`.
