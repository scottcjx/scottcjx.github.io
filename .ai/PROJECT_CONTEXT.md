# Project context and continuation instructions

Last updated: 2026-09-26

## Mandatory continuation rule

Read this file before working on the site.

After every meaningful change, update this file in the same change. This
includes changes to the framework, routes, content model, editable data,
visual system, deployment, assets, or development workflow. Record the new
current state, remove obsolete guidance, and update the date. Do not leave
future agents dependent on chat history.

After every change, audit for unused files and folders. Remove obsolete
generated artifacts, legacy framework files, duplicate assets, and unreferenced
tooling when their lack of use is verified. Never remove user content,
deployment configuration, referenced assets, or anything whose purpose is
uncertain.

Do not overwrite user changes that are already present in the worktree. Inspect
the current files and integrate with them. Make focused changes, preserve real
content, and do not invent academic claims, publications, projects, metrics,
clients, or testimonials.

## Product intent

This is Scott Cheng's personal academic profile and portfolio. It should
feel like a thoughtful academic home page, not a sales landing page, résumé
template, or AI-generated personal-brand site.

The site should:

- put projects first on the home page;
- present Scott as an all-rounder across software, electrical/electronics,
  robotics, research, and interdisciplinary work;
- provide space for education, research interests, publications, projects, and
  correspondence;
- use honest, editable content;
- remain free to host and operate as a static GitHub Pages site;
- be easy to modify through YAML, JSON, and Markdown.

## Current stack

- Astro 5 with static output.
- TypeScript configuration in `tsconfig.json`.
- YAML parsing through the project dependencies.
- Static assets in `public/`.
- GitHub Pages deployment through
  `.github/workflows/deploy-astro.yml`.
- Canonical site URL is configured in `astro.config.mjs`.
- There is no server-side runtime or paid service.

Run locally:

```sh
npm install
npm run dev
```

Validate:

```sh
npm run check
npm run build
git diff --check
```

The expected successful check output includes `0 errors`; the build should
finish by generating the static pages in `dist/`.

## Content editing map

- `src/data/home.yml`: homepage metadata, headline, intro, profile image path,
  topics, and contact text.
- `src/content/home.md`: editable homepage introduction in Markdown, including
  links and normal Markdown formatting.
- `src/data/theme.yml`: light and dark theme color roles.
- `src/data/cv.json`: education, experience, and activities/CV entries.
- `src/content/projects/*.md`: projects and their frontmatter.
- `src/content/publications/*.md`: publications and their frontmatter.
- `public/images/`: images used by the deployed site.

Project frontmatter supports the fields defined in `src/content.config.ts`,
including title, date, excerpt, status, type, technologies, and link. Follow
the existing files as the source of truth before adding fields.

## Route and component map

- `src/pages/index.astro`: home page; order is Projects, Education, Research
  interests, Publications, and correspondence.
- `src/pages/cv.astro`: CV/education page.
- `src/pages/projects/index.astro` and `[...slug].astro`: project archive and
  detail pages.
- `src/pages/publications/index.astro` and `[...slug].astro`: publication
  archive and detail pages.
- `src/layouts/Shell.astro`: shared document shell, navigation, footer, and
  light/dark theme toggle.
- `src/components/WorkList.astro`: shared renderer for project/publication
  lists.
- `src/styles/global.css`: global layout, typography, responsive behavior,
  theme-aware colors, and portrait styling.

Talks are intentionally not part of the current navigation or Astro content
architecture because the user said they do not have talks. Do not reintroduce
them without an explicit request.

## Design direction

The visual language is restrained, editorial, and academic:

- warm, readable backgrounds and dark text;
- serif display typography paired with a clean sans-serif interface;
- muted metadata with selective primary, secondary, accent, and link colors;
- visible hierarchy without oversized marketing slogans;
- subtle rules and structured lists instead of card-heavy dashboard UI;
- responsive layout with keyboard-visible focus states;
- reduced-motion support;
- light/dark mode controlled by a visible toggle and persisted in
  `localStorage`.
- navigation order is Home, Projects, Publications, CV, and Email.
- the theme toggle is icon-only in the navigation, using sun and moon symbols;
  its accessible `aria-label` still describes the action.
- the displayed site name is `Scott Cheng`; keep the shorter name in page
  titles, navigation branding, and footer copy unless the user requests
  otherwise.

The profile image is intentionally larger than a thumbnail. Current treatment:

- desktop: approximately `230px × 280px`;
- mobile: approximately `170px × 210px`;
- full-color image;
- softly rounded rectangle with `1.25rem` radius;
- no circular crop and no mask/fade;
- source path is configured in `src/data/home.yml`, currently served from
  `public/images/profile.png`.

If the user asks for a new visual direction, update the relevant source and
then update this file so this section describes the new truth.

## Theme implementation

Theme palettes are data-driven in `src/data/theme.yml`. `Shell.astro` emits
the palette variables and runs the theme preference script. The preference
uses a saved `light`/`dark` value when present and otherwise follows the
system color preference.

Do not add inline light-theme variables to `<html>` in a way that overrides the
dark selector. Keep palette roles semantic (`background`, `surface`, `text`,
`muted`, `border`, `primary`, `secondary`, `accent`, `link`, `onPrimary`) and
use the existing variables in CSS. Links use the dedicated teal `link` role;
primary remains available for brand marks, rules, focus-adjacent emphasis, and
hover states.

## Deployment and repository notes

The workflow builds and deploys `dist/` to GitHub Pages when changes are pushed
to `master`. Keep the build static and avoid introducing runtime-only
features. Preserve `CNAME` and public asset paths unless a migration explicitly
accounts for them.

The worktree may contain the staged/unstaged migration from the former Jekyll
Academic Pages site. The Astro source is now the intended application. The old
Jekyll files are not the active implementation.

`PRODUCT.md` is the product brief, while this folder is the operational
handoff. If they disagree, inspect the current Astro source and update both
documents when the disagreement reflects a real product decision.

## Recent decisions

1. Migrated from Jekyll/Academic Pages to Astro for static GitHub Pages hosting.
2. Reframed the site from a generic portfolio into an academic profile.
3. Removed talks from the active site and added a projects-first homepage.
4. Added education, research interests, publications, notes, and a longer
   editable introduction.
5. Added editable light/dark palettes and a persistent toggle.
6. Restored portrait color and introduced semantic visual accents.
7. Enlarged the portrait and changed it from a circular/faded treatment to a
   rounded rectangle at the user's request.
8. Added Home to the navigation, reordered links to follow the site's academic
   browsing flow, and replaced the theme toggle text with sun/moon symbols.
9. Made the profile image, hero columns, introduction columns, and mobile
   heading fluid across desktop, tablet, and phone widths.
10. Removed obsolete Jekyll-era duplicates and talk-map tooling; active Astro
    content and public assets remain.
11. Moved the homepage introduction into `src/content/home.md`, so links can be
    added with normal Markdown; `src/data/home.yml` now holds homepage
    metadata and structured labels.
12. Added editable Axoft experience plus NTU Formula Racing and NTU Mecatron
    activities to `src/data/cv.json`, rendered on the homepage and CV page.
13. Added a standing cleanup rule: audit and remove verified unused files and
    folders after every change while preserving user content, deployment files,
    and referenced assets. Removed copied legacy assets from `public/` that
    were not referenced by the active Astro site.
14. Updated education, work history, student leadership, homepage biography,
    LinkedIn link, publication context, and project content from the supplied
    resume. Resume-derived facts should remain editable in `src/data/cv.json`
    and Markdown content files.
15. Removed the remaining unreferenced legacy PDF/BibTeX files and placeholder
    project image after replacing the placeholder project content.
16. Updated the profile to identify Scott as the current Head of Mecatron and
    describe his work across software/networking, infrastructure, electrical
    and electronics engineering, PCB design, power and communications systems
    architecture, logistics, external relations, team management, and
    supervised research in underwater acoustics and controls.
17. External HTTP(S) links are automatically opened in a new tab with
    `rel="noopener noreferrer"` by the shared shell, including links rendered
    from Markdown content. Internal links remain in the current tab.
18. LinkedIn is included as the professional profile link and ORCID has been
    removed. Publication metadata supports an `authors` list, and publication
    detail pages underline Scott's author entry.
19. Mecatron descriptions use distinct language for systems engineering,
    technical coordination, team operations, logistics, external partnerships,
    and research supervision rather than repeating a broad skills list.
20. Publication detail pages keep BibTeX as an external link only; there is no
    inline BibTeX code block.
21. Scott is a part-time research intern at the Acoustics Research Lab at the
    National University of Singapore as part of his NTU final-year project.
    His thesis is titled *Integrated Communications, Sensing, and Propulsion
    (ICSP)* and investigates using thrusters as transmitters.
22. The homepage and publications archive state that the displayed list is
    selected and link to Scott's Google Scholar profile for the full list.
23. Email remains visible as plain text throughout the site but is not rendered
    as a clickable `mailto:` link.
24. Removed the redundant About page; its content is already represented on the
    homepage, so About is no longer a route or navigation item.
25. Removed the unused Notes navigation, collection, routes, and placeholder
    sample posts. The active site now contains only real profile, project,
    publication, education, experience, and CV content.
26. Reworked visible copy across the site for a clearer engineering and
    research voice, removed remaining placeholder language, and tightened
    section descriptions. The current site does not include a Notes section.
27. The CV page and homepage provide a download link to the static,
    current-content PDF at `public/cv.pdf`. Keep the PDF aligned with
    `src/data/cv.json` and the visible CV page whenever CV content changes.
28. Theme palettes include distinct `surface` and `accent` roles. The surface
    is used for the masthead, topic chips, and other secondary areas; the
    accent is used for hero rules, education rules, and theme icons. Primary,
    secondary, muted, border, and text roles should remain visibly distinct.
29. Project status is optional. Do not label ordinary finished projects
    `Completed`; the project archive itself communicates that they are
    finished. Use status only when it adds useful context, such as `Ongoing`,
    `In progress`, or `Paused`.
30. Project detail pages are intentionally long-form Markdown and can function
    like a project blog. Added an Eduboat workshop project describing Scott's
    design and leadership of hands-on boat-building workshops for secondary
    school and junior college students. Kept the GovTech AGV and robot-fleet
    orchestration project, and left the NVF PCB work as its own expandable
    project page.
31. Eduboat began as Scott's hackathon project in 2025, was iterated twice more
    through Mecatron, and remains ongoing. Its project entry uses the date
    `2025-01-01` and status `Ongoing`.
32. The Head of Mecatron role has two distinct scopes: Scott coordinates work
    across all teams, while personally working on networking, electrical
    systems architecture and implementation, power, communications, and PCB
    design. He also teaches Eduboat and technical courses in Mecatron and
    Nanyang Venture Formula Racing, and personally contributes to research,
    business, finance, logistics, operations, and external relations.
33. Links now use a dedicated `link` color role in both themes so navigation
    and readable inline links are visually distinct from the primary red
    emphasis. The role is intentionally teal and remains editable in
    `src/data/theme.yml`.
34. The homepage introduction links the Eduboat mention directly to its
    internal project page. Homepage, project excerpts, archive descriptions,
    and CV wording were tightened for clearer scanning without adding new
    claims.
35. `Shell.astro` emits the theme variable block with Astro's `set:html`
    directive so the static build treats the generated CSS as CSS rather than
    reporting parser warnings.
36. Homepage Markdown prose is explicitly assigned the normal `paper` text
    color; only anchor elements inside it use the dedicated `link` color.
37. The GitHub profile link is `https://github.com/scottcjx`. The homepage
    project count is controlled by `project_limit` in `src/data/home.yml`,
    currently set to 3.
38. Added the ongoing Mecatron autonomous-vehicles project as
    `src/content/projects/mecatron-autonomous-vehicles.md`. Its description
    stays limited to the user's confirmed work and leaves room for future
    technical documentation.

## Working agreement for future agents

Before editing:

1. Read this file and `README.md`.
2. Inspect the relevant current source files; do not rely on historical
   snippets or assumptions.
3. Check `git status --short` and preserve unrelated user work.
4. Make the smallest complete change that satisfies the request.

After editing:

1. Update this file if the change affects any documented decision or behavior.
2. Run the smallest relevant validation; for site-wide UI or architecture
   changes, run `npm run check`, `npm run build`, and `git diff --check`.
3. Report incomplete or blocked work plainly.
