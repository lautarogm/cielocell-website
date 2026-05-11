// CieloCell Landing Page V2 — anti-corporate, chunky, mascot-driven

const LandingPage = ({ onBack, onNav }) => {
  const [openFaq, setOpenFaq] = React.useState(0);
  const [eyesBlink, setEyesBlink] = React.useState(false);

  // Periodic mascot blink
  React.useEffect(() => {
    const t = setInterval(() => {
      setEyesBlink(true);
      setTimeout(() => setEyesBlink(false), 180);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  const D = CC.display;
  const F = CC.font;

  const reasons = [
  { n: '01', title: "it doesn't look like a telco.", desc: "airalo, holafly, saily, nomad — they all look like fintech. that means the category is wide open for a brand with personality. pink + a friendly cloud is instantly recognizable on the home screen." },
  { n: '02', title: 'the mascot does the work.', desc: "a cloud with eyes communicates \"cielo\" instantly without needing to translate. it scales from app icon to onboarding hero to error states to empty states — one character, infinite expressions." },
  { n: '03', title: 'price-conscious without feeling cheap.', desc: "the \"or earn it\" tag next to every price is the central product hook. saturated color and bold type make the free-via-ads model feel like a feature, not a compromise." }];


  const steps = [
  { n: '01', title: 'get the app', desc: 'download the app and install the esim, and you are ready.' },
  { n: '02', title: 'earn or buy data', desc: 'watch ads, complete offers, collect points or buy low-cost data packs' },
  { n: '03', title: 'stay connected', desc: 'use mobile data for free or for less. contract-free' }];


  const faqs = [
  { q: 'is my phone compatible?', a: "most modern smartphones support esim. dial *#06# — if you see an eid number, your phone likely supports esim. your phone also needs to be carrier-unlocked." },
  { q: 'is it actually free?', a: "yes. you can earn free data by watching ads, completing offers, or collecting points in the app. you can also buy data if you want more, faster." },
  { q: 'do i need a credit card?', a: "no. you can start earning data without a credit card. paid options are available if you want to buy a data pack or skip the ads." },
  { q: 'how do i get connected?', a: "download the app, choose how you want to start, get your esim, and turn it on. that's it." },
  { q: 'how does cielocell know where i am?', a: "cielocell detects your current region and shows the data options available there. in some cases, you may be able to choose a broader region." },
  { q: 'do i keep my regular number?', a: "yes. cielocell gives you mobile data through an esim. your regular sim and phone number can stay active." },
  { q: 'how does coverage work?', a: "cielocell connects through partner mobile networks. coverage depends on your location, device, and local network availability." }];


  const screens = [
  { label: 'welcome', sub: 'first impression', bg: CC.pink },
  { label: 'pick a pack', sub: 'shop screen', bg: CC.cream },
  { label: 'earn data', sub: 'rewards loop', bg: CC.cream },
  { label: 'esim live', sub: 'dashboard', bg: CC.ink }];


  return (
    <div style={{ background: CC.cream, color: CC.ink, fontFamily: F, minHeight: '100vh' }}>

      {/* ── NAV ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: CC.cream, borderBottom: `1.5px solid ${CC.ink}` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '14px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="assets/mascot-cloud.png" alt="" style={{ height: 36, width: 'auto', display: 'block' }} />
            <span style={{ fontFamily: D, fontWeight: 900, fontSize: 24, color: CC.ink, textTransform: 'lowercase', letterSpacing: -0.8, lineHeight: 1 }}>cielocell</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <a href="mailto:hello@cielocell.com" style={{ textDecoration: 'none' }}><CCButton variant="primary" size="sm" iconRight={<CCIcon.ArrowRight size={14} />}>get the app</CCButton></a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', padding: 'clamp(48px, 8vw, 96px) 28px clamp(64px, 9vw, 120px)', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 0 }}>
          <h1 style={{ fontFamily: D, fontWeight: 900, lineHeight: 0.88, letterSpacing: -0.06 + 'em', margin: 0, textTransform: 'lowercase', color: CC.ink, maxWidth: '14ch', fontSize: 'clamp(64px, 11vw, 160px)' }}>
            free data,<br /><span style={{ color: CC.pink }}>free</span> backup
          </h1>
          <p style={{ fontFamily: F, fontSize: 'clamp(18px, 2vw, 26px)', fontWeight: 500, lineHeight: 1.35, color: CC.ink, textTransform: 'lowercase', margin: "39px 0px 40px" }}>free or low-cost mobile data powered by ads. no contracts, no credit card, no hidden fees 

          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="mailto:hello@cielocell.com" style={{ textDecoration: 'none' }}><CCButton variant="primary" size="lg" iconRight={<CCIcon.ArrowRight size={18} />}>get the app</CCButton></a>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" style={{ padding: 'clamp(64px, 8vw, 120px) 28px', background: CC.pinkSoft, borderTop: `1.5px solid ${CC.ink}`, borderBottom: `1.5px solid ${CC.ink}` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: D, fontWeight: 900, fontSize: 'clamp(40px, 7vw, 96px)', lineHeight: 0.95, letterSpacing: -0.04 + 'em', margin: '0 0 clamp(40px, 6vw, 72px)', textTransform: 'lowercase', color: CC.ink, maxWidth: '11ch' }}>
            three steps. <span style={{ color: CC.pink }}>that's it.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            {steps.map(({ n, title, desc }) =>
            <div key={n} style={{ background: CC.cream, border: `1.5px solid ${CC.ink}`, borderRadius: 28, padding: '32px 28px 36px', position: 'relative' }}>
                <div style={{ fontFamily: D, fontSize: 64, fontWeight: 900, color: CC.pink, lineHeight: 1, letterSpacing: -2, marginBottom: 16, textTransform: 'lowercase' }}>{n}</div>
                <div style={{ fontFamily: D, fontSize: 22, fontWeight: 900, color: CC.ink, marginBottom: 10, letterSpacing: -0.5, textTransform: 'lowercase' }}>{title}</div>
                <div style={{ fontFamily: F, fontSize: 15, color: CC.ink, lineHeight: 1.55, opacity: 0.78 }}>{desc}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── COMING SOON / APP PREVIEW ── */}
      <section style={{ padding: 'clamp(64px, 8vw, 120px) 28px', background: CC.cream, position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(40px, 6vw, 72px)', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: CC.lime, border: `1.5px solid ${CC.ink}`, borderRadius: 999, padding: '6px 14px', fontFamily: F, fontSize: 12, fontWeight: 700, color: CC.ink, textTransform: 'lowercase', marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: CC.ink }} /> coming june 2026
            </div>
            <h2 style={{ fontFamily: D, fontWeight: 900, fontSize: 'clamp(40px, 7vw, 96px)', lineHeight: 0.95, letterSpacing: -0.04 + 'em', margin: 0, textTransform: 'lowercase', color: CC.ink }}>
              you're going<br />to <span style={{ color: CC.pink }}>love</span> this.
            </h2>
            <p style={{ fontFamily: F, fontSize: 'clamp(16px, 1.5vw, 19px)', fontWeight: 500, lineHeight: 1.5, color: CC.ink, opacity: 0.8, margin: '24px 0 0', maxWidth: 460, textTransform: 'lowercase' }}>open the app, choose how you want to get data, and connect with an esim in minutes. watch ads, earn points, buy a pack. no contract.

            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IPhone17Frame src="assets/welcome-screen.png" />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: 'clamp(64px, 8vw, 120px) 28px', background: CC.pinkSoft, borderTop: `1.5px solid ${CC.ink}`, borderBottom: `1.5px solid ${CC.ink}` }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 style={{ fontFamily: D, fontWeight: 900, fontSize: 'clamp(40px, 7vw, 96px)', lineHeight: 0.95, letterSpacing: -0.04 + 'em', margin: '0 0 clamp(40px, 6vw, 64px)', textTransform: 'lowercase', color: CC.ink }}>
            ask us <span style={{ color: CC.pink }}>anything.</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map(({ q, a }, i) => {
              const open = openFaq === i;
              return (
                <div key={q} style={{ background: open ? CC.lime : CC.cream, border: `1.5px solid ${CC.ink}`, borderRadius: 22, overflow: 'hidden', transition: 'background 0.2s' }}>
                  <button onClick={() => setOpenFaq(open ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 26px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: D, fontSize: 18, fontWeight: 900, color: CC.ink, textTransform: 'lowercase', letterSpacing: -0.3 }}>
                    <span>{q}</span>
                    <span style={{ width: 32, height: 32, borderRadius: 999, background: CC.ink, color: CC.cream, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: 16, transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.22s' }}>
                      <CCIcon.Plus size={16} color={CC.cream} strokeWidth={2.5} />
                    </span>
                  </button>
                  {open &&
                  <div style={{ padding: '0 26px 24px', fontFamily: F, fontSize: 15, color: CC.ink, lineHeight: 1.6, opacity: 0.85 }}>
                      {a}
                    </div>
                  }
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* ── BIG CTA ── */}
      <section style={{ padding: 'clamp(64px, 8vw, 120px) 28px', background: CC.ink, color: CC.cream, position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <h2 style={{ fontFamily: D, fontWeight: 900, fontSize: 'clamp(48px, 9vw, 144px)', lineHeight: 0.92, letterSpacing: -0.05 + 'em', margin: 0, textTransform: 'lowercase', color: CC.cream, maxWidth: '12ch' }}>
            ready for <span style={{ color: CC.lime }}>free data?</span>
          </h2>
          <p style={{ fontFamily: F, fontSize: 'clamp(16px, 1.6vw, 20px)', fontWeight: 500, lineHeight: 1.5, color: CC.cream, opacity: 0.8, maxWidth: 540, margin: '28px 0 36px', textTransform: 'lowercase' }}>join the waitlist — we'll send you a free 100mb pack when the app launches in june.

          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', maxWidth: 540 }}>
            <input type="email" placeholder="your@email.com" style={{ flex: '1 1 240px', background: 'rgba(255,246,229,0.08)', border: `1.5px solid ${CC.cream}`, borderRadius: 999, padding: '16px 22px', fontFamily: F, fontSize: 15, color: CC.cream, outline: 'none' }} />
            <a href="mailto:hello@cielocell.com" style={{ textDecoration: 'none' }}><CCButton variant="lime" size="lg" iconRight={<CCIcon.ArrowRight size={18} />}>join waitlist</CCButton></a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: '48px 28px 36px', background: CC.cream, borderTop: `1.5px solid ${CC.ink}` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="assets/mascot-cloud.png" alt="" style={{ height: 36, width: 'auto', display: 'block' }} />
            <span style={{ fontFamily: D, fontWeight: 900, fontSize: 24, color: CC.ink, textTransform: 'lowercase', letterSpacing: -0.8, lineHeight: 1 }}>cielocell</span>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button onClick={() => onNav && onNav('terms')} style={{ background: 'none', border: 'none', fontFamily: F, fontSize: 13, color: CC.ink, fontWeight: 500, cursor: 'pointer', padding: '6px 10px' }}>terms</button>
            <button onClick={() => onNav && onNav('privacy')} style={{ background: 'none', border: 'none', fontFamily: F, fontSize: 13, color: CC.ink, fontWeight: 500, cursor: 'pointer', padding: '6px 10px' }}>privacy</button>
            <a href="mailto:hello@cielocell.com" style={{ fontFamily: F, fontSize: 13, color: CC.ink, fontWeight: 500, textDecoration: 'none', padding: '6px 10px' }}>contact</a>
          </div>
          <div style={{ fontFamily: F, fontSize: 12, color: CC.inkMuted }}>© 2026

          </div>
        </div>
      </footer>

    </div>);

};

// ── Mini phone mock ──
const PhoneMock = ({ variant = 0, bg = CC.cream }) => {
  const D = CC.display;
  const F = CC.font;
  const isDark = bg === CC.ink;
  const ink = isDark ? CC.cream : CC.ink;

  const renderContent = () => {
    if (variant === 0) {
      // Welcome
      return (
        <div style={{ padding: '46px 22px 24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: F, fontSize: 10, fontWeight: 700, color: ink, opacity: 0.7, letterSpacing: 1.4, marginBottom: 18, textTransform: 'uppercase' }}>◆ cielocell · v2</div>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0 18px' }}>
            <CCMascot size={88} color={CC.cream} eyeColor={CC.ink} />
          </div>
          <div style={{ flex: 1 }} />
          <div style={{ fontFamily: D, fontWeight: 900, fontSize: 30, lineHeight: 0.95, color: ink, textTransform: 'lowercase', letterSpacing: -1 }}>
            free data,<br />wherever<br />you wander.
          </div>
          <div style={{ fontFamily: F, fontSize: 11, color: ink, opacity: 0.85, marginTop: 12, lineHeight: 1.45 }}>
            prepaid esims for 190+ countries. earn data by tapping ads. or just buy a pack — your call.
          </div>
          <button style={{ marginTop: 18, background: CC.ink, color: CC.cream, border: 'none', borderRadius: 999, padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: F, fontWeight: 700, fontSize: 14, textTransform: 'lowercase', cursor: 'pointer' }}>
            let's go
            <span style={{ width: 28, height: 28, borderRadius: 999, background: CC.lime, color: CC.ink, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <CCIcon.ArrowRight size={14} color={CC.ink} />
            </span>
          </button>
          <div style={{ fontFamily: F, fontSize: 10, color: ink, opacity: 0.7, textAlign: 'center', marginTop: 12 }}>
            already have an account? <span style={{ textDecoration: 'underline', fontWeight: 700 }}>sign in</span>
          </div>
        </div>);

    }
    if (variant === 1) {
      // Pick a pack
      return (
        <div style={{ padding: '46px 18px 24px', height: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontFamily: D, fontWeight: 900, fontSize: 26, lineHeight: 0.95, color: ink, textTransform: 'lowercase', letterSpacing: -0.8 }}>
            where to,<br /><span style={{ color: CC.pink }}>friend?</span>
          </div>
          <div style={{ background: CC.cream, border: `1.5px solid ${CC.ink}`, borderRadius: 999, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8, fontFamily: F, fontSize: 11, color: CC.inkMuted, marginTop: 4 }}>
            <CCIcon.Search size={12} color={CC.inkMuted} /> search a country or region
          </div>
          {[
          { flag: '🇪🇸', name: 'spain', price: '$4', sub: '5gb · 30 days', accent: CC.lime },
          { flag: '🇯🇵', name: 'japan', price: '$6', sub: '3gb · 15 days' },
          { flag: '🇧🇷', name: 'brazil', price: '$9', sub: '10gb · 30 days' },
          { flag: '🇺🇸', name: 'united states', price: '$5', sub: '8gb · 30 days' }].
          map((c, i) =>
          <div key={c.name} style={{ background: c.accent || CC.cream, border: `1.5px solid ${CC.ink}`, borderRadius: 14, padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: CC.ink, color: CC.cream, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>{c.flag}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: D, fontSize: 13, fontWeight: 900, color: CC.ink, textTransform: 'lowercase' }}>{c.name}</div>
                <div style={{ fontFamily: F, fontSize: 9, color: CC.ink, opacity: 0.7 }}>{c.sub}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: D, fontSize: 14, fontWeight: 900, color: CC.ink }}>{c.price}</div>
                <div style={{ fontFamily: F, fontSize: 7, fontWeight: 700, color: CC.ink, textTransform: 'uppercase', letterSpacing: 0.6 }}>or earn it</div>
              </div>
            </div>
          )}
        </div>);

    }
    if (variant === 2) {
      // Earn data
      return (
        <div style={{ padding: '46px 18px 24px', height: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontFamily: D, fontWeight: 900, fontSize: 22, lineHeight: 1, color: ink, textTransform: 'lowercase', letterSpacing: -0.6 }}>
            tap.<br />watch.<br /><span style={{ background: CC.lime, padding: '0 4px' }}>roam free.</span>
          </div>
          <div style={{ background: CC.ink, color: CC.cream, borderRadius: 18, padding: '14px 16px', marginTop: 6 }}>
            <div style={{ fontFamily: F, fontSize: 9, fontWeight: 700, opacity: 0.75, textTransform: 'uppercase', letterSpacing: 1 }}>earned today</div>
            <div style={{ fontFamily: D, fontSize: 32, fontWeight: 900, lineHeight: 1, marginTop: 4 }}>1.2<span style={{ fontSize: 14, marginLeft: 4 }}>gb</span></div>
            <div style={{ height: 5, background: 'rgba(255,246,229,0.15)', borderRadius: 999, marginTop: 10, overflow: 'hidden' }}>
              <div style={{ width: '60%', height: '100%', background: CC.lime, borderRadius: 999 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: F, fontSize: 8, opacity: 0.7, marginTop: 6 }}>
              <span>daily cap</span><span>1.2 / 2.0 gb</span>
            </div>
          </div>
          {[
          { Icon: CCIcon.Play, label: 'epic 30s ad', sub: 'video · 30 sec', earn: '+250mb', bg: CC.pink },
          { Icon: CCIcon.Star, label: 'rate a game', sub: 'offer · ~2 min', earn: '+500mb' },
          { Icon: CCIcon.CreditCard, label: 'try fintech app', sub: 'offer · sign up', earn: '+1gb' }].
          map(({ Icon, label, sub, earn, bg }) =>
          <div key={label} style={{ background: bg || CC.cream, border: `1.5px solid ${CC.ink}`, borderRadius: 14, padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: CC.ink, color: CC.cream, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={14} color={CC.cream} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: D, fontSize: 12, fontWeight: 900, color: CC.ink, textTransform: 'lowercase' }}>{label}</div>
                <div style={{ fontFamily: F, fontSize: 8, color: CC.ink, opacity: 0.7 }}>{sub}</div>
              </div>
              <div style={{ fontFamily: D, fontSize: 13, fontWeight: 900, color: CC.ink }}>{earn}</div>
            </div>
          )}
        </div>);

    }
    // Variant 3: esim live (dark)
    return (
      <div style={{ padding: '46px 18px 24px', height: '100%', display: 'flex', flexDirection: 'column', color: CC.cream }}>
        <div style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 6, background: CC.cream, color: CC.ink, borderRadius: 999, padding: '6px 12px', fontFamily: F, fontSize: 10, fontWeight: 700, textTransform: 'lowercase' }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: CC.pink }} /> buenos aires · ar
        </div>
        <div style={{ fontFamily: D, fontWeight: 900, fontSize: 28, lineHeight: 0.95, marginTop: 14, textTransform: 'lowercase', letterSpacing: -0.8 }}>
          your esim is<br /><span style={{ color: CC.pink }}>live.</span>
        </div>
        <div style={{ position: 'relative', alignSelf: 'center', margin: '18px 0', width: 120, height: 120 }}>
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,246,229,0.12)" strokeWidth="9" />
            <circle cx="60" cy="60" r="50" fill="none" stroke={CC.lime} strokeWidth="9" strokeLinecap="round" strokeDasharray={2 * Math.PI * 50} strokeDashoffset={2 * Math.PI * 50 * (1 - 0.59)} transform="rotate(-90 60 60)" />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontFamily: D, fontSize: 32, fontWeight: 900, color: CC.lime, lineHeight: 1 }}>4.7</div>
            <div style={{ fontFamily: F, fontSize: 9, color: CC.cream, opacity: 0.7, textTransform: 'lowercase' }}>of 8 gb left</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          <div style={{ flex: 1, background: 'rgba(255,246,229,0.05)', border: '1px solid rgba(255,246,229,0.15)', borderRadius: 14, padding: 10 }}>
            <div style={{ fontFamily: F, fontSize: 8, fontWeight: 700, opacity: 0.6, textTransform: 'uppercase', letterSpacing: 1 }}>days left</div>
            <div style={{ fontFamily: D, fontSize: 22, fontWeight: 900 }}>23</div>
          </div>
          <div style={{ flex: 1, background: 'rgba(255,246,229,0.05)', border: '1px solid rgba(255,246,229,0.15)', borderRadius: 14, padding: 10 }}>
            <div style={{ fontFamily: F, fontSize: 8, fontWeight: 700, opacity: 0.6, textTransform: 'uppercase', letterSpacing: 1 }}>network</div>
            <div style={{ fontFamily: D, fontSize: 22, fontWeight: 900 }}>5g</div>
          </div>
        </div>
        <button style={{ background: CC.pink, color: CC.ink, border: 'none', borderRadius: 999, padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: F, fontWeight: 700, fontSize: 14, textTransform: 'lowercase', cursor: 'pointer', marginTop: 'auto' }}>
          boost data
          <span style={{ width: 26, height: 26, borderRadius: 999, background: CC.ink, color: CC.lime, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <CCIcon.Plus size={14} color={CC.lime} strokeWidth={2.5} />
          </span>
        </button>
      </div>);

  };

  return (
    <div style={{ width: 220, height: 440, borderRadius: 38, background: CC.ink, padding: 6, position: 'relative', boxShadow: '0 6px 0 rgba(14,31,24,0.18)' }}>
      <div style={{ width: '100%', height: '100%', borderRadius: 32, background: bg, overflow: 'hidden', position: 'relative' }}>
        {/* notch */}
        <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', width: 70, height: 18, borderRadius: 999, background: CC.ink, zIndex: 5 }} />
        {/* status bar */}
        <div style={{ position: 'absolute', top: 14, left: 18, right: 18, display: 'flex', justifyContent: 'space-between', fontFamily: F, fontSize: 9, fontWeight: 700, color: isDark ? CC.cream : CC.ink, zIndex: 4 }}>
          <span>9:41</span>
          <span style={{ display: 'inline-flex', gap: 3, alignItems: 'center' }}>
            <span style={{ width: 12, height: 8, border: `1px solid ${isDark ? CC.cream : CC.ink}`, borderRadius: 1, position: 'relative' }}>
              <span style={{ position: 'absolute', inset: 1, background: isDark ? CC.cream : CC.ink, borderRadius: 0.5 }} />
            </span>
          </span>
        </div>
        {renderContent()}
      </div>
    </div>);

};

// ── iPhone 17 frame — titanium bezel, dynamic island, accepts an image src OR children ──
const IPhone17Frame = ({ src, children, width = 320 }) => {
  const height = Math.round(width * (1258 / 626));
  return (
    <div style={{
      width, height,
      borderRadius: width * 0.16,
      padding: 8,
      background: 'linear-gradient(145deg, #2b2b2e 0%, #1a1a1c 100%)',
      boxShadow: '0 30px 60px -20px rgba(14,31,24,0.35), 0 0 0 1.5px #0E1F18, inset 0 0 0 1px rgba(255,255,255,0.05)',
      position: 'relative'
    }}>
      <div style={{
        width: '100%', height: '100%',
        borderRadius: width * 0.13,
        overflow: 'hidden', position: 'relative',
        background: CC.pink
      }}>
        {children ? children : <img src={src} alt="cielocell app" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />}
        {/* Dynamic island */}
        <div style={{ position: 'absolute', top: width * 0.035, left: '50%', transform: 'translateX(-50%)', width: width * 0.32, height: width * 0.085, borderRadius: 999, background: '#000', zIndex: 5 }} />
      </div>
    </div>);

};

// ── Earn-data welcome screen — pink, mascot, three perks, big CTA ──
const EarnDataWelcomeScreen = () => {
  const D = CC.display;
  const F = CC.font;

  const perks = [
    { label: 'free eSIM',  icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={CC.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="3" width="14" height="18" rx="2.5" />
        <path d="M9 11h6M9 14h6M9 17h3" />
      </svg>
    )},
    { label: 'watch ads',  icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={CC.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="14" height="13" rx="2" />
        <rect x="7" y="3" width="14" height="13" rx="2" />
        <polygon points="11,9 16,12 11,15" fill={CC.ink} stroke="none" />
      </svg>
    )},
    { label: 'get data',   icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={CC.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 13a10 10 0 0114 0" />
        <path d="M8 16.5a6 6 0 018 0" />
        <circle cx="12" cy="19.5" r="1.4" fill={CC.ink} stroke="none" />
      </svg>
    )},
  ];

  return (
    <div style={{
      width: '100%', height: '100%', background: CC.pink, color: CC.ink,
      padding: '54px 22px 22px', display: 'flex', flexDirection: 'column',
      position: 'relative', boxSizing: 'border-box',
      fontFamily: F
    }}>
      {/* status bar (under dynamic island) */}
      <div style={{ position: 'absolute', top: 16, left: 24, right: 24, display: 'flex', justifyContent: 'space-between', fontFamily: F, fontSize: 11, fontWeight: 700, color: CC.ink }}>
        <span>9:41</span>
        <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}>
          <span style={{ width: 14, height: 9, border: `1.2px solid ${CC.ink}`, borderRadius: 2, position: 'relative' }}>
            <span style={{ position: 'absolute', inset: 1, background: CC.ink, borderRadius: 0.5 }} />
          </span>
        </span>
      </div>

      {/* mascot */}
      <div style={{ marginTop: 14, marginBottom: 18 }}>
        <CCMascot size={104} color={CC.cream} eyeColor={CC.ink} />
      </div>

      {/* headline */}
      <div style={{
        fontFamily: D, fontWeight: 900, fontSize: 38, lineHeight: 0.95,
        letterSpacing: -1.4, color: CC.ink, textTransform: 'lowercase'
      }}>
        free mobile<br />data.<br />no credit<br />card.
      </div>

      <div style={{ flex: 1 }} />

      {/* three perks */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 14 }}>
        {perks.map((p) => (
          <div key={p.label} style={{
            background: CC.cream, border: `1.5px solid ${CC.ink}`, borderRadius: 16,
            padding: '12px 8px 10px', display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start'
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: 7, background: CC.lime,
              border: `1.2px solid ${CC.ink}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>{p.icon}</div>
            <div style={{ fontFamily: D, fontWeight: 900, fontSize: 11, color: CC.ink, textTransform: 'lowercase', letterSpacing: -0.2 }}>{p.label}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button style={{
        background: CC.ink, color: CC.cream, border: 'none', borderRadius: 999,
        padding: '13px 14px 13px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontFamily: D, fontWeight: 900, fontSize: 14, textTransform: 'lowercase', letterSpacing: -0.3, cursor: 'pointer'
      }}>
        start earning free data
        <span style={{
          width: 30, height: 30, borderRadius: 999, background: CC.lime,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
        }}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke={CC.ink} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="13,6 19,12 13,18" />
          </svg>
        </span>
      </button>

      {/* sign-in */}
      <div style={{ fontFamily: D, fontWeight: 900, fontSize: 11, color: CC.ink, textTransform: 'lowercase', marginTop: 12, letterSpacing: -0.2 }}>
        already have an account? <span style={{ textDecoration: 'underline' }}>log in</span>
      </div>
    </div>
  );
};

Object.assign(window, { LandingPage, PhoneMock, IPhone17Frame, EarnDataWelcomeScreen });