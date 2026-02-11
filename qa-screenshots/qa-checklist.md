# QA Report: Mila Canduelas Rios

**Date:** 2026-02-11
**URL:** https://cofoundy.github.io/portfolio-mila-canduelas/
**Status:** FAIL

---

## Data Validation

- [x] Name matches source -- "Milagros 'Mila' Canduelas Rios" on page matches CV full name "MILAGROS CANDUELAS RIOS" and Sheet "Mila Canduelas Rios"
- [x] Email matches source -- warmipakunkaart@outlook.com on page matches both CV and Sheet
- [x] Job title matches source -- "Visual Artist" matches CV exactly
- [x] Education matches source -- "BA (Hons) in Fine Art from Cardiff Metropolitan University (2023)" matches CV
- [x] Exhibitions match source -- Turner House 2025, Made in Roath 2024, Jacob's Art Gallery Fusion 2023, Lansio Degree Show 2023 all confirmed in CV
- [x] Awards match source -- Helen Gregory Memorial Trust Bursary 2022, Sacripante Gallery Rome 2021, Santander Scholarship Lyon 2022 all confirmed in CV
- [x] MilaSELSH Art Ceramic Studio (2004-2009) teaching children 7-12 matches CV exactly
- [x] Art Life Society Group since 2023 matches CV
- [x] Social links verified -- warmipakunk.art (200), Instagram warmipa_kunkan_art (200), Pinterest WarmiArtist (200), LinkedIn mila-canduelas-rios
- [x] No hallucinated data detected

**Note:** The portfolio only shows 4 exhibitions out of 20+ from the CV. This is a curatorial choice, not hallucination. The 4 chosen are all verified in the CV.

## Clean Deploy Checks

- [x] NO "Powered by" / "Made with" / "Built with" visible text on page
- [x] NO "Lorem ipsum" / "Your name here" / "[placeholder]" text
- [x] NO broken links showing "#" or "javascript:void(0)" as visible text
- [x] NO "undefined" or "null" visible in user-facing content (occurrences are in Next.js internal RSC payload only)
- [x] NO template watermarks visible to users (Astro logo, Vercel badge, etc.)
- [ ] **FAIL** -- README.md still contains original template author info: "Phong's Portfolio", "NAPTheDev", links to napthedev/portfolio-next repo. While not visible on the deployed site, it is in the GitHub repo.
- [ ] **FAIL** -- Template default project images remain in public/projects/ (e-cinema.png, examvjppro.png, fireverse.png, macos-bigsur.png, react-cssfx-loading.png) and public/side-projects/ (atom-background-modified.png, console-flash.png, react-tuby.png, squishy-ui.png). These are software development screenshots from the original template, unrelated to the client.
- [ ] **FAIL** -- package.json name is still "portfolio-next" (template default), should be "portfolio-mila-canduelas"

## Technical Health

- [x] Main page loads (HTTP 200)
- [x] CSS loads -- /portfolio-mila-canduelas/_next/static/css/8d593725c2b0ed4a.css (HTTP 200)
- [x] Profile image loads -- /portfolio-mila-canduelas/profile.jpg (HTTP 200)
- [x] Avatar loads -- /portfolio-mila-canduelas/avatar.jpg (HTTP 200)
- [x] Favicon SVG loads -- /portfolio-mila-canduelas/favicon.svg (HTTP 200)
- [x] Favicon PNG loads -- /portfolio-mila-canduelas/favicon.png (HTTP 200)
- [x] Favicon correctly shows "MC" initials with #4A6B7C background
- [x] All social icon SVGs load (email.svg, instagram.svg, pinterest.svg, website.svg, linkedin.svg) -- all HTTP 200
- [x] External links verified: warmipakunk.art (200), Instagram (200), Pinterest (200), GitHub sergiocanes (200)

## Critical Issues Found

### ISSUE 1: OG Image URLs Point to localhost (SEVERITY: HIGH)
- **og:image** meta tag content: `http://localhost:3000/profile.jpg`
- **twitter:image** meta tag content: `http://localhost:3000/profile.jpg`
- **Cause:** layout.tsx uses `metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")` and NEXT_PUBLIC_SITE_URL was not set during build
- **Impact:** Social media previews (LinkedIn, Twitter, Facebook, WhatsApp) will show no image when the link is shared. This significantly reduces the professional appearance when the client shares their portfolio.
- **Fix:** Set `NEXT_PUBLIC_SITE_URL=https://cofoundy.github.io` as environment variable during build, OR hardcode metadataBase to `new URL("https://cofoundy.github.io/portfolio-mila-canduelas")`

### ISSUE 2: Spanish Text in English Portfolio (SEVERITY: MEDIUM)
The portfolio is correctly set to `<html lang="en">` and all visible content is in English. However, three system pages contain Spanish text:
- **not-found.tsx**: "404 - Pagina No Encontrada", "No se pudo encontrar el recurso solicitado.", "Volver al Inicio"
- **error.tsx**: "Ups! Algo salio mal", "Ocurrio un error inesperado al cargar el portafolio.", "Reintentar", "Recargar Pagina"
- **loading.tsx**: "Cargando portafolio..."
- **Impact:** If a user navigates to a non-existent route or encounters an error, they see Spanish text on an English site. The loading text flashes briefly during page hydration.
- **Fix:** Translate all three files to English

### ISSUE 3: GitHub Link from Form Not Included (SEVERITY: LOW)
- The Google Sheet form lists `https://github.com/sergiocanes` as a social link
- This GitHub profile exists (HTTP 200) but is not included in the portfolio's social links
- **Impact:** Minor -- the client explicitly listed this as a link to show. Should verify with client if they want it included.
- **Fix:** Add GitHub to SOCIAL_LINKS array if client confirms

### ISSUE 4: Canvas Hero Icons Are Generic Dev Icons (SEVERITY: LOW)
- The floating canvas icons in the hero section use: figma, photoshop, instagram, pinterest, wordpress
- These are fetched from vscode-material-icon-theme (software dev icons)
- "figma" icon makes no sense for a visual artist who does painting/sculpture/weaving
- **Impact:** Minor visual inconsistency. The icons are small and float subtly, but a careful viewer would notice software development icons on an artist's portfolio.
- **Fix:** Either remove canvas icons entirely, or use art-relevant icons/emojis

### ISSUE 5: Template Leftover Files in Repo (SEVERITY: LOW)
- README.md references "Phong's Portfolio" and "NAPTheDev" with links to the original template repo
- public/projects/ contains 5 template default images (e-cinema.png, etc.) -- software dev screenshots
- public/side-projects/ contains 4 template default images (atom-background-modified.png, etc.)
- package.json name is "portfolio-next" instead of client-specific
- **Impact:** Not visible on deployed site, but visible in the GitHub repo. Unprofessional if client inspects the repository.
- **Fix:** Delete unused template images, rewrite README.md, update package.json name

### ISSUE 6: Missing Documentation Files (SEVERITY: LOW)
- No research-notes.md exists
- No client-meta.md exists
- No design-proposal.md exists
- These are required by the workflow for documentation and handover
- **Impact:** Internal process only, not client-facing

## Non-Issues (Verified OK)

- Exhibition images use intentional gradient placeholders with numbers (01, 02, 03, 04) rather than broken image tags. The MainProjects.tsx component was deliberately coded this way -- it does not reference the image URLs from projects.ts. This is a design decision for an artist portfolio where art images may need curation.
- Awards section uses emoji icons (trophy, flags, palette) instead of images, which is also intentional per SmallProjects.tsx implementation
- All "View Portfolio" buttons correctly link to warmipakunk.art which is the client's actual art website (confirmed in CV)
- Locomotive Scroll smooth scrolling is active and functional
- Framer Motion animations are working (hero text blur-in, fade-up)

## Visual Assessment

- Desktop layout: Clean, dark theme with appropriate spacing. Hero animation is polished.
- Skills section: Well-organized pill/tag layout with relevant artistic skills
- Exhibitions section: Gradient color blocks as placeholders work aesthetically for an artist portfolio
- Contact section: Clean layout with email CTA and social icons
- Mobile: Layout scales reasonably; content is readable; no horizontal overflow detected

## Evidence

- qa-desktop.png -- Full-page desktop screenshot (1440px viewport)
- qa-mobile.png -- Full-page mobile screenshot (375px viewport)

---

## Summary

| Category | Result |
|----------|--------|
| Data Accuracy | PASS -- all data verified against CV and Google Sheet |
| Content Quality | PASS -- well-written, no placeholders visible |
| Technical Health | PARTIAL FAIL -- OG meta tags broken (localhost) |
| Clean Deploy | PARTIAL FAIL -- template leftovers in repo, Spanish system pages |
| Mobile | PASS |
| Links | PASS -- all external links verified |

**Overall: FAIL** -- 2 issues must be fixed before delivery (OG image localhost, Spanish text in English portfolio). 4 additional issues recommended to fix.
