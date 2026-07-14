# OCI Enterprise AI

An interactive, scroll-driven presentation on Oracle Cloud Infrastructure's Enterprise AI platform — covering the **Responses API** and **Hosted Deployments** for building and running enterprise AI agents. A data-driven landing page with cinematic scroll effects and bilingual (EN/ES) content.

## Stack

- **Next.js** (App Router) + **React**
- **GSAP** & **Framer Motion** for animation
- **Lenis** smooth scroll
- **@iconify/react** for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Structure

- `src/data/` — slide content and types (`slides.ts`, `slides-es.ts`)
- `src/components/sections/` — one component per presentation section
- `src/components/effects/` — reusable scroll/cursor/animation effects
- `src/context/` — active-section tracking and language switching

## Docker

```bash
docker build -t oci-enterprise-ai .
docker run -p 3000:3000 oci-enterprise-ai
```
