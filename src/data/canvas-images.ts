// Art-related symbols as inline SVG data URIs for the floating canvas particles
// Using simple art tool silhouettes instead of VS Code dev icons

const artSymbols = [
  // Paintbrush
  `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none" stroke="%23C4935A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M30 8l12-2c0 0-2 8-8 14s-12 8-12 8l-4-4s2-6 8-12S30 8 30 8z"/><path d="M22 28l-4 4-6 12-2-2 4-10-4 0 8-8"/></svg>')}`,
  // Palette
  `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none" stroke="%237B9AAD" stroke-width="1.5"><ellipse cx="25" cy="27" rx="20" ry="16"/><circle cx="16" cy="22" r="3" fill="%23C4935A"/><circle cx="22" cy="17" r="2.5" fill="%234A6B7C"/><circle cx="30" cy="17" r="2.5" fill="%237B9AAD"/><circle cx="35" cy="22" r="2" fill="%231A2B3D"/></svg>')}`,
  // Sculpture/Vase (Mochica)
  `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none" stroke="%23C4935A" stroke-width="1.5" stroke-linecap="round"><path d="M18 12c0-3 3-5 7-5s7 2 7 5"/><path d="M18 12c-4 6-6 14-5 22 0 4 4 7 12 7s12-3 12-7c1-8-1-16-5-22"/><path d="M15 28h20M18 22h14"/></svg>')}`,
  // Weaving/Loom
  `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none" stroke="%237B9AAD" stroke-width="1.2" stroke-linecap="round"><rect x="10" y="8" width="30" height="34" rx="2"/><line x1="17" y1="8" x2="17" y2="42"/><line x1="25" y1="8" x2="25" y2="42"/><line x1="33" y1="8" x2="33" y2="42"/><line x1="10" y1="16" x2="40" y2="16"/><line x1="10" y1="25" x2="40" y2="25"/><line x1="10" y1="34" x2="40" y2="34"/></svg>')}`,
  // Cantuta flower (Peru national flower)
  `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none" stroke="%23C4935A" stroke-width="1.5" stroke-linecap="round"><path d="M25 42V22"/><path d="M20 38c-3-2-5-3-6-2"/><path d="M30 35c3-1 5-2 6-1"/><path d="M25 22c-3-8-8-14-8-14s5 2 8 8"/><path d="M25 22c3-8 8-14 8-14s-5 2-8 8"/><path d="M25 18c0-8-2-14-2-14s-1 6 0 14"/><circle cx="25" cy="20" r="3" fill="%23C4935A" opacity="0.3"/></svg>')}`,
];

export const CANVAS_IMAGES = artSymbols;
