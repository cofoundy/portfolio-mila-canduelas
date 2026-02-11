# Propuesta de Diseño: Mila Canduelas Rios

## Análisis
- Profesión: Visual Artist (painting, sculpture, weaving, encaustic, cyanotype, ceramics)
- Tier: Pro S/.120
- Template: creativo/smooth-dark (Next.js + Framer Motion + Locomotive Scroll)
- Audiencia: Galleries, curators, exhibition organizers, art collectors, fellow artists
- Idioma: Bilingual EN/ES (EN primary — she's in UK)

## Decisión: Keep + Fix (NOT rebuild)
The night builder chose the right template (smooth-dark) and extracted correct data.
The issues are: placeholder images, dev icons, no bilingual, wrong OG meta, template artifacts.
Fix in-place rather than rebuild from scratch.

## Paleta (6 colores)
- primaryDark: #1A2B3D — Deep blue-grey (her "azules" + dark website vibe)
- primary: #4A6B7C — Slate blue (borders, nav, subtle accents — matches current)
- primaryLight: #7B9AAD — Light slate (hover states, secondary text)
- accent: #C4935A — Warm gold/ochre (Peruvian gold, ancestral earth, the POP color)
- surface: #0D1117 — Near-black (background, current dark theme)
- surfaceLight: #151D27 — Dark blue-black (alternating sections)

### Justificación
- Blues + greys = her request "azules, grises"
- Gold ochre accent = "colores tierra" + Peruvian gold (Inka, ancestral)
- Dark background = matches warmipakunk.art aesthetic
- The gold against dark slate evokes gallery lighting on art

## Cambios Requeridos

### 1. Canvas Icons → Art Symbols
BEFORE: figma, photoshop, instagram, pinterest, wordpress (VS Code icons)
AFTER: Replace Canvas component with floating art-themed SVG symbols:
- Paintbrush, palette, chisel, weaving loom, ceramic pot
- Or better: use small artwork thumbnails from her gallery as floating particles

### 2. Exhibition Images → Real Artwork
BEFORE: Gradient placeholders with numbers (01, 02, 03, 04)
AFTER: Download actual artwork images from warmipakunk.art:
- Turner House 2025: "Forced Sterilisations" painting
- Made in Roath 2024: encaustic/cyanotype series
- Degree Show 2023: installation work
- Add more exhibitions (she has 20+)

### 3. Bilingual Content
- Hero subtitle: "Visual Artist · Artista Visual · Ancestral Inspiration"
- About section: EN paragraph + ES quote from her artist statement
- Section headers stay in English (she's in UK market)
- Her quote in both languages (like warmipakunk.art does)

### 4. Color Theme
- Accent buttons: #4A6B7C → #C4935A (warm gold for CTAs)
- Button hovers: add gold tone
- Skill pill borders: add gold on hover
- Keep dark background

### 5. Metadata Fix
- metadataBase: https://cofoundy.github.io/portfolio-mila-canduelas
- Fix OG image path

### 6. More Content from Research
- Add 6+ more exhibitions (Turner House 2024, G39 OPEN, Cardiff Made Winter, etc.)
- Add education section (BA Fine Art First Class Honours + Fashion Design + Ceramics)
- Add Art Life Society Group membership
- Add Peru exhibitions era (1991-2003)
- Mention Saatchi Art presence
- Update LinkedIn URL to correct one (with suffix)

### 7. Template Cleanup
- Delete template images from public/projects/ and public/side-projects/
- Fix README.md
- Fix package.json name
- Fix error/loading pages to English

## Secciones Finales (en orden)
1. Hero (Intro) — Name "Mila" + subtitle bilingual + floating art symbols
2. Who Am I — Photo + bio bilingual + Art Life Society
3. Artistic Practice (Skills) — Art mediums as pills
4. Exhibitions (MainProjects) — 6-8 exhibitions with real artwork images
5. Awards & Highlights (SmallProjects) — Awards, scholarships, charity work
6. Education — NEW section with BA, Fashion Design, Ceramics
7. Contact — Email CTA + social links (Website, Instagram, Pinterest, LinkedIn, Saatchi Art)
