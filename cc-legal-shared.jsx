// Shared chrome for legal pages — V2 brand
const LegalPage = ({ title, highlight, subtitle, sections, onBack, onNav, sister }) => {
  const D = CC.display;
  const F = CC.font;
  const [openId, setOpenId] = React.useState(null);

  return (
    <div style={{ background: CC.cream, color: CC.ink, fontFamily: F, minHeight: '100vh' }}>

      {/* NAV — same as landing */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: CC.cream, borderBottom: `1.5px solid ${CC.ink}` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '14px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <img src="assets/mascot-cloud.png" alt="" style={{ height: 36, width: 'auto', display: 'block' }} />
            <span style={{ fontFamily: D, fontWeight: 900, fontSize: 24, color: CC.ink, textTransform: 'lowercase', letterSpacing: -0.8, lineHeight: 1 }}>cielocell</span>
          </button>
          <button onClick={onBack} style={{ background: CC.ink, color: CC.cream, border: 'none', borderRadius: 999, padding: '10px 18px', fontFamily: F, fontSize: 13, fontWeight: 700, cursor: 'pointer', textTransform: 'lowercase', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            ← back
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: 'clamp(56px, 8vw, 96px) 28px clamp(40px, 6vw, 72px)', background: CC.pinkSoft, borderBottom: `1.5px solid ${CC.ink}` }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <h1 style={{ fontFamily: D, fontWeight: 900, fontSize: 'clamp(56px, 11vw, 160px)', lineHeight: 0.92, letterSpacing: -0.05 + 'em', margin: 0, textTransform: 'lowercase', color: CC.ink }}>
            {title}<br /><span style={{ color: CC.pink }}>{highlight}.</span>
          </h1>
          <p style={{ fontFamily: F, fontSize: 'clamp(16px, 1.6vw, 21px)', fontWeight: 500, color: CC.ink, opacity: 0.78, margin: 'clamp(20px, 2.5vw, 32px) 0 0', textTransform: 'lowercase', maxWidth: '50ch' }}>
            {subtitle}
          </p>
          <div style={{ marginTop: 28, display: 'flex', gap: 20, flexWrap: 'wrap', fontFamily: F, fontSize: 13, color: CC.inkMuted, fontWeight: 500, textTransform: 'lowercase' }}>
            <span>effective: june 1, 2026</span>
            <span>·</span>
            <span>last updated: may 4, 2026</span>
            <span>·</span>
            <span>v1.0</span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 28px', background: CC.cream }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          {/* Identity card */}
          <div style={{ background: CC.lime, border: `1.5px solid ${CC.ink}`, borderRadius: 22, padding: '20px 24px', marginBottom: 28, fontFamily: F, fontSize: 14, color: CC.ink, lineHeight: 1.7 }}>
            <strong style={{ fontFamily: D, fontWeight: 900, textTransform: 'lowercase', letterSpacing: -0.3 }}>cielo cell ab</strong> · org. no. 559579-6912<br />
            målarevägen 24, 227 30 lund, sweden · hello@cielocell.com
          </div>

          {/* Quick links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
            <button onClick={() => onNav && onNav(sister.target)} style={{ background: CC.cream, border: `1.5px solid ${CC.ink}`, borderRadius: 999, padding: '8px 16px', fontFamily: F, fontSize: 13, fontWeight: 700, color: CC.ink, cursor: 'pointer', textTransform: 'lowercase' }}>{sister.label} →</button>
            <a href="mailto:hello@cielocell.com" style={{ background: CC.cream, border: `1.5px solid ${CC.ink}`, borderRadius: 999, padding: '8px 16px', fontFamily: F, fontSize: 13, fontWeight: 700, color: CC.ink, textDecoration: 'none', textTransform: 'lowercase' }}>contact us →</a>
          </div>

          {/* Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {sections.map(({ id, title, content }) => {
              const open = openId === id;
              return (
                <div key={id} style={{ background: open ? CC.pinkSoft : CC.cream, border: `1.5px solid ${CC.ink}`, borderRadius: 20, overflow: 'hidden', transition: 'background 0.2s' }}>
                  <button onClick={() => setOpenId(open ? null : id)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: D, fontSize: 17, fontWeight: 900, color: CC.ink, textTransform: 'lowercase', letterSpacing: -0.3, gap: 16 }}>
                    <span>{title}</span>
                    <span style={{ width: 30, height: 30, borderRadius: 999, background: CC.ink, color: CC.cream, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.22s' }}>
                      <CCIcon.Plus size={14} color={CC.cream} strokeWidth={2.5} />
                    </span>
                  </button>
                  {open && (
                    <div style={{ padding: '0 24px 22px', fontFamily: F, fontSize: 14.5, color: CC.ink, lineHeight: 1.7, opacity: 0.86, whiteSpace: 'pre-line' }}>{content}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ padding: 'clamp(48px, 6vw, 80px) 28px', background: CC.ink, color: CC.cream, borderTop: `1.5px solid ${CC.ink}` }}>
        <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ fontFamily: D, fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, lineHeight: 0.95, textTransform: 'lowercase', letterSpacing: -0.04 + 'em', maxWidth: '14ch' }}>
            questions? <span style={{ color: CC.lime }}>just ask.</span>
          </div>
          <a href="mailto:hello@cielocell.com" style={{ background: CC.pink, color: CC.ink, border: 'none', borderRadius: 999, padding: '14px 22px', fontFamily: F, fontSize: 14, fontWeight: 700, textDecoration: 'none', textTransform: 'lowercase', whiteSpace: 'nowrap' }}>hello@cielocell.com →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '48px 28px 36px', background: CC.cream, borderTop: `1.5px solid ${CC.ink}` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <img src="assets/mascot-cloud.png" alt="" style={{ height: 36, width: 'auto', display: 'block' }} />
            <span style={{ fontFamily: D, fontWeight: 900, fontSize: 24, color: CC.ink, textTransform: 'lowercase', letterSpacing: -0.8, lineHeight: 1 }}>cielocell</span>
          </button>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button onClick={() => onNav && onNav('terms')} style={{ background: 'none', border: 'none', fontFamily: F, fontSize: 13, color: CC.ink, fontWeight: 500, cursor: 'pointer', padding: '6px 10px', textTransform: 'lowercase' }}>terms</button>
            <button onClick={() => onNav && onNav('privacy')} style={{ background: 'none', border: 'none', fontFamily: F, fontSize: 13, color: CC.ink, fontWeight: 500, cursor: 'pointer', padding: '6px 10px', textTransform: 'lowercase' }}>privacy</button>
            <a href="mailto:hello@cielocell.com" style={{ fontFamily: F, fontSize: 13, color: CC.ink, fontWeight: 500, textDecoration: 'none', padding: '6px 10px', textTransform: 'lowercase' }}>contact</a>
          </div>
          <div style={{ fontFamily: F, fontSize: 12, color: CC.inkMuted, textTransform: 'lowercase' }}>
            © 2026 cielo cell ab · lund, sweden
          </div>
        </div>
      </footer>

    </div>
  );
};

Object.assign(window, { LegalPage });
