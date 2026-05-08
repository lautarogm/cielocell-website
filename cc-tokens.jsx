// CieloCell design tokens — V2 brand system
// Five colors. That's it. Unbounded for headlines (always lowercase). DM Sans for body.

const CC = {
  // ── Brand palette (the only 5) ──
  pink:    '#FF3D7F',  // hot pink — primary brand
  lime:    '#C5F23E',  // electric lime — signal · cta accent
  ink:     '#0E1F18',  // forest ink — type · grounding
  cream:   '#FFF6E5',  // warm cream — backgrounds
  pinkSoft:'#FFD9E6',  // pink soft — support · panels

  // ── Semantic surfaces ──
  white:   '#FFF6E5',     // "white" maps to warm cream — never pure white
  bg:      '#FFF6E5',     // page background
  surface: '#FFF6E5',
  panel:   '#FFD9E6',     // soft panels
  inkMuted:'#5C6B62',     // muted forest
  inkSoft: '#7A877F',
  border:  '#E8E0CE',     // cream-tinted border
  divider: '#EFE6D2',

  // ── Status (on-brand) ──
  success: '#C5F23E',     // lime doubles as success
  warn:    '#FF3D7F',     // pink for attention

  // ── Effects (flat, no gradients in V2) ──
  shadow:     '0 2px 0 rgba(14,31,24,0.06)',
  cardShadow: '0 4px 0 rgba(14,31,24,0.08)',

  // ── Typography ──
  font:        "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif",
  display:     "'Unbounded', system-ui, sans-serif",   // headlines, always lowercase, weight 900
  mono:        "'JetBrains Mono', ui-monospace, monospace",

  // ── Legacy aliases (mapped to new palette so old refs don't crash) ──
  orange:    '#FF3D7F',
  purple:    '#FF3D7F',
  violet:    '#FF3D7F',
  navy:      '#0E1F18',
  neutral:   '#FFF6E5',
  sky:       '#FF3D7F',
  skyDark:   '#0E1F18',
  navyLight: '#0E1F18',
  cloud:     '#FFF6E5',
  green:     '#C5F23E',
  grey:      '#5C6B62',
  glow:      '0 14px 40px rgba(255,61,127,0.28)',
  gradWarm:    '#FF3D7F',
  gradWarmFull:'#FF3D7F',
  gradCool:    '#0E1F18',
  gradPeach:   '#FFD9E6',
  gradLavender:'#FFD9E6',
};

Object.assign(window, { CC });
