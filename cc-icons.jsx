// CieloCell V2 icons + brand mascot
// Mascot: a cloud with eyes — drawn as SVG so it can change color + expression.
// Wordmark: "cielocell" lowercase in Unbounded Black 900.

const Icon = ({ d, size = 24, color = 'currentColor', fill = 'none', strokeWidth = 2, style = {}, paths }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color}
    strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style}>
    {paths ? paths : <path d={d} />}
  </svg>
);

const CCIcon = {
  Home: (p) => <Icon {...p} paths={<><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></>} />,
  Plans: (p) => <Icon {...p} paths={<><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>} />,
  Activity: (p) => <Icon {...p} paths={<><polyline points="3,12 7,12 10,4 14,20 17,12 21,12"/></>} />,
  Profile: (p) => <Icon {...p} paths={<><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></>} />,
  Play: (p) => <Icon {...p} paths={<><circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none"/></>} />,
  Check: (p) => <Icon {...p} d="M5 12l5 5L20 7" />,
  CheckCircle: (p) => <Icon {...p} paths={<><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></>} />,
  Star: (p) => <Icon {...p} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
  Cloud: (p) => <Icon {...p} d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />,
  ChevronRight: (p) => <Icon {...p} d="M9 18l6-6-6-6" />,
  ChevronLeft: (p) => <Icon {...p} d="M15 18l-6-6 6-6" />,
  ChevronDown: (p) => <Icon {...p} d="M6 9l6 6 6-6" />,
  X: (p) => <Icon {...p} d="M18 6L6 18M6 6l12 12" />,
  Download: (p) => <Icon {...p} paths={<><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></>} />,
  UserPlus: (p) => <Icon {...p} paths={<><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></>} />,
  MessageSquare: (p) => <Icon {...p} paths={<><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></>} />,
  Zap: (p) => <Icon {...p} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  Plus: (p) => <Icon {...p} d="M12 5v14M5 12h14" />,
  ArrowRight: (p) => <Icon {...p} d="M5 12h14M12 5l7 7-7 7" />,
  Shield: (p) => <Icon {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  ShieldCheck: (p) => <Icon {...p} paths={<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></>} />,
  CreditCard: (p) => <Icon {...p} paths={<><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></>} />,
  Smartphone: (p) => <Icon {...p} paths={<><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></>} />,
  Globe: (p) => <Icon {...p} paths={<><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></>} />,
  MapPin: (p) => <Icon {...p} paths={<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>} />,
  Bell: (p) => <Icon {...p} paths={<><path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/></>} />,
  Lock: (p) => <Icon {...p} paths={<><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></>} />,
  HelpCircle: (p) => <Icon {...p} paths={<><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 015.8 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></>} />,
  Headphones: (p) => <Icon {...p} paths={<><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1v-6h3v4zM3 19a2 2 0 002 2h1v-6H3v4z"/></>} />,
  Signal: (p) => <Icon {...p} paths={<><line x1="1" y1="20" x2="1" y2="14"/><line x1="6" y1="20" x2="6" y2="9"/><line x1="11" y1="20" x2="11" y2="4"/><line x1="16" y1="20" x2="16" y2="9"/><line x1="21" y1="20" x2="21" y2="14"/></>} />,
  Clock: (p) => <Icon {...p} paths={<><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></>} />,
  TrendingUp: (p) => <Icon {...p} paths={<><polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/><polyline points="17,6 23,6 23,12"/></>} />,
  Eye: (p) => <Icon {...p} paths={<><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>} />,
  Share2: (p) => <Icon {...p} paths={<><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></>} />,
  Info: (p) => <Icon {...p} paths={<><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></>} />,
  Menu: (p) => <Icon {...p} paths={<><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></>} />,
  Settings: (p) => <Icon {...p} paths={<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></>} />,
  RefreshCw: (p) => <Icon {...p} paths={<><polyline points="23,4 23,10 17,10"/><polyline points="1,20 1,14 7,14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></>} />,
  Search: (p) => <Icon {...p} paths={<><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>} />,
};

// ── Cloud-with-eyes Mascot — the heart of the V2 brand ──
// color: any CSS color (defaults to hot pink). expression: 'idle' | 'blink' | 'happy' | 'wow' | 'sleepy'
const CCMascot = ({ size = 96, color = CC.pink, expression = 'idle', eyeColor = CC.ink, style = {} }) => {
  // Cloud silhouette — a chunky 4-bump cloud, slightly squished, friendly
  const cloudPath = "M50 145c-22 0-40-15-40-35 0-14 8-26 20-32-2-6-2-12 0-18 4-14 18-24 34-24 14 0 26 7 32 18 6-4 14-6 22-4 16 4 26 18 24 34 14 4 24 16 24 30 0 18-16 33-36 33H50z";
  // Eyes
  const eyeSpacing = 28;
  const eyeY = 90;
  const cx1 = 100 - eyeSpacing / 2;
  const cx2 = 100 + eyeSpacing / 2;
  let eyes;
  if (expression === 'blink') {
    eyes = <><path d={`M${cx1 - 6} ${eyeY} q6 -3 12 0`} stroke={eyeColor} strokeWidth="3.5" strokeLinecap="round" fill="none"/><path d={`M${cx2 - 6} ${eyeY} q6 -3 12 0`} stroke={eyeColor} strokeWidth="3.5" strokeLinecap="round" fill="none"/></>;
  } else if (expression === 'happy') {
    eyes = <><path d={`M${cx1 - 6} ${eyeY + 2} q6 -8 12 0`} stroke={eyeColor} strokeWidth="3.5" strokeLinecap="round" fill="none"/><path d={`M${cx2 - 6} ${eyeY + 2} q6 -8 12 0`} stroke={eyeColor} strokeWidth="3.5" strokeLinecap="round" fill="none"/></>;
  } else if (expression === 'wow') {
    eyes = <><circle cx={cx1} cy={eyeY} r="5.5" fill={eyeColor}/><circle cx={cx2} cy={eyeY} r="5.5" fill={eyeColor}/><circle cx={cx1 + 1.5} cy={eyeY - 1.5} r="1.5" fill={CC.cream}/><circle cx={cx2 + 1.5} cy={eyeY - 1.5} r="1.5" fill={CC.cream}/></>;
  } else if (expression === 'sleepy') {
    eyes = <><path d={`M${cx1 - 6} ${eyeY} h12`} stroke={eyeColor} strokeWidth="3.5" strokeLinecap="round"/><path d={`M${cx2 - 6} ${eyeY} h12`} stroke={eyeColor} strokeWidth="3.5" strokeLinecap="round"/></>;
  } else { // idle — round eyes
    eyes = <><circle cx={cx1} cy={eyeY} r="4" fill={eyeColor}/><circle cx={cx2} cy={eyeY} r="4" fill={eyeColor}/></>;
  }
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ display: 'block', ...style }}>
      <path d={cloudPath} fill={color} />
      {eyes}
    </svg>
  );
};

// ── Brand Cloud Mark (compact, lockup-friendly) ──
// Used as the small mark in the wordmark lockup. Defaults to pink mascot.
const CCCloudMark = ({ size = 64, color, eyeColor, style = {} }) => (
  <CCMascot size={size} color={color || CC.pink} eyeColor={eyeColor || CC.ink} style={style} />
);

// ── Wordmark — "cielocell" lowercase in Unbounded Black 900 ──
const CCWordmark = ({ size = 32, color, style = {} }) => (
  <span style={{
    fontFamily: CC.display, fontWeight: 900, fontSize: size, color: color || CC.ink,
    letterSpacing: -size * 0.04, lineHeight: 1, textTransform: 'lowercase',
    ...style,
  }}>
    cielocell
  </span>
);

// ── Combined Logo Lockup ──
// theme: 'light' (cream bg, pink mascot, ink wordmark)
//        'dark'  (ink bg, lime mascot, cream wordmark)
//        'pink'  (pink bg, ink mascot, ink wordmark)
//        'lime'  (lime bg, ink mascot, ink wordmark)
const CCLogo = ({ size = 'md', theme = 'light', layout = 'row', style = {} }) => {
  const sizes = { xs: { mark: 18, word: 16 }, sm: { mark: 26, word: 22 }, md: { mark: 36, word: 30 }, lg: { mark: 56, word: 46 }, xl: { mark: 88, word: 72 } };
  const s = sizes[size] || sizes.md;
  const themes = {
    light: { mascot: CC.pink,  eye: CC.ink,  word: CC.ink },
    dark:  { mascot: CC.lime,  eye: CC.ink,  word: CC.cream },
    pink:  { mascot: CC.ink,   eye: CC.pink, word: CC.ink },
    lime:  { mascot: CC.ink,   eye: CC.lime, word: CC.ink },
  };
  const t = themes[theme] || themes.light;
  if (layout === 'col') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: s.mark * 0.18, ...style }}>
        <CCMascot size={s.mark} color={t.mascot} eyeColor={t.eye} />
        <CCWordmark size={s.word} color={t.word} />
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: s.mark * 0.22, ...style }}>
      <CCMascot size={s.mark} color={t.mascot} eyeColor={t.eye} />
      <CCWordmark size={s.word} color={t.word} />
    </div>
  );
};

// ── App icon tile ──
const CCAppIcon = ({ size = 64, theme = 'pink', style = {} }) => {
  const themes = {
    pink:  { bg: CC.pink,  mascot: CC.cream, eye: CC.ink },
    lime:  { bg: CC.lime,  mascot: CC.ink,   eye: CC.lime },
    ink:   { bg: CC.ink,   mascot: CC.lime,  eye: CC.ink },
    cream: { bg: CC.cream, mascot: CC.pink,  eye: CC.ink },
  };
  const t = themes[theme] || themes.pink;
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.24,
      background: t.bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 4px 0 rgba(14,31,24,0.12)', overflow: 'hidden', ...style,
    }}>
      <CCMascot size={size * 0.7} color={t.mascot} eyeColor={t.eye} />
    </div>
  );
};

Object.assign(window, { CCIcon, CCLogo, CCMascot, CCCloudMark, CCWordmark, CCAppIcon });
