<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Instructions

## Repository purpose

- This is a personal portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS 4, and Framer Motion.
- The public page is assembled in `app/page.tsx` and uses reusable sections in `components/`.
- Project case studies are rendered from `app/projects/[slug]/page.tsx` using centralized data in `data/projects.ts`.
- Keep changes portfolio-focused: preserve the dark glassmorphism visual style, responsive layout, accessibility, and existing personal content.

## Working directory and tooling

- Run commands from the repository root: `portfolio-fahmi-junniora/`.
- Use npm and the existing `package-lock.json`.
- Install dependencies with `npm install` or `npm ci`.
- Use these commands:
  - `npm run dev` - start the local development server.
  - `npm run lint` - run ESLint.
  - `npm run build` - run the Next.js production build.
  - `npm run start` - serve an existing production build.
- There is no test runner configured; add or change tests only if the task actually requires test infrastructure.

## Next.js and React conventions

- Use the App Router structure under `app/`.
- Treat components as Server Components unless browser APIs, hooks, event handlers, or Framer Motion client features require `"use client"`.
- In Next.js 16, await dynamic route parameters. Example: `const { slug } = await params`.
- Keep external resources on `next/image` where possible. Use stable `public/` paths and meaningful alt text.
- Internal navigation uses `next/link`; external links use normal anchors with `target="_blank"` and `rel="noopener noreferrer"`.
- Preserve strict TypeScript types. Do not use `any` or `@ts-ignore` to silence type errors.
- Server-only work belongs in `app/actions/` or server components. Validate server-action inputs and avoid exposing secrets.
- Read the relevant local guide in `node_modules/next/dist/docs/` before changing Next.js APIs, routing, metadata, caching, or rendering behavior.

## Project structure

- `app/page.tsx`: home-page section composition.
- `app/layout.tsx`: root metadata, fonts, global styles, and shared navbar.
- `app/globals.css`: Tailwind import, theme variables, custom utilities, and global visual rules.
- `app/projects/[slug]/page.tsx`: dynamic project case-study route.
- `app/actions/sendEmail.ts`: simulated/Resend contact server action.
- `components/`: reusable page sections and shared UI.
- `components/home/`: hero-specific components.
- `components/ui/`: shared Button, Card, Tag, and SectionTitle primitives.
- `data/projects.ts`: project catalogue and case-study content.
- `type/index.ts`: shared interfaces such as `Project` and `ProjectImage`.
- `public/`: static images, icons, and `cv.pdf`.

## Styling and UI conventions

- Use Tailwind CSS 4 utility classes and the utilities already defined in `app/globals.css`, especially `glassmorphism`, `glassmorphism-hover`, `bg-grid`, and `mask-radial-fade`.
- Use existing shared components such as `Container`, `Card`, `Button`, `Tag`, and `SectionTitle` instead of recreating their styles.
- Preserve the slate-950 dark background, purple/violet/fuchsia accents, soft glows, rounded glass surfaces, and restrained micro-animations.
- Match existing responsive patterns:
  - container width through `Container`
  - mobile-first grids
  - section spacing approximately `py-24 md:py-32`
  - 12-column layout for larger two-column compositions
- Keep text and UI contrast accessible. Do not remove visible keyboard focus styles.
- Use semantic elements and ARIA only where they improve navigation or interaction. Icon-only controls need `aria-label`.
- Keep animation changes purposeful and respect `prefers-reduced-motion` where animation support is added or modified.

## Data and content conventions

- Define project objects in `data/projects.ts` with the `Project` interface from `type/index.ts`.
- Use a stable URL-safe lowercase slug for new projects and create matching links through `/projects/${project.slug}`.
- Keep project metadata consistent: title, role, date, description, problem, solution, architecture, technologies, results, images, and optional GitHub/live links.
- Every project image must include a valid `public/` path, descriptive alt text, and an optional caption.
- Preserve the existing language of surrounding content. Do not automatically translate user-visible copy unless requested.
- Verify personal details and external URLs before changing them. Do not invent employers, roles, achievements, emails, or links.

## Contact form behavior

- The contact form UI is currently commented out in `components/Contact.tsx`.
- `sendEmail` is a server action that runs in simulation mode without `RESEND_API_KEY`.
- The real Resend request depends on `RESEND_API_KEY`; never read, print, commit, or hard-code secrets.
- Keep validation on the server and avoid inserting unescaped user content into HTML output.
- Treat `simulated`, success, and error responses as distinct states if the form is re-enabled.

## Change process

1. Inspect relevant existing components and shared styles before editing.
2. Make the smallest coherent change; reuse existing components and patterns.
3. For code changes, run `npm run lint` and `npm run build`.
4. For UI changes, use the running app to verify desktop and mobile behavior and key interactions.
5. Do not modify unrelated files or revert pre-existing workspace changes.
6. Report validation results and any known unrun checks in the final summary.

## Repository safeguards

- Do not delete or overwrite pre-existing local changes unless the task explicitly requires it.
- Do not add secrets or environment-specific values to tracked files.
- Do not replace the centralized project catalogue with component-local project data.
- Do not introduce a competing UI library or CSS approach into an existing page.
- Do not change framework dependencies, Node requirements, or public asset names without a clear requirement.
