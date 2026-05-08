// CieloCell V2 components — flat, chunky, anti-corporate
// Type: Unbounded for headlines (lowercase, weight 900), DM Sans for body/UI

// ── Headline (Unbounded, lowercase) ──
const CCHeadline = ({ children, size = 48, color, accent, accentBg, style = {} }) => (
  <h1 style={{
    fontFamily: CC.display, fontWeight: 900, fontSize: size, lineHeight: 0.95,
    letterSpacing: -size * 0.03, color: color || CC.ink, margin: 0,
    textTransform: 'lowercase', textWrap: 'balance', ...style,
  }}>
    {children}
  </h1>
);

// ── Highlight span — pink word inside an ink headline, etc. ──
const CCHighlight = ({ children, color = CC.pink, bg, style = {} }) => (
  <span style={{
    color, background: bg || 'transparent',
    boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone',
    padding: bg ? '0 0.15em' : 0, borderRadius: bg ? 6 : 0,
    ...style,
  }}>
    {children}
  </span>
);

// ── Button — flat pill, no gradients ──
const CCButton = ({ children, variant = 'primary', onClick, style = {}, disabled = false, size = 'md', icon, iconRight }) => {
  const [pressed, setPressed] = React.useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
    borderRadius: 999, fontFamily: CC.font, fontWeight: 700, cursor: 'pointer',
    border: 'none', transition: 'transform 0.12s ease', userSelect: 'none',
    transform: pressed ? 'scale(0.97)' : 'scale(1)', letterSpacing: 0,
    textTransform: 'lowercase',
  };
  const sizes = {
    sm: { padding: '10px 18px', fontSize: 13.5 },
    md: { padding: '14px 22px', fontSize: 15 },
    lg: { padding: '18px 28px', fontSize: 17 },
  };
  const variants = {
    primary:   { background: CC.ink,      color: CC.cream },                 // dark pill, cream text (matches mocks)
    pink:      { background: CC.pink,     color: CC.ink },
    lime:      { background: CC.lime,     color: CC.ink },
    cream:     { background: CC.cream,    color: CC.ink, border: `2px solid ${CC.ink}` },
    secondary: { background: 'transparent', color: CC.ink, border: `2px solid ${CC.ink}` },
    ghost:     { background: 'transparent', color: CC.ink },
    navy:      { background: CC.ink,      color: CC.cream },
    cool:      { background: CC.ink,      color: CC.lime },
    outline:   { background: 'transparent', color: CC.ink, border: `2px solid ${CC.ink}` },
    success:   { background: CC.lime,     color: CC.ink },
    light:     { background: CC.cream,    color: CC.ink },
  };
  return (
    <button onClick={onClick} disabled={disabled}
      onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)} onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)} onTouchEnd={() => setPressed(false)}
      style={{ ...base, ...sizes[size], ...variants[variant], opacity: disabled ? 0.45 : 1, ...style }}>
      {icon && icon}
      {children}
      {iconRight && (
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: size === 'lg' ? 36 : 28, height: size === 'lg' ? 36 : 28,
          borderRadius: 999, background: variant === 'primary' || variant === 'navy' || variant === 'cool' ? CC.lime : CC.ink,
          color: variant === 'primary' || variant === 'navy' || variant === 'cool' ? CC.ink : CC.cream,
          marginRight: size === 'lg' ? -10 : -6,
        }}>
          {iconRight}
        </span>
      )}
    </button>
  );
};

// ── Card ──
const CCCard = ({ children, style = {}, onClick, variant = 'cream' }) => {
  const variants = {
    cream: { background: CC.cream, border: `1.5px solid ${CC.ink}` },
    pink:  { background: CC.pink,  border: `1.5px solid ${CC.ink}`, color: CC.ink },
    lime:  { background: CC.lime,  border: `1.5px solid ${CC.ink}`, color: CC.ink },
    ink:   { background: CC.ink,   border: `1.5px solid ${CC.ink}`, color: CC.cream },
    soft:  { background: CC.pinkSoft, border: `1.5px solid ${CC.ink}` },
    plain: { background: CC.cream, border: `1.5px solid ${CC.border}` },
  };
  return (
    <div onClick={onClick} style={{
      borderRadius: 22, padding: '18px 20px',
      ...variants[variant],
      cursor: onClick ? 'pointer' : 'default', ...style,
    }}>
      {children}
    </div>
  );
};

// ── Tab Bar ──
const CCTabBar = ({ active, onTab }) => {
  const tabs = [
    { id: 'home',     label: 'shop' },
    { id: 'plans',    label: 'earn' },
    { id: 'activity', label: 'esim' },
    { id: 'profile',  label: 'me' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 18, left: 18, right: 18,
      background: CC.cream, border: `1.5px solid ${CC.ink}`,
      borderRadius: 999, padding: 4,
      display: 'flex', zIndex: 100,
    }}>
      {tabs.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button key={id} onClick={() => onTab(id)} style={{
            flex: 1, border: 'none', cursor: 'pointer',
            background: isActive ? CC.pink : 'transparent',
            color: CC.ink, fontFamily: CC.font, fontWeight: 700,
            fontSize: 14, textTransform: 'lowercase',
            borderRadius: 999, padding: '10px 0',
            transition: 'background 0.18s',
          }}>
            {label}
          </button>
        );
      })}
    </div>
  );
};

// ── Progress Bar ──
const CCProgress = ({ value, max = 100, color = CC.lime, height = 10, bg = 'rgba(255,246,229,0.15)', style = {} }) => {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div style={{ background: bg, borderRadius: 999, height, overflow: 'hidden', ...style }}>
      <div style={{ height: '100%', borderRadius: 999, background: color, width: `${pct}%`, transition: 'width 0.6s ease' }} />
    </div>
  );
};

// ── Input ──
const CCInput = ({ label, placeholder, type = 'text', value, onChange, icon, style = {} }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
    {label && <label style={{ fontFamily: CC.font, fontSize: 13, fontWeight: 700, color: CC.ink, textTransform: 'lowercase' }}>{label}</label>}
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {icon && <div style={{ position: 'absolute', left: 16, color: CC.inkMuted, display: 'flex' }}>{icon}</div>}
      <input type={type} placeholder={placeholder} value={value} onChange={onChange}
        style={{
          flex: 1, background: CC.cream, border: `1.5px solid ${CC.ink}`, borderRadius: 14,
          padding: icon ? '14px 16px 14px 44px' : '14px 16px',
          fontFamily: CC.font, fontSize: 15, color: CC.ink, outline: 'none',
          width: '100%',
        }}
      />
    </div>
  </div>
);

// ── Pill ──
const CCPill = ({ children, color = CC.lime, textColor, icon, style = {} }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 6,
    background: color, color: textColor || CC.ink, borderRadius: 999,
    padding: '5px 12px', fontSize: 12, fontWeight: 700, fontFamily: CC.font,
    border: `1px solid ${CC.ink}`, textTransform: 'lowercase', ...style,
  }}>
    {icon && icon}
    {children}
  </div>
);

// ── Screen wrapper ──
const CCScreen = ({ children, bg = CC.cream, style = {}, padTop = 60, noPad = false }) => (
  <div style={{
    height: '100%', background: bg, overflowY: 'auto', overflowX: 'hidden',
    paddingTop: noPad ? 0 : padTop,
    fontFamily: CC.font, color: CC.ink, position: 'relative',
    ...style,
  }}>
    {children}
  </div>
);

// ── Section header ──
const SectionHeader = ({ title, action, onAction }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
    <span style={{ fontFamily: CC.display, fontSize: 20, fontWeight: 900, color: CC.ink, textTransform: 'lowercase', letterSpacing: -0.4 }}>{title}</span>
    {action && <button onClick={onAction} style={{ border: 'none', background: 'none', color: CC.ink, fontSize: 13, fontWeight: 700, fontFamily: CC.font, cursor: 'pointer', textDecoration: 'underline' }}>{action}</button>}
  </div>
);

// ── Social Auth Button ──
const SocialButton = ({ provider, onClick }) => {
  const logos = {
    google: <svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>,
    apple:  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.41c1.39.07 2.36.74 3.18.8 1.22-.24 2.39-.93 3.7-.84 1.58.13 2.77.74 3.53 1.9-3.27 1.98-2.49 5.93.47 7.07-.56 1.52-1.31 3-2.88 3.94zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>,
  };
  return (
    <button onClick={onClick} style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      background: CC.cream, border: `1.5px solid ${CC.ink}`, borderRadius: 999,
      padding: '14px 20px', width: '100%', fontFamily: CC.font, fontSize: 15, fontWeight: 700,
      color: CC.ink, cursor: 'pointer', textTransform: 'lowercase',
    }}>
      {logos[provider]}
      continue with {provider}
    </button>
  );
};

// ── Back Button ──
const BackButton = ({ onBack, dark = false }) => (
  <button onClick={onBack} style={{
    position: 'absolute', top: 56, left: 16, zIndex: 20,
    background: dark ? CC.cream : CC.cream,
    border: `1.5px solid ${CC.ink}`,
    borderRadius: 999, width: 40, height: 40,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
  }}>
    <CCIcon.ChevronLeft size={20} color={CC.ink} />
  </button>
);

// ── Brand background — soft cream + a couple of floating clouds ──
const BrandBlobs = ({ opacity = 0.5 }) => (
  <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
    <div style={{ position: 'absolute', top: '8%', right: '6%', opacity }}>
      <CCMascot size={70} color={CC.pinkSoft} eyeColor={CC.ink} />
    </div>
    <div style={{ position: 'absolute', top: '38%', left: '4%', opacity: opacity * 0.7 }}>
      <CCMascot size={50} color={CC.pinkSoft} eyeColor={CC.ink} />
    </div>
    <div style={{ position: 'absolute', bottom: '10%', right: '12%', opacity: opacity * 0.5 }}>
      <CCMascot size={60} color={CC.pinkSoft} eyeColor={CC.ink} />
    </div>
  </div>
);

Object.assign(window, {
  CCButton, CCCard, CCTabBar, CCProgress, CCInput, CCPill, CCScreen,
  CCHeadline, CCHighlight,
  SectionHeader, SocialButton, BackButton, BrandBlobs,
});
