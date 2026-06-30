/* global React */
// LUCAS Design System — full documentation showcase.
// Exposes window.Showcase.

const DS = window.LUCASDesignSystem_675758 || {};
const {
  Button, IconButton, Chip, Card, StatusBadge,
  Input, Checkbox, RadioButton, SegmentedControl,
  Callout, Toast, Tooltip, ProgressBar,
  HeaderNav, Tabs, PaginationDots, MobileFooter,
  ModuleItem, AnswerRow, StatRow, StatTile, LucasAvatar,
  Accordion, Avatar, BottomSheet, EmptyState,
  SearchBar, Skeleton, Slider, Stepper, Table, Toggle
} = DS;

const LUCAS = "assets/lucas/";
// Standalone-export resolver: returns a bundled blob URL when present, else undefined (dev uses file paths).
const RES = (mood) => typeof window !== "undefined" && window.__resources ? window.__resources["lucas_" + mood] : undefined;
const LOGO = (which) => typeof window !== "undefined" && window.__resources ? window.__resources[which] : undefined;

// ── responsive context ────────────────────────────────────────
const ResponsiveCtx = React.createContext({ isMobile: false, isTablet: false, w: 1440 });
function useResponsive() {return React.useContext(ResponsiveCtx);}
function ResponsiveProvider({ children }) {
  const [w, setW] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  }, []);
  return React.createElement(ResponsiveCtx.Provider,
  { value: { isMobile: w < 640, isTablet: w < 1024, w } },
  children);
}

// ── error boundary ────────────────────────────────────────────
class ErrBound extends React.Component {
  constructor(p) {super(p);this.state = { err: null };}
  static getDerivedStateFromError(e) {return { err: e };}
  render() {
    if (this.state.err) return (
      <div style={{ padding: "10px 14px", borderRadius: 8, background: "var(--fill-surface-red)", color: "var(--fill-text-red)", fontFamily: "var(--font-ui)", fontSize: 12 }}>
        Component error: {this.state.err.message}
      </div>);

    return this.props.children;
  }
}
function Safe({ children }) {return React.createElement(ErrBound, null, children);}

// ── layout primitives ─────────────────────────────────────────

function PageSection({ id, eyebrow, title, intro, children, noBorder }) {
  const { isMobile, isTablet } = useResponsive();
  return (
    <section id={id} className="ds-section" style={{
      padding: isMobile ? "48px 20px" : isTablet ? "56px 32px" : "72px 48px",
      borderTop: noBorder ? "none" : "1px solid var(--stroke-subtle)"
    }}>
    <div style={{ maxWidth: 1400, margin: "0 auto" }}>
      <div style={{ marginBottom: isMobile ? 28 : 40 }}>
        {eyebrow &&
          <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-brand-600)", marginBottom: 8 }}>
            {eyebrow}
          </div>
          }
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: isMobile ? 28 : isTablet ? 32 : 38, letterSpacing: "-.025em", margin: 0, color: "var(--text-primary)" }}>{title}</h2>
        {intro && <p style={{ fontFamily: "var(--font-body)", fontSize: isMobile ? 14 : 16, lineHeight: 1.65, color: "var(--text-body)", margin: "14px 0 0", maxWidth: 680 }}>{intro}</p>}
      </div>
      {children}
    </div>
    </section>);

}

function SubSection({ id, title, intro, children, first }) {
  const { isMobile } = useResponsive();
  return (
    <div id={id} className="ds-section" style={{
      paddingTop: first ? 0 : isMobile ? 36 : 52,
      borderTop: first ? "none" : "1px solid var(--stroke-subtle)",
      marginTop: first ? 0 : isMobile ? 36 : 52
    }}>
      <div style={{ marginBottom: isMobile ? 16 : 24 }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: isMobile ? 18 : 22, letterSpacing: "-.015em", margin: 0, color: "var(--text-primary)" }}>{title}</h3>
        {intro && <p style={{ fontFamily: "var(--font-body)", fontSize: isMobile ? 13 : 15, lineHeight: 1.6, color: "var(--text-body)", margin: "10px 0 0" }}>{intro}</p>}
      </div>
      {children}
    </div>);

}

function CompRow({ id, name, tag, desc, children }) {
  const { isMobile } = useResponsive();
  return (
    <div id={id} className="ds-section" style={{ padding: isMobile ? "28px 0" : "40px 0", borderTop: "1px solid var(--stroke-subtle)" }}>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "220px 1fr", gap: isMobile ? 16 : "44px", alignItems: "start" }}>
        <div style={{ position: isMobile ? "static" : "sticky", top: "calc(var(--th, 56px) + 20px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: isMobile ? 16 : 18, letterSpacing: "-.01em", color: "var(--text-primary)" }}>{name}</span>
            {tag &&
            <code style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 700, padding: "3px 7px", borderRadius: 6, background: "var(--fill-surface-yellow)", color: "var(--fill-text-yellow)" }}>{tag}</code>
            }
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.65, color: "var(--text-body)", margin: 0 }}>{desc}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>{children}</div>
      </div>
    </div>);

}

function StateGroup({ label, children, row }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-gray-400)", marginBottom: 12 }}>{label}</div>
      <div style={{ display: "flex", flexWrap: row === false ? "nowrap" : "wrap", gap: 16, alignItems: "center" }}>{children}</div>
    </div>);

}

// ── token display helpers ─────────────────────────────────────

function Swatch({ token, name }) {
  const [val, setVal] = React.useState("");
  React.useEffect(() => {
    setVal(getComputedStyle(document.documentElement).getPropertyValue(token).trim());
  });
  return (
    <div style={{ flex: "1 1 0", minWidth: 56 }}>
      <div style={{ height: 52, borderRadius: 10, background: "var(" + token + ")", boxShadow: "inset 0 0 0 1px rgba(0,0,0,.07)" }} />
      <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 600, color: "var(--text-primary)", marginTop: 5 }}>{name}</div>
      <div style={{ fontFamily: "var(--font-ui)", fontSize: 9, color: "var(--text-body)", marginTop: 1 }}>{val}</div>
    </div>);

}

function ColorScale({ label, prefix, steps }) {
  const { isMobile } = useResponsive();
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-gray-500)", marginBottom: 10 }}>{label}</div>
      <div style={{ display: "flex", gap: 6, overflowX: isMobile ? "auto" : "visible", paddingBottom: isMobile ? 6 : 0, WebkitOverflowScrolling: "touch" }}>
        {steps.map((s) => <Swatch key={s} token={"--color-" + prefix + "-" + s} name={s} />)}
      </div>
    </div>);

}

function SemanticRow({ token, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid var(--stroke-subtle)" }}>
      <div style={{ width: 32, height: 32, borderRadius: 7, background: "var(" + token + ")", boxShadow: "inset 0 0 0 1px rgba(0,0,0,.08)", flex: "none" }} />
      <div>
        <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }}>{label}</div>
        <code style={{ fontFamily: "var(--font-ui)", fontSize: 10, color: "var(--text-body)" }}>{token}</code>
      </div>
    </div>);

}

// ── 01 · INTRODUCTION ────────────────────────────────────────

function Introduction() {
  const { isMobile, isTablet } = useResponsive();
  const stats = [
  { n: "10", label: "Design Sections" },
  { n: "20", label: "Components" },
  { n: "100+", label: "Design Tokens" },
  { n: "2", label: "Color Modes" }];

  return (
    <section id="intro" className="ds-section" style={{ padding: isMobile ? "48px 20px 56px" : isTablet ? "64px 32px" : "80px 48px 72px" }}>
    <div style={{ maxWidth: 1400, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr auto", gap: 48, alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-brand-600)", marginBottom: 14 }}>Design System</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: isMobile ? 44 : isTablet ? 52 : 60, letterSpacing: "-.03em", lineHeight: .93, margin: 0, color: "var(--text-primary)" }}>LUCAS</h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: isMobile ? 15 : 18, lineHeight: 1.65, color: "var(--text-body)", margin: "20px 0 0", maxWidth: 560 }}>
            The warm, encouraging toolkit behind NFM Lending's Home Buyer Education app — tokens, components, and Little Lucas, all in one place.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 28 }}>
            {["Yellow #FFC000", "Noto Sans · Inter", "20 components", "Light + Dark"].map((chip) =>
              <span key={chip} style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 11, padding: "6px 14px", borderRadius: "999px", background: "var(--fill-surface-yellow)", color: "var(--fill-text-yellow)" }}>{chip}</span>
              )}
          </div>
        </div>
        {!isMobile && <img src={LOGO("lucas_welcoming") || "assets/lucas/welcoming.png"} alt="Little Lucas welcoming" style={{ filter: "drop-shadow(0 16px 40px rgba(0,0,0,.15))", height: isTablet ? "320px" : "498px", width: isTablet ? "auto" : "450px" }} />}
      </div>
      {isMobile &&
        <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
          <img src={LOGO("lucas_welcoming") || "assets/lucas/welcoming.png"} alt="Little Lucas welcoming" style={{ filter: "drop-shadow(0 10px 24px rgba(0,0,0,.15))", height: "180px" }} />
        </div>
        }
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? 12 : 16, marginTop: isMobile ? 32 : 56 }}>
        {stats.map(({ n, label }) =>
          <div key={label} style={{ padding: isMobile ? "16px 14px" : "24px 28px", borderRadius: "var(--radius-md-px)", background: "var(--surface-elevated)", boxShadow: "var(--shadow-card)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: isMobile ? 28 : 38, letterSpacing: "-.025em", color: "var(--text-primary)" }}>{n}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: isMobile ? 12 : 14, color: "var(--text-body)", marginTop: 4 }}>{label}</div>
          </div>
          )}
      </div>
    </div>
    </section>);

}

// ── 02 · BRAND ───────────────────────────────────────────────

function Brand() {
  const { isMobile, isTablet } = useResponsive();
  const moods = ["standard", "wave", "teacher", "excited", "thinking", "confused", "success", "determined", "sad", "scared", "inviting", "welcoming", "running", "satisfied"];
  const costumes = ["costume-01", "costume-02", "costume-03", "costume-04", "costume-05", "costume-06", "costume-07"];
  const values = ["Warm & encouraging", "Clear & trustworthy", "Joyful & achievable", "Human-centered"];

  return (
    <PageSection id="brand" eyebrow="02 · Brand" title="Brand" intro="LUCAS is built on warmth, encouragement, and clarity. A yellow signature on a calm neutral canvas — never clinical, always human.">

      <SubSection id="brand-overview" title="Overview" first>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16 }}>
          <div style={{ padding: "28px 32px", borderRadius: "var(--radius-lg-px)", background: "var(--color-brand-500)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, letterSpacing: "-.02em", color: "rgb(18,18,18)", marginBottom: 10 }}>NFM Lending</div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.65, color: "rgba(18,18,18,.7)", margin: 0 }}>Home Buyer Education — making the path to homeownership feel achievable for every buyer, regardless of experience level.</p>
          </div>
          <div style={{ padding: "28px 32px", borderRadius: "var(--radius-lg-px)", background: "var(--surface-elevated)", boxShadow: "var(--shadow-card)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, letterSpacing: "-.01em", color: "var(--text-primary)", marginBottom: 14 }}>Brand Values</div>
            {values.map((v) =>
            <div key={v} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-body)" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-brand-500)", flex: "none" }} />
                {v}
              </div>
            )}
          </div>
        </div>
      </SubSection>

      <SubSection id="brand-voice" title="Voice &amp; Tone Guide" intro="Lil Lucas is a friendly house-headed robot who helps future homeowners learn with confidence — turning complicated topics into simple, encouraging steps.">

        {/* Character snapshot */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 12, marginBottom: 36 }}>
          {[
          { label: "Core Belief", text: "Anybody can learn this stuff." },
          { label: "Core Mission", text: "Break big homeownership concepts into small, manageable steps." },
          { label: "Core Feeling", text: "\"You've got this. Let's do it together.\"" }].
          map(({ label, text }) =>
          <div key={label} style={{ padding: "20px 22px", borderRadius: "var(--radius-md-px)", background: "var(--fill-surface-yellow)", borderLeft: "3px solid var(--color-brand-500)" }}>
              <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-brand-700)", marginBottom: 8 }}>{label}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6, color: "var(--fill-text-yellow)", fontWeight: 600 }}>{text}</div>
            </div>
          )}
        </div>

        {/* Personality traits */}
        <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-gray-400)", marginBottom: 14 }}>Personality</div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12, marginBottom: 36 }}>
          {[
          { trait: "Supportive", desc: "Assumes the user is capable. Never talks down. Never shames.", says: "Every homebuyer starts somewhere.", not: "Many consumers lack financial literacy." },
          { trait: "Encouraging", desc: "Focuses on progress. Notices effort. Celebrates wins, big and small.", says: "Nice work! You're making great progress.", not: "Module complete." },
          { trait: "Playful", desc: "Warm and occasionally silly — but education always comes first.", says: "Let's unpack that.", not: "Mortgage puns every other sentence." },
          { trait: "Curious", desc: "Learns alongside the user. Invites exploration. Doesn't claim to know it all.", says: "Want to see how that works?", not: "Here is the definitive answer." }].
          map(({ trait, desc, says, not }) =>
          <div key={trait} style={{ padding: "20px 22px", borderRadius: "var(--radius-md-px)", background: "var(--surface-elevated)", boxShadow: "var(--shadow-card)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--text-primary)", marginBottom: 6 }}>{trait}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.6, color: "var(--text-body)", marginBottom: 14 }}>{desc}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, color: "var(--color-green-600)", background: "var(--fill-surface-green)", padding: "2px 8px", borderRadius: 999, whiteSpace: "nowrap", marginTop: 1 }}>Says</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontStyle: "italic", color: "var(--text-primary)", lineHeight: 1.5 }}>"{says}"</span>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, color: "var(--fill-text-red)", background: "var(--fill-surface-red)", padding: "2px 8px", borderRadius: 999, whiteSpace: "nowrap", marginTop: 1 }}>Not</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontStyle: "italic", color: "var(--text-body)", lineHeight: 1.5 }}>"{not}"</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* The Lucas Formula */}
        <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-gray-400)", marginBottom: 14 }}>The Lucas Formula</div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 12, marginBottom: 36 }}>
          {[
          { step: "1", label: "Encourage", sub: "Reduce anxiety", ex: "Buying a home can feel like a lot at first." },
          { step: "2", label: "Explain", sub: "Deliver the lesson", ex: "A credit score helps lenders understand how you've managed debt in the past." },
          { step: "3", label: "Celebrate", sub: "End with momentum", ex: "That's one more step toward your future home." }].
          map(({ step, label, sub, ex }) =>
          <div key={step} style={{ padding: "20px 22px", borderRadius: "var(--radius-md-px)", background: "var(--surface-elevated)", boxShadow: "var(--shadow-card)", display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--color-brand-500)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, color: "#121212", flex: "none" }}>{step}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--text-primary)" }}>{label}</div>
                  <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, color: "var(--text-body)" }}>{sub}</div>
                </div>
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.6, color: "var(--text-body)", fontStyle: "italic", borderLeft: "2px solid var(--color-brand-500)", paddingLeft: 12 }}>"{ex}"</div>
            </div>
          )}
        </div>

        {/* Reading level + emotional goals side by side */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12, marginBottom: 36 }}>
          <div style={{ padding: "22px 24px", borderRadius: "var(--radius-md-px)", background: "var(--surface-elevated)", boxShadow: "var(--shadow-card)" }}>
            <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-gray-400)", marginBottom: 14 }}>Reading Level</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, letterSpacing: "-.02em", marginBottom: 10, color: "rgb(0, 0, 0)" }}>Grade 5</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {["Short sentences", "Common words", "Everyday examples", "Active voice"].map((r) =>
              <div key={r} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-body)" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-brand-500)", flex: "none" }}></span>{r}
                </div>
              )}
            </div>
            <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--stroke-subtle)" }}>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 700, color: "var(--color-green-600)", marginBottom: 6 }}>PREFER</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontStyle: "italic", color: "var(--text-body)", marginBottom: 10 }}>"A budget helps you plan where your money goes."</div>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 700, color: "var(--fill-text-red)", marginBottom: 6 }}>NOT</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontStyle: "italic", color: "var(--text-body)" }}>"Budgeting facilitates improved financial resource allocation."</div>
            </div>
          </div>

          <div style={{ padding: "22px 24px", borderRadius: "var(--radius-md-px)", background: "var(--surface-elevated)", boxShadow: "var(--shadow-card)" }}>
            <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-gray-400)", marginBottom: 14 }}>Emotional Goals</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
              { feel: "Safe", note: "It's okay not to know this yet." },
              { feel: "Capable", note: "You can learn this." },
              { feel: "Supported", note: "You're not doing this alone." },
              { feel: "Motivated", note: "Keep going." }].
              map(({ feel, note }) =>
              <div key={feel} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 14px", borderRadius: "var(--radius-sm-px)", background: "var(--surface-recessed)" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "var(--text-primary)", minWidth: 76 }}>{feel}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontStyle: "italic", color: "var(--text-body)", lineHeight: 1.5 }}>{note}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mistakes + Never does */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12, marginBottom: 36 }}>
          <div style={{ padding: "22px 24px", borderRadius: "var(--radius-md-px)", background: "var(--surface-elevated)", boxShadow: "var(--shadow-card)" }}>
            <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-gray-400)", marginBottom: 6 }}>Mistakes Are Learning</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-body)", lineHeight: 1.6, marginBottom: 14 }}>Mistakes are normal. Expected. Opportunities to learn.</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 700, color: "var(--fill-text-red)", marginBottom: 4 }}>NEVER USE</div>
              {["Wrong", "Incorrect", "Failed"].map((w) =>
              <div key={w} style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--fill-text-red)", padding: "5px 12px", background: "var(--fill-surface-red)", borderRadius: 6 }}>✕ {w}</div>
              )}
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 700, color: "var(--color-green-700)", marginTop: 10, marginBottom: 4 }}>INSTEAD</div>
              {["Not quite.", "Good try.", "Let's look at that again.", "Almost!", "Here's a helpful hint."].map((w) =>
              <div key={w} style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-green-700)", padding: "5px 12px", background: "var(--fill-surface-green)", borderRadius: 6 }}>{w}</div>
              )}
            </div>
          </div>

          <div style={{ padding: "22px 24px", borderRadius: "var(--radius-md-px)", background: "var(--surface-elevated)", boxShadow: "var(--shadow-card)" }}>
            <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-gray-400)", marginBottom: 14 }}>What Lucas Never Does</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
              { rule: "He Never Shames", ex: "You should already know this." },
              { rule: "He Never Lectures", ex: "It is important to understand..." },
              { rule: "He Never Uses Jargon Without Explanation", ex: "Evaluate your DTI before underwriting." },
              { rule: "He Never Sounds Corporate", ex: "Thank you for completing this educational module." },
              { rule: "He Never Sounds Salesy", ex: "NFM Lending is the perfect choice for your mortgage needs." }].
              map(({ rule, ex }) =>
              <div key={rule} style={{ paddingBottom: 10, borderBottom: "1px solid var(--stroke-subtle)" }}>
                  <div style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 12, color: "var(--text-primary)", marginBottom: 3 }}>{rule}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontStyle: "italic", color: "var(--fill-text-red)" }}>✕ {ex}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Signature phrases */}
        <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-gray-400)", marginBottom: 14 }}>Signature Phrases</div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: 12, marginBottom: 36 }}>
          {[
          { group: "Greetings", phrases: ["Hi, I'm Lucas!", "Back to learn more? Great!", "Ready to get started?", "Let's jump in!", "Welcome back!"] },
          { group: "Encouragement", phrases: ["Nice work!", "You've got this.", "Keep it up.", "Great job.", "You're making progress."] },
          { group: "Guidance", phrases: ["Let's take a look.", "Here's how it works.", "Let's break it down.", "One step at a time."] },
          { group: "Celebration", phrases: ["Way to go!", "You did it!", "That's a big step.", "Another milestone unlocked!"] }].
          map(({ group, phrases }) =>
          <div key={group} style={{ padding: "18px 20px", borderRadius: "var(--radius-md-px)", background: "var(--surface-elevated)", boxShadow: "var(--shadow-card)" }}>
              <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-brand-600)", marginBottom: 10 }}>{group}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {phrases.map((p) => <div key={p} style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-body)", lineHeight: 1.5 }}>{p}</div>)}
              </div>
            </div>
          )}
        </div>

        {/* The Lucas Test */}
        <div style={{ padding: "24px 28px", borderRadius: "var(--radius-md-px)", background: "var(--fill-surface-yellow)", border: "1.5px solid var(--color-brand-400)" }}>
          <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-brand-700)", marginBottom: 12 }}>The Lucas Test</div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--fill-text-yellow)", marginBottom: 14 }}>Before publishing any Lucas copy, ask:</div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 8 }}>
            {[
            "Does this sound like a friend?",
            "Would a first-time homebuyer understand it?",
            "Does it reduce anxiety?",
            "Does it encourage progress?",
            "Could a fifth grader read it?",
            "Does it sound human?"].
            map((q) =>
            <div key={q} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontFamily: "var(--font-body)", fontSize: 13, color: "var(--fill-text-yellow)", lineHeight: 1.5 }}>
                <span style={{ fontWeight: 700, flex: "none" }}>✓</span>{q}
              </div>
            )}
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontStyle: "italic", color: "var(--color-brand-700)", marginTop: 14 }}>If the answer to any question is "no," rewrite it.</div>
        </div>

      </SubSection>

      <SubSection id="brand-logo" title="Logo &amp; Icon Styles" intro="The LUCAS wordmark adapts across light and dark surfaces. Use logo-light.svg on bright backgrounds, logo-dark.svg on dark.">
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16 }}>
          <div style={{ padding: isMobile ? "32px 24px" : "48px 40px", borderRadius: "var(--radius-lg-px)", background: "var(--color-gray-50)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-sm)" }}>
            <img src={LOGO("logo_light") || "assets/logo-light.svg"} alt="LUCAS light logo" style={{ height: "100px", width: "181px" }} />
          </div>
          <div style={{ padding: isMobile ? "32px 24px" : "48px 40px", borderRadius: "var(--radius-lg-px)", background: "var(--color-gray-900)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={LOGO("logo_dark") || "assets/logo-dark.svg"} alt="LUCAS dark logo" style={{ height: "100px" }} />
          </div>
        </div>
      </SubSection>

      <SubSection id="brand-lucas" title="Little Lucas Avatars" intro="The house-shaped robot copilot — the emotional anchor of the app. 14 base moods + 7 costume variants cover every scenario in the 10-module course.">
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-gray-400)", marginBottom: 16 }}>Base Moods</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 12 : 20 }}>
            {moods.map((m) => {
              const moodW = isMobile ? 56 : m === "welcoming" ? 200 : m === "running" ? 175 : 150;
              return <div key={m} style={{ textAlign: "center" }}>
                <Safe><LucasAvatar mood={m} size={isMobile ? 56 : 76} basePath={LUCAS} {...RES(m) ? { src: RES(m) } : {}} style={{ width: moodW, height: isMobile ? 56 : 200, objectFit: "cover" }} /></Safe>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 600, color: "var(--color-gray-500)", marginTop: 6, textTransform: "capitalize" }}>{m}</div>
              </div>;
            })}
          </div>
        </div>
        <div style={{ marginTop: 32 }}>
          <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-gray-400)", marginBottom: 16 }}>Costume Variants</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 12 : 20 }}>
            {costumes.map((c) =>
            <div key={c} style={{ textAlign: "center" }}>
                <Safe><LucasAvatar mood={c} size={isMobile ? 56 : 76} basePath={LUCAS} {...RES(c) ? { src: RES(c) } : {}} style={{ width: isMobile ? 56 : 150, height: isMobile ? 56 : 200, objectFit: "contain" }} /></Safe>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 600, color: "var(--color-gray-500)", marginTop: 6 }}>{c}</div>
              </div>
            )}
          </div>
        </div>
      </SubSection>
    </PageSection>);

}

// ── 03 · COLORS ──────────────────────────────────────────────

function SemanticGroup({ title, desc, tokens, cols = 2 }) {
  const { isMobile } = useResponsive();
  const effectiveCols = isMobile ? 1 : cols;
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 12, paddingBottom: 10, borderBottom: "2px solid var(--stroke-subtle)", marginBottom: 0 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, letterSpacing: "-.01em", color: "var(--text-primary)" }}>{title}</span>
        {desc && <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-body)" }}>{desc}</span>}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${effectiveCols}, 1fr)`, gap: "0 48px" }}>
        {tokens.map(([token, label, note]) =>
        <div key={token} style={{ display: "flex", alignItems: "center", gap: 12, padding: "9px 0", borderBottom: "1px solid var(--stroke-subtle)" }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: "var(" + token + ")", boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)", flex: "none" }} />
            <div style={{ minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap" }}>{label}</span>
                {note && <span style={{ fontFamily: "var(--font-ui)", fontSize: 10, color: "var(--color-gray-400)", whiteSpace: "nowrap" }}>{note}</span>}
              </div>
              <code style={{ fontFamily: "var(--font-ui)", fontSize: 10, color: "var(--color-gray-500)" }}>{token}</code>
            </div>
          </div>
        )}
      </div>
    </div>);

}

function Colors() {
  return (
    <PageSection id="colors" eyebrow="03 · Colors" title="Colors" intro="Brand yellow #FFC000 leads. Gray 50–900 builds every surface and text tone. Semantic tokens are mode-aware — they flip automatically between light and dark.">

      <ColorScale label="Brand Yellow" prefix="brand" steps={["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]} />
      <ColorScale label="Gray" prefix="gray" steps={["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]} />
      <ColorScale label="Green · Success" prefix="green" steps={["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]} />
      <ColorScale label="Red · Error" prefix="red" steps={["100", "200", "300", "400", "500", "600", "700", "800", "900"]} />
      <ColorScale label="Orange · Warning" prefix="orange" steps={["100", "200", "300", "400", "500", "600", "700", "800", "900"]} />

      <div style={{ marginTop: 56, marginBottom: 20 }}>
        <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-brand-600)", marginBottom: 6 }}>Semantic Tokens</div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.65, color: "var(--text-body)", margin: 0, maxWidth: 600 }}>All tokens below are mode-aware — values automatically switch between light and dark. Use these everywhere; never reference a primitive (e.g. <code style={{ fontFamily: "var(--font-ui)", fontSize: 12 }}>--color-gray-900</code>) directly in component code.</p>
      </div>

      <SemanticGroup title="Surfaces" desc="Background layers, cards, recessed wells" cols={2} tokens={[
      ["--surface-background", "Background", "Page canvas"],
      ["--surface-elevated", "Elevated", "Cards, panels, popovers"],
      ["--surface-primary", "Primary", "Primary content surface"],
      ["--surface-recessed", "Recessed", "Inset wells, disabled fills"],
      ["--surface-dark", "Dark", "Toasts, always-dark surfaces"],
      ["--surface-light", "Light", "Always-light surface"],
      ["--surface-secondary", "Secondary", "Inverted surface"],
      ["--fill-inactive", "Inactive", "Dots, segments, track fills"]]
      } />

      <SemanticGroup title="Text" desc="Type color for every role" cols={2} tokens={[
      ["--text-primary", "Primary", "Headings, strong body"],
      ["--text-body", "Body", "Default body copy"],
      ["--text-brand", "Brand", "Brand yellow text"],
      ["--text-dark", "Dark", "Always dark (both modes)"],
      ["--text-light", "Light", "Always light (both modes)"],
      ["--text-secondary", "Secondary", "Inverted / secondary text"],
      ["--text-on-action-primary", "On Action Primary", "Text on primary button"],
      ["--answer-letter-color", "Answer Letter", "Letter badge text in quiz"]]
      } />

      <SemanticGroup title="Text · Action States" desc="Text colors for interactive state feedback" cols={2} tokens={[
      ["--text-action-active", "Action / Active", "Focused & pressed"],
      ["--text-action-inactive", "Action / Inactive", "Placeholder, muted"],
      ["--text-action-disabled", "Action / Disabled", "Unavailable"],
      ["--text-action-error", "Action / Error", "Error labels & helpers"],
      ["--text-action-success", "Action / Success", "Success labels & helpers"]]
      } />

      <SemanticGroup title="Stroke" desc="Borders, dividers, focus rings" cols={2} tokens={[
      ["--stroke-subtle", "Subtle", "Hairline dividers, section lines"],
      ["--stroke-primary", "Primary", "Default card & input borders"],
      ["--stroke-action-default", "Action / Default", "Unfocused input ring"],
      ["--stroke-action-active", "Action / Active", "Focus ring"],
      ["--stroke-action-disabled", "Action / Disabled", "Disabled input ring"],
      ["--stroke-action-error", "Action / Error", "Error input & callout border"],
      ["--stroke-action-success", "Action / Success", "Success border"]]
      } />

      <SemanticGroup title="Action Surfaces · Primary" desc="Black in light mode, yellow in dark mode" cols={3} tokens={[
      ["--surface-action-primary-default", "Default", ""],
      ["--surface-action-primary-hover", "Hover", ""],
      ["--surface-action-primary-disabled", "Disabled", ""],
      ["--surface-action-primary-error", "Error", ""],
      ["--surface-action-primary-success", "Success", ""]]
      } />

      <SemanticGroup title="Action Surfaces · Secondary" desc="Outlined / ghost button backgrounds" cols={3} tokens={[
      ["--surface-action-secondary-default", "Default", ""],
      ["--surface-action-secondary-hover", "Hover", ""],
      ["--surface-action-secondary-disabled", "Disabled", ""]]
      } />

      <SemanticGroup title="Action Surfaces · Tertiary" desc="Yellow CTA button — consistent across modes" cols={3} tokens={[
      ["--surface-action-tertiary-default", "Default", ""],
      ["--surface-action-tertiary-hover", "Hover", ""],
      ["--surface-action-tertiary-disabled", "Disabled", ""]]
      } />

      <SemanticGroup title="Fill · Semantic Pairs" desc="Tinted surface + legible text color for each status" cols={2} tokens={[
      ["--fill-surface-yellow", "Surface / Yellow", "Info, tips, brand callouts"],
      ["--fill-text-yellow", "Text / Yellow", "Label on yellow surface"],
      ["--fill-surface-green", "Surface / Green", "Correct, success callouts"],
      ["--fill-text-green", "Text / Green", "Label on green surface"],
      ["--fill-surface-red", "Surface / Red", "Error, incorrect callouts"],
      ["--fill-text-red", "Text / Red", "Label on red surface"],
      ["--fill-surface-orange", "Surface / Orange", "Warning callouts"],
      ["--fill-text-orange", "Text / Orange", "Label on orange surface"]]
      } />

      <SemanticGroup title="Fill · Utility" desc="Direct fill values for icons, shapes, and decorative elements" cols={2} tokens={[
      ["--fill-primary", "Primary", "Main fill — dark in light, light in dark"],
      ["--fill-secondary", "Secondary", "Inverted fill"],
      ["--fill-dark", "Dark", "Always-dark fill"],
      ["--fill-light", "Light", "Always-light fill"],
      ["--fill-yellow", "Yellow", "Brand yellow fill"],
      ["--fill-green", "Green", "Success green fill"],
      ["--fill-red", "Red", "Error red fill"],
      ["--fill-orange", "Orange", "Warning orange fill"],
      ["--fill-gray-1", "Gray 1", "Muted icon / secondary fill"],
      ["--fill-gray-2", "Gray 2", "Dimmer icon fill"],
      ["--fill-surface-gray", "Surface / Gray", "Gray tinted surface"],
      ["--fill-semantic-primary", "Semantic Primary", "Semantic overlay fill"]]
      } />

      <SemanticGroup title="Component · Answer Row" desc="Letter badge colors in the quiz AnswerRow component" cols={2} tokens={[
      ["--answer-letter-bg", "Letter Badge BG", "Circle behind A / B / C / D"],
      ["--answer-letter-color", "Letter Badge Text", "Letter glyph on the badge"]]
      } />

    </PageSection>);

}

// ── 04 · TYPOGRAPHY ──────────────────────────────────────────

function Typography() {
  const { isMobile } = useResponsive();
  const scales = [
  { cat: "Display", items: [
    { name: "Display", fam: "var(--font-display)", w: 800, sz: 36, ls: "-0.02em", sample: "YOU DID IT" }]
  },
  { cat: "Headline", items: [
    { name: "Headline XL", fam: "var(--font-display)", w: 700, sz: 32, ls: "-0.015em", sample: "Let's get started" },
    { name: "Headline LG", fam: "var(--font-display)", w: 700, sz: 24, ls: "-0.015em", sample: "Create a Password" },
    { name: "Headline MD", fam: "var(--font-display)", w: 600, sz: 20, ls: "-0.01em", sample: "Understanding Your Budget" }]
  },
  { cat: "Body", items: [
    { name: "Body XL", fam: "var(--font-body)", w: 400, sz: 20, ls: "0", sample: "Finish all modules to unlock closing." },
    { name: "Body LG", fam: "var(--font-body)", w: 400, sz: 18, ls: "0", sample: "Your progress is saved automatically." },
    { name: "Body MD", fam: "var(--font-body)", w: 400, sz: 16, ls: "0", sample: "Your access code from the invite email." },
    { name: "Body SM", fam: "var(--font-body)", w: 400, sz: 14, ls: "0", sample: "NFM Lending · Home Buyer Education" }]
  },
  { cat: "Label", items: [
    { name: "Label MD", fam: "var(--font-display)", w: 600, sz: 14, ls: ".02em", sample: "MODULE 1 · 12 MIN" },
    { name: "Label SM — Inter", fam: "var(--font-ui)", w: 600, sz: 12, ls: ".04em", sample: "SCORE · 87%" },
    { name: "Label XS — Inter", fam: "var(--font-ui)", w: 600, sz: 10, ls: ".06em", sample: "LUC-8472-XK · ROBERT JOHNSON" }]
  }];

  return (
    <PageSection id="typography" eyebrow="04 · Typography" title="Typography" intro="Noto Sans carries the voice — display and headlines run heavy with tight negative tracking. Body stays at 400 for calm readability. Inter steps in only for codes and fine data.">
      {scales.map(({ cat, items }) =>
      <div key={cat} id={"type-" + cat.toLowerCase()} style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-gray-400)", paddingBottom: 8, borderBottom: "1px solid var(--stroke-subtle)", marginBottom: 0 }}>{cat}</div>
          {items.map(({ name, fam, w, sz, ls, sample }) =>
        <div key={name} style={{ display: "flex", alignItems: "baseline", gap: 24, padding: "14px 0", borderBottom: "1px solid var(--stroke-subtle)", borderWidth: "0px 0px 1px" }}>
              <div style={{ width: 160, flex: "none" }}>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, color: "var(--text-primary)" }}>{name}</div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, color: "var(--color-gray-500)", marginTop: 2 }}>{sz}px / {w}</div>
              </div>
              <span style={{ fontFamily: fam, fontWeight: w, fontSize: sz, letterSpacing: ls, color: "var(--text-primary)", lineHeight: 1.2 }}>{sample}</span>
            </div>
        )}
        </div>
      )}
    </PageSection>);

}

// ── 05 · SPACING ─────────────────────────────────────────────

function Spacing() {
  const scale = [
  { n: "2xs", px: 4 }, { n: "xs", px: 8 }, { n: "sm", px: 12 }, { n: "md", px: 16 },
  { n: "lg", px: 20 }, { n: "xl", px: 24 }, { n: "2xl", px: 32 }, { n: "3xl", px: 40 }, { n: "4xl", px: 60 }];

  return (
    <PageSection id="spacing" eyebrow="05 · Spacing" title="Spacing" intro="A 4-point grid underlies every layout. Scale from tight 2xs (4px) to generous 4xl (60px) — all intermediate steps are predictable multiples.">
      <div style={{ display: "flex", alignItems: "flex-end", gap: 28, flexWrap: "wrap" }}>
        {scale.map(({ n, px }) =>
        <div key={n} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, color: "var(--text-body)" }}>{px}px</div>
            <div style={{ width: 28, height: px, background: "var(--color-brand-500)", borderRadius: 2 }} />
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, color: "var(--text-primary)" }}>{n}</div>
          </div>
        )}
      </div>
      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
        {scale.map(({ n, px }) =>
        <div key={n} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: "var(--radius-xs-px)", background: "var(--surface-elevated)", boxShadow: "var(--shadow-xs)" }}>
            <div style={{ width: Math.min(px, 28), height: Math.min(px, 28), background: "var(--color-brand-400)", borderRadius: 2, flex: "none" }} />
            <div>
              <code style={{ fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, color: "var(--text-primary)" }}>--space-{n}</code>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, color: "var(--text-body)", marginTop: 1 }}>{px}px</div>
            </div>
          </div>
        )}
      </div>
    </PageSection>);

}

// ── 06 · RADIUS ──────────────────────────────────────────────

function Radius() {
  const scale = [
  { n: "2xs", px: 4, token: "--radius-2xs-px" }, { n: "xs", px: 8, token: "--radius-xs-px" },
  { n: "sm", px: 12, token: "--radius-sm-px" }, { n: "md", px: 16, token: "--radius-md-px" },
  { n: "lg", px: 20, token: "--radius-lg-px" }, { n: "xl", px: 24, token: "--radius-xl-px" },
  { n: "pill", px: 999, token: "--radius-pill" }];

  const mapping = [
  { comp: "Chips (tiny), Segmented control", r: "2xs — 4px" },
  { comp: "Inputs, Badges, Status pills", r: "xs — 8px" },
  { comp: "Buttons, Callouts, Answer rows", r: "sm — 12px" },
  { comp: "Cards", r: "md — 16px" },
  { comp: "Large cards, Bottom sheets", r: "lg — 20px" },
  { comp: "Hero / Banner cards", r: "xl — 24px" },
  { comp: "Filter chips, Avatars, Toggle pills", r: "pill — 999px" }];

  return (
    <PageSection id="radius" eyebrow="06 · Radius" title="Radius" intro="LUCAS is soft everywhere — nothing is squared. Corners range from a subtle 4px chip to a fully rounded pill.">
      <div style={{ display: "flex", flexWrap: "wrap", gap: 28, alignItems: "flex-end" }}>
        {scale.map(({ n, px, token }) =>
        <div key={n} style={{ textAlign: "center" }}>
            <div style={{ width: 80, height: 60, background: "var(--color-brand-500)", borderRadius: Math.min(px, 30) }} />
            <div style={{ marginTop: 10, fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 700, color: "var(--text-primary)" }}>{n}</div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, color: "var(--color-gray-500)" }}>{px >= 999 ? "999" : px}px</div>
          </div>
        )}
      </div>
      <div style={{ marginTop: 44 }}>
        <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-gray-400)", marginBottom: 14 }}>Component Mapping</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
          {mapping.map(({ comp, r }) =>
          <div key={r} style={{ padding: "12px 16px", borderRadius: "var(--radius-xs-px)", background: "var(--surface-elevated)", boxShadow: "var(--shadow-xs)" }}>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 700, color: "var(--text-primary)", marginBottom: 3 }}>{r}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-body)" }}>{comp}</div>
            </div>
          )}
        </div>
      </div>
    </PageSection>);

}

// ── 07 · EFFECTS ─────────────────────────────────────────────

function Effects() {
  const shadows = [
  { n: "xs", token: "--shadow-xs", desc: "Hairline lift — inputs, small pills" },
  { n: "sm", token: "--shadow-sm", desc: "Subtle card depth" },
  { n: "md", token: "--shadow-md", desc: "Elevated card — default" },
  { n: "lg", token: "--shadow-lg", desc: "Sheet / modal — high elevation" },
  { n: "card", token: "--shadow-card", desc: "Base card — used across all card surfaces" },
  { n: "success", token: "--shadow-success", desc: "Tinted green glow for correct states" },
  { n: "error", token: "--shadow-error", desc: "Tinted red glow for error / incorrect" }];

  return (
    <PageSection id="effects" eyebrow="07 · Effects" title="Effects" intro="Gentle, low-contrast shadows. Nothing harsh. Elevation communicates hierarchy without overwhelming the warm yellow brand.">
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {shadows.map(({ n, token, desc }) =>
        <div key={n} style={{ flex: "1 1 180px", padding: "24px 20px", borderRadius: "var(--radius-md-px)", background: "var(--surface-elevated)", boxShadow: "var(" + token + ")" }}>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>shadow-{n}</div>
            <code style={{ fontFamily: "var(--font-ui)", fontSize: 9, color: "var(--text-body)", display: "block", marginBottom: 8 }}>{token}</code>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-body)" }}>{desc}</div>
          </div>
        )}
      </div>
    </PageSection>);

}

// ── 08 · COMPONENTS ──────────────────────────────────────────

function Components() {
  const [chips, setChips] = React.useState({ all: true, unread: false, flagged: false });
  const [seg, setSeg] = React.useState("Week");
  const [tab, setTab] = React.useState("Modules");
  const [dot, setDot] = React.useState(1);
  const [check, setCheck] = React.useState(true);
  const [radio, setRadio] = React.useState("a");
  const [answer, setAns] = React.useState(null);
  const [toggleA, setToggleA] = React.useState(true);
  const [toggleB, setToggleB] = React.useState(false);
  const [sliderVal, setSliderVal] = React.useState(65000);
  const [searchQ, setSearchQ] = React.useState("");
  const [stepperIdx, setStepperIdx] = React.useState(1);
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const correct = 1;
  const answers = ["Length of credit history (15%)", "Payment history (35%)", "Credit utilization (30%)", "New credit inquiries (10%)"];

  return (
    <PageSection id="components" eyebrow="08 · Components" title="Components" intro="Every component on its own full-width row with all interactive states visible side by side. Click into live examples — they respond.">

      <CompRow id="comp-accordion" name="Accordion" tag="<Accordion/>" desc="Vertically stacked expandable sections. Click a header to expand/collapse. Default: single-open; set multiple for all-open.">
        <StateGroup label="Single-open (default)">
          <div style={{ width: "100%", maxWidth: 540 }}>
            <Safe><Accordion items={[
              { title: "What is a credit score?", content: "A three-digit number (300–850) that summarises your credit history. Lenders use it to assess risk before approving a mortgage." },
              { title: "How much do I need for a down payment?", content: "Conventional loans often require 3–20%. FHA loans allow as low as 3.5%. Your loan officer will walk you through the best option for your situation." },
              { title: "What is debt-to-income ratio?", content: "DTI compares your monthly debt payments to your gross monthly income. Most lenders prefer a DTI below 43%." }]
              } /></Safe>
          </div>
        </StateGroup>
        <StateGroup label="Multi-open">
          <div style={{ width: "100%", maxWidth: 540 }}>
            <Safe><Accordion multiple items={[
              { title: "Can I open both at once?", content: "Yes — in multi-open mode all sections can be expanded simultaneously." },
              { title: "When should I use accordion?", content: "Use for FAQ sections, glossary entries, or any long-form content that benefits from progressive disclosure." }]
              } /></Safe>
          </div>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-answerrow" name="AnswerRow" tag="<AnswerRow/>" desc="Quiz option that grades in place. Pick an answer to resolve correct / incorrect. Letter-coded A–D.">
        <StateGroup label="Interactive — try it">
          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", maxWidth: 520 }}>
            {answers.map((a, i) =>
            <Safe key={i}><AnswerRow letter={String.fromCharCode(65 + i)}
              state={answer === null ? "default" : i === correct ? "correct" : i === answer ? "incorrect" : "default"}
              onClick={() => setAns(i)}>{a}</AnswerRow></Safe>
            )}
            {answer !== null && <Safe><Button type="secondary" size="sm" onClick={() => setAns(null)}>Reset</Button></Safe>}
          </div>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-avatar" name="Avatar" tag="<Avatar/>" desc="User profile display — image or initials on brand yellow. Circle, rounded, or square shape. Optional status indicator dot.">
        <StateGroup label="Image vs initials">
          <Safe><Avatar name="Robert Johnson" size={48} /></Safe>
          <Safe><Avatar name="Maria Chen" size={48} /></Safe>
          <Safe><Avatar name="Tom" size={48} /></Safe>
          <Safe><Avatar src="https://i.pravatar.cc/96?img=12" name="Priya" size={48} /></Safe>
        </StateGroup>
        <StateGroup label="Sizes">
          <Safe><Avatar name="RJ" size={24} /></Safe>
          <Safe><Avatar name="RJ" size={32} /></Safe>
          <Safe><Avatar name="RJ" size={40} /></Safe>
          <Safe><Avatar name="RJ" size={56} /></Safe>
          <Safe><Avatar name="RJ" size={72} /></Safe>
        </StateGroup>
        <StateGroup label="Shapes">
          <Safe><Avatar name="RJ" size={48} shape="circle" /></Safe>
          <Safe><Avatar name="RJ" size={48} shape="rounded" /></Safe>
          <Safe><Avatar name="RJ" size={48} shape="square" /></Safe>
        </StateGroup>
        <StateGroup label="Status indicators">
          <Safe><Avatar name="RJ" size={44} indicator="online" /></Safe>
          <Safe><Avatar name="RJ" size={44} indicator="away" /></Safe>
          <Safe><Avatar name="RJ" size={44} indicator="busy" /></Safe>
          <Safe><Avatar name="RJ" size={44} indicator="offline" /></Safe>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-bottomsheet" name="BottomSheet" tag="<BottomSheet/>" desc="iOS-style modal sheet — rises from the bottom with a blurred backdrop. Tap the button to open it live. Use contained for demos.">
        <StateGroup label="Live demo">
          <div style={{ position: "relative", width: "100%", maxWidth: 420, height: 320, borderRadius: "var(--radius-lg-px)", background: "var(--surface-recessed)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Safe><Button type="secondary" onClick={() => setSheetOpen(true)}>Open Bottom Sheet</Button></Safe>
            <Safe><BottomSheet open={sheetOpen} onClose={() => setSheetOpen(false)} title="Choose a Module" contained>
              {["Understanding Your Budget", "Your Credit Score", "Down Payment Basics"].map((m, i) =>
                <div key={i} onClick={() => setSheetOpen(false)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: i < 2 ? "1px solid var(--stroke-subtle)" : "none", cursor: "pointer" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "var(--radius-xs-px)", background: "var(--fill-surface-yellow)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className="material-symbols-rounded" style={{ fontSize: 18, color: "var(--fill-text-yellow)" }}>menu_book</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-primary)", flex: 1 }}>{m}</span>
                  <span className="material-symbols-rounded" style={{ fontSize: 18, color: "var(--color-gray-400)" }}>chevron_right</span>
                </div>
                )}
            </BottomSheet></Safe>
          </div>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-button" name="Button" tag="<Button/>" desc="Primary tap target. Primary (black in light / yellow in dark), secondary (outlined), tertiary (yellow). Press any to feel the active scale.">
        <StateGroup label="Types">
          <Safe><Button type="primary">Access My Education</Button></Safe>
          <Safe><Button type="secondary">Maybe Later</Button></Safe>
          <Safe><Button type="tertiary">Start Module</Button></Safe>
        </StateGroup>
        <StateGroup label="Sizes">
          <Safe><Button size="lg">Large</Button></Safe>
          <Safe><Button size="md">Medium</Button></Safe>
          <Safe><Button size="sm">Small</Button></Safe>
        </StateGroup>
        <StateGroup label="Disabled">
          <Safe><Button disabled>Primary</Button></Safe>
          <Safe><Button type="secondary" disabled>Secondary</Button></Safe>
          <Safe><Button type="tertiary" disabled>Tertiary</Button></Safe>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-callout" name="Callout" tag="<Callout/>" desc="Inline feedback — the heart of the 'never wrong, always reframe' voice. Even incorrect stays encouraging.">
        <StateGroup label="Tones">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: 16, width: "100%" }}>
            <Safe><Callout status="correct" title="You've got it!">Exactly right — paying on time is the single most powerful action.</Callout></Safe>
            <Safe><Callout status="incorrect" title="Not Quite — 2 Attempts Remaining">Payment history (35%) is the biggest factor.</Callout></Safe>
            <Safe><Callout status="warning" title="Heads up">Your utilization is creeping above 30%.</Callout></Safe>
            <Safe><Callout status="info" title="Little tip from Lucas">Most lenders like to see utilization under 30%.</Callout></Safe>
          </div>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-card" name="Card" tag="<Card/>" desc="Base surface in four tones: default for content, recessed for inset areas, brand for CTAs, dark for celebration.">
        <StateGroup label="Tones">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr))", gap: 14, width: "100%" }}>
            <Safe><Card><div style={{ padding: "16px 18px", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-primary)" }}>Default</div></Card></Safe>
            <Safe><Card tone="recessed"><div style={{ padding: "16px 18px", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-primary)" }}>Recessed</div></Card></Safe>
            <Safe><Card tone="brand"><div style={{ padding: "16px 18px", fontFamily: "var(--font-body)", fontSize: 14, color: "rgb(18,18,18)" }}>Brand</div></Card></Safe>
            <Safe><Card tone="dark"><div style={{ padding: "16px 18px", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--color-gray-50)" }}>Dark / Celebration</div></Card></Safe>
          </div>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-checkbox" name="Checkbox" tag="<Checkbox/>" desc="Rounded-square checkbox. Toggle to see the active fill. Supports disabled and error states.">
        <StateGroup label="States">
          <Safe><Checkbox checked={check} label="I agree to the terms" onChange={setCheck} /></Safe>
          <Safe><Checkbox checked={false} label="Email me updates" onChange={() => {}} /></Safe>
          <Safe><Checkbox checked disabled label="Disabled checked" /></Safe>
          <Safe><Checkbox checked={false} disabled label="Disabled unchecked" /></Safe>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-chip" name="Chip" tag="<Chip/>" desc="Selectable filter pill — outlined off, yellow on. Supports leading icon and count badge. Click to toggle.">
        <StateGroup label="Interactive">
          <Safe><Chip selected={chips.all} count={2} leadingIcon="mail" onClick={() => setChips((c) => ({ ...c, all: !c.all }))}>All Mail</Chip></Safe>
          <Safe><Chip selected={chips.unread} onClick={() => setChips((c) => ({ ...c, unread: !c.unread }))}>Unread</Chip></Safe>
          <Safe><Chip selected={chips.flagged} leadingIcon="flag" onClick={() => setChips((c) => ({ ...c, flagged: !c.flagged }))}>Flagged</Chip></Safe>
        </StateGroup>
        <StateGroup label="Static states">
          <Safe><Chip selected={true}>Selected</Chip></Safe>
          <Safe><Chip selected={false}>Default</Chip></Safe>
          <Safe><Chip selected={false} leadingIcon="star">With icon</Chip></Safe>
          <Safe><Chip selected={true} count={5}>With count</Chip></Safe>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-emptystate" name="EmptyState" tag="<EmptyState/>" desc="Zero-data placeholder — icon badge, title, body copy, and optional action. Fills any container.">
        <StateGroup label="Scenarios">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 16, width: "100%" }}>
            <div style={{ borderRadius: "var(--radius-md-px)", background: "var(--surface-elevated)", boxShadow: "var(--shadow-card)", overflow: "hidden" }}>
              <Safe><EmptyState icon="inbox" title="No messages yet" body="Your loan officer will reach out here once you complete the course." /></Safe>
            </div>
            <div style={{ borderRadius: "var(--radius-md-px)", background: "var(--surface-elevated)", boxShadow: "var(--shadow-card)", overflow: "hidden" }}>
              <Safe><EmptyState icon="school" title="No modules started" body="Begin Module 1 to start tracking your progress." action={<Safe><Button type="tertiary" size="sm">Start Learning</Button></Safe>} /></Safe>
            </div>
            <div style={{ borderRadius: "var(--radius-md-px)", background: "var(--surface-elevated)", boxShadow: "var(--shadow-card)", overflow: "hidden" }}>
              <Safe><EmptyState icon="search_off" title="No results found" body="Try adjusting your search or browse all modules." /></Safe>
            </div>
          </div>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-headernav" name="HeaderNav" tag="<HeaderNav/>" desc="App top bar: back chevron, screen title, and optional trailing action. Supports default and brand tones.">
        <StateGroup label="Default tone">
          <div style={{ width: "100%", maxWidth: 420, borderRadius: "var(--radius-md-px)", overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
            <Safe><HeaderNav title="Your Credit Score" onBack={() => {}} /></Safe>
          </div>
        </StateGroup>
        <StateGroup label="Brand tone">
          <div style={{ width: "100%", maxWidth: 420, borderRadius: "var(--radius-md-px)", overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
            <Safe><HeaderNav title="Module Complete" tone="brand" /></Safe>
          </div>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-iconbutton" name="IconButton" tag="<IconButton/>" desc="Round, icon-only control for headers and toolbars. Material Symbols Rounded glyphs. 44px minimum tap target.">
        <StateGroup label="Types">
          <Safe><IconButton icon="arrow_back" type="primary" /></Safe>
          <Safe><IconButton icon="close" type="secondary" /></Safe>
          <Safe><IconButton icon="add" type="tertiary" /></Safe>
          <Safe><IconButton icon="bookmark" type="ghost" /></Safe>
          <Safe><IconButton icon="share" type="ghost" /></Safe>
          <Safe><IconButton icon="help" type="ghost" /></Safe>
        </StateGroup>
        <StateGroup label="Disabled">
          <Safe><IconButton icon="lock" disabled /></Safe>
          <Safe><IconButton icon="edit" type="secondary" disabled /></Safe>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-input" name="Input" tag="<Input/>" desc="Labelled field. Hairline border darkens on focus, turns red on error. Supports dropdown and multiline variants.">
        <StateGroup label="States">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 14, width: "100%" }}>
            <Safe><Input label="Default" placeholder="Enter password" /></Safe>
            <Safe><Input label="Active" value="hunter2" state="active" onChange={() => {}} /></Safe>
            <Safe><Input label="Error" value="abc" state="error" helperText="Must be 8+ characters" onChange={() => {}} /></Safe>
            <Safe><Input label="Disabled" placeholder="Unavailable" state="disabled" /></Safe>
            <Safe><Input label="Dropdown" placeholder="Select a state" dropdown /></Safe>
            <Safe><Input label="Message" placeholder="How can we help?" multiline /></Safe>
          </div>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-mobilefooter" name="MobileFooter" tag="<MobileFooter/>" desc="Sticky bottom action bar holding 1–2 stacked buttons. Provides the primary CTA on every content screen.">
        <StateGroup label="With primary action">
          <div style={{ width: "100%", maxWidth: 420, borderRadius: "var(--radius-md-px)", overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
            <Safe><MobileFooter primary={<Button type="primary" style={{ width: "100%" }}>Continue to Module 3</Button>} /></Safe>
          </div>
        </StateGroup>
        <StateGroup label="With primary + secondary">
          <div style={{ width: "100%", maxWidth: 420, borderRadius: "var(--radius-md-px)", overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
            <Safe><MobileFooter
                primary={<Button type="primary" style={{ width: "100%" }}>Submit Quiz</Button>}
                secondary={<Button type="secondary" style={{ width: "100%" }}>Review Answers</Button>} />
            </Safe>
          </div>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-moduleitem" name="ModuleItem" tag="<ModuleItem/>" desc="A row in the 10-module HBE list: green check (completed), yellow play (active), or gray lock. Trailing badge shows status.">
        <StateGroup label="All states">
          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", maxWidth: 500 }}>
            <Safe><ModuleItem status="completed" title="Understanding Your Budget" meta="Module 1 · 12 Min" badge={<StatusBadge status="success">Done</StatusBadge>} /></Safe>
            <Safe><ModuleItem status="active" title="Your Credit Score" meta="Module 2 · 12 Min" badge={<StatusBadge status="solidBrand">Start</StatusBadge>} /></Safe>
            <Safe><ModuleItem status="locked" title="Debt-to-Income Ratio" meta="Module 5 · 10 Min" badge={<StatusBadge status="neutral" icon="lock">Locked</StatusBadge>} /></Safe>
            <Safe><ModuleItem status="locked" title="Closing Day" meta="Module 10 · 15 Min" badge={<StatusBadge status="neutral" icon="lock">Locked</StatusBadge>} /></Safe>
          </div>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-paginationdots" name="PaginationDots" tag="<PaginationDots/>" desc="Onboarding position indicator. Active dot stretches into a yellow pill. Click any dot to jump.">
        <StateGroup label="Interactive">
          <Safe><PaginationDots count={5} active={dot} onDotClick={setDot} /></Safe>
        </StateGroup>
        <StateGroup label="Counts">
          <Safe><PaginationDots count={3} active={0} /></Safe>
          <Safe><PaginationDots count={4} active={2} /></Safe>
          <Safe><PaginationDots count={6} active={4} /></Safe>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-progressbar" name="ProgressBar" tag="<ProgressBar/>" desc="Segmented or continuous indicator for module and quiz completion tracking.">
        <StateGroup label="Segmented — 2 of 5">
          <div style={{ width: "100%", maxWidth: 440 }}><Safe><ProgressBar value={2} total={5} /></Safe></div>
        </StateGroup>
        <StateGroup label="Continuous — 70%">
          <div style={{ width: "100%", maxWidth: 440 }}><Safe><ProgressBar value={70} total={100} segmented={false} /></Safe></div>
        </StateGroup>
        <StateGroup label="Fill progression">
          <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%", maxWidth: 440 }}>
            <Safe><ProgressBar value={0} total={5} /></Safe>
            <Safe><ProgressBar value={2} total={5} /></Safe>
            <Safe><ProgressBar value={4} total={5} /></Safe>
            <Safe><ProgressBar value={5} total={5} /></Safe>
          </div>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-radiobutton" name="RadioButton" tag="<RadioButton/>" desc="Ringed radio for single-select quiz and preference options. Interactive — click to select.">
        <StateGroup label="Interactive">
          <Safe><RadioButton checked={radio === "a"} label="Payment history (35%)" onChange={() => setRadio("a")} /></Safe>
          <Safe><RadioButton checked={radio === "b"} label="Credit utilization (30%)" onChange={() => setRadio("b")} /></Safe>
          <Safe><RadioButton checked={radio === "c"} label="Credit history length (15%)" onChange={() => setRadio("c")} /></Safe>
          <Safe><RadioButton error label="Errored option" onChange={() => {}} /></Safe>
          <Safe><RadioButton checked disabled label="Disabled (selected)" onChange={() => {}} /></Safe>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-searchbar" name="SearchBar" tag="<SearchBar/>" desc="Pill-shaped search input with leading icon, yellow focus ring, and clear button. Fully controlled.">
        <StateGroup label="Interactive — try typing">
          <div style={{ width: "100%", maxWidth: 400 }}>
            <Safe><SearchBar value={searchQ} onChange={setSearchQ} placeholder="Search modules, topics…" /></Safe>
          </div>
        </StateGroup>
        <StateGroup label="States">
          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", maxWidth: 400 }}>
            <Safe><SearchBar value="" placeholder="Default (empty)" onChange={() => {}} /></Safe>
            <Safe><SearchBar value="Credit score" placeholder="With value" onChange={() => {}} /></Safe>
            <Safe><SearchBar value="" placeholder="Disabled" disabled /></Safe>
          </div>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-skeleton" name="Skeleton" tag="<Skeleton/>" desc="Shimmer loading placeholder — size to match the real content it stands in for. Chain multiples for a full-page loading state.">
        <StateGroup label="Content placeholders">
          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", maxWidth: 480 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <Safe><Skeleton circle height={44} /></Safe>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                <Safe><Skeleton height={14} width="60%" /></Safe>
                <Safe><Skeleton height={11} width="40%" /></Safe>
              </div>
            </div>
            <Safe><Skeleton height={120} borderRadius="var(--radius-md-px)" /></Safe>
            <Safe><Skeleton height={14} /></Safe>
            <Safe><Skeleton height={14} width="85%" /></Safe>
            <Safe><Skeleton height={14} width="70%" /></Safe>
          </div>
        </StateGroup>
        <StateGroup label="Shapes">
          <Safe><Skeleton circle height={48} /></Safe>
          <Safe><Skeleton height={48} width={120} borderRadius="var(--radius-xs-px)" /></Safe>
          <Safe><Skeleton height={48} width={180} borderRadius="var(--radius-md-px)" /></Safe>
          <Safe><Skeleton height={48} width={240} borderRadius="var(--radius-pill)" /></Safe>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-segmented" name="SegmentedControl" tag="<SegmentedControl/>" desc="One-of-N selector; the active segment fills yellow. Fully interactive.">
        <StateGroup label="3 options">
          <Safe><SegmentedControl options={["Day", "Week", "Month"]} value={seg} onChange={setSeg} /></Safe>
        </StateGroup>
        <StateGroup label="2 options">
          <Safe><SegmentedControl options={["Overview", "Details"]} value="Overview" onChange={() => {}} /></Safe>
        </StateGroup>
        <StateGroup label="4 options">
          <Safe><SegmentedControl options={["All", "Active", "Done", "Locked"]} value="Active" onChange={() => {}} /></Safe>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-slider" name="Slider" tag="<Slider/>" desc="Range input with branded track and knob. Use format for currency or percentage display. Fully interactive.">
        <StateGroup label="Budget slider — drag it">
          <div style={{ width: "100%", maxWidth: 440 }}>
            <Safe><Slider value={sliderVal} min={100000} max={750000} step={5000} label="Home Price Target" format={(v) => "$" + v.toLocaleString()} onChange={setSliderVal} /></Safe>
          </div>
        </StateGroup>
        <StateGroup label="Percentage">
          <div style={{ width: "100%", maxWidth: 440 }}>
            <Safe><Slider value={30} min={0} max={100} label="Credit Utilization" format={(v) => v + "%"} onChange={() => {}} /></Safe>
          </div>
        </StateGroup>
        <StateGroup label="Disabled">
          <div style={{ width: "100%", maxWidth: 440 }}>
            <Safe><Slider value={40} min={0} max={100} label="Locked" disabled /></Safe>
          </div>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-stattile" name="StatTile" tag="<StatRow/>" desc="A horizontal row of stat tiles split by hairline dividers. Used on the completion scoreboard.">
        <StateGroup label="Results scoreboard">
          <div style={{ width: "100%", maxWidth: 460, background: "var(--surface-elevated)", borderRadius: "var(--radius-md-px)", padding: "20px 24px", boxShadow: "var(--shadow-card)" }}>
            <Safe><StatRow items={[{ label: "Total Time", value: "58 Min" }, { label: "Avg Score", value: "87%" }, { label: "Modules", value: "5/5" }]} /></Safe>
          </div>
        </StateGroup>
        <StateGroup label="Extended stats">
          <div style={{ width: "100%", maxWidth: 540, background: "var(--surface-elevated)", borderRadius: "var(--radius-md-px)", padding: "20px 24px", boxShadow: "var(--shadow-card)" }}>
            <Safe><StatRow items={[{ label: "Days Active", value: "12" }, { label: "Avg Score", value: "92%" }, { label: "Correct", value: "47/52" }, { label: "Status", value: "Done" }]} /></Safe>
          </div>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-statusbadge" name="StatusBadge" tag="<StatusBadge/>" desc="Compact pill labeling module, answer or item state across all seven semantic tones.">
        <StateGroup label="All tones">
          <Safe><StatusBadge status="success">Done</StatusBadge></Safe>
          <Safe><StatusBadge status="solidBrand">Start</StatusBadge></Safe>
          <Safe><StatusBadge status="error">2 Attempts</StatusBadge></Safe>
          <Safe><StatusBadge status="warning">In Review</StatusBadge></Safe>
          <Safe><StatusBadge status="brand">New</StatusBadge></Safe>
          <Safe><StatusBadge status="neutral" icon="lock">Locked</StatusBadge></Safe>
          <Safe><StatusBadge status="solid">Beta</StatusBadge></Safe>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-stepper" name="Stepper" tag="<Stepper/>" desc="Horizontal step-progress indicator. Completed steps show a green check, active step uses primary action color. Click the buttons to advance.">
        <StateGroup label="Interactive">
          <div style={{ display: "flex", flexDirection: "column", gap: 20, width: "100%", maxWidth: 560 }}>
            <Safe><Stepper steps={["Create Account", "Verify Email", "Set Password", "Get Started"]} current={stepperIdx} /></Safe>
            <div style={{ display: "flex", gap: 10 }}>
              <Safe><Button type="secondary" size="sm" onClick={() => setStepperIdx((i) => Math.max(0, i - 1))}>Back</Button></Safe>
              <Safe><Button type="tertiary" size="sm" onClick={() => setStepperIdx((i) => Math.min(4, i + 1))}>Next</Button></Safe>
            </div>
          </div>
        </StateGroup>
        <StateGroup label="States at a glance">
          <div style={{ display: "flex", flexDirection: "column", gap: 20, width: "100%", maxWidth: 400 }}>
            <Safe><Stepper steps={["Step 1", "Step 2", "Step 3"]} current={0} /></Safe>
            <Safe><Stepper steps={["Step 1", "Step 2", "Step 3"]} current={1} /></Safe>
            <Safe><Stepper steps={["Step 1", "Step 2", "Step 3"]} current={2} /></Safe>
            <Safe><Stepper steps={["Step 1", "Step 2", "Step 3"]} current={3} /></Safe>
          </div>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-table" name="Table" tag="<Table/>" desc="Data table with sticky header, optional zebra striping, and full token theming. Columns can be strings or { label, key, align } objects.">
        <StateGroup label="Default">
          <Safe><Table
              columns={[{ label: "Module", key: "module" }, { label: "Status", key: "status", align: "center" }, { label: "Score", key: "score", align: "center" }, { label: "Time", key: "time", align: "right" }]}
              rows={[
              { module: "Understanding Your Budget", status: "✅ Done", score: "92%", time: "11 min" },
              { module: "Your Credit Score", status: "✅ Done", score: "85%", time: "13 min" },
              { module: "Saving for a Down Payment", status: "✅ Done", score: "88%", time: "10 min" },
              { module: "Getting Pre-Approved", status: "⏳ Active", score: "—", time: "—" },
              { module: "Closing Day", status: "🔒 Locked", score: "—", time: "—" }]
              } />
          </Safe>
        </StateGroup>
        <StateGroup label="Striped">
          <Safe><Table
              striped
              columns={["Token", "Light Mode", "Dark Mode"]}
              rows={[
              { Token: "--surface-background", "Light Mode": "#FEFEFE", "Dark Mode": "#121212" },
              { Token: "--surface-elevated", "Light Mode": "#FFFFFF", "Dark Mode": "#1E1E1E" },
              { Token: "--text-primary", "Light Mode": "#121212", "Dark Mode": "#F5F5F5" },
              { Token: "--color-brand-500", "Light Mode": "#FFC000", "Dark Mode": "#FFC000" }]
              } />
          </Safe>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-tabs" name="Tabs" tag="<Tabs/>" desc="Underline tab bar for in-screen sections. Active tab is bold with a 2.5px underline. Fully interactive.">
        <StateGroup label="Interactive">
          <div style={{ width: "100%", maxWidth: 500 }}>
            <Safe><Tabs tabs={["Overview", "Modules", "Resources", "Progress"]} value={tab} onChange={setTab} /></Safe>
          </div>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-toast" name="Toast" tag="<Toast/>" desc="Transient dark notification with semantic accent glyph and optional dismiss. Auto-dismisses in production.">
        <StateGroup label="Variants">
          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", maxWidth: 480 }}>
            <Safe><Toast status="success" title="Module complete!" onDismiss={() => {}}>You unlocked a new room for Little Lucas.</Toast></Safe>
            <Safe><Toast status="error" title="Connection lost" onDismiss={() => {}}>We'll save your progress and retry.</Toast></Safe>
          </div>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-toggle" name="Toggle" tag="<Toggle/>" desc="Binary on/off switch. ON fills brand yellow with a dark knob. OFF is the inactive fill. Supports sm / md / lg sizes.">
        <StateGroup label="Interactive">
          <Safe><Toggle checked={toggleA} onChange={setToggleA} label="Email notifications" /></Safe>
          <Safe><Toggle checked={toggleB} onChange={setToggleB} label="Push alerts" /></Safe>
          <Safe><Toggle checked={true} label="Dark mode" /></Safe>
        </StateGroup>
        <StateGroup label="Sizes">
          <Safe><Toggle checked={true} size="sm" label="Small" /></Safe>
          <Safe><Toggle checked={true} size="md" label="Medium" /></Safe>
          <Safe><Toggle checked={true} size="lg" label="Large" /></Safe>
        </StateGroup>
        <StateGroup label="States">
          <Safe><Toggle checked={true} label="On" /></Safe>
          <Safe><Toggle checked={false} label="Off" /></Safe>
          <Safe><Toggle checked={true} disabled label="Disabled on" /></Safe>
          <Safe><Toggle checked={false} disabled label="Disabled off" /></Safe>
          <Safe><Toggle checked={true} labelPosition="left" label="Label left" /></Safe>
        </StateGroup>
      </CompRow>

      <CompRow id="comp-tooltip" name="Tooltip" tag="<Tooltip/>" desc="Dark hover bubble. Wraps any trigger element — hover the icon buttons to reveal. Supports top, right, bottom, left placement.">
        <StateGroup label="Placements — hover each icon">
          <Safe><Tooltip label="Why this matters" placement="right"><IconButton icon="help" type="secondary" /></Tooltip></Safe>
          <Safe><Tooltip label="Save your progress" placement="top"><IconButton icon="bookmark" type="ghost" /></Tooltip></Safe>
          <Safe><Tooltip label="Share this module" placement="bottom"><IconButton icon="share" type="ghost" /></Tooltip></Safe>
          <Safe><Tooltip label="Go back" placement="left"><IconButton icon="arrow_back" type="ghost" /></Tooltip></Safe>
        </StateGroup>
      </CompRow>

    </PageSection>);

}

// ── 09 · APP ─────────────────────────────────────────────────

function App() {
  const { isMobile } = useResponsive();
  return (
    <PageSection id="app" eyebrow="09 · App" title="App" intro="Application-level screens, flows, and layout patterns for the NFM Lending Home Buyer Education experience.">
      <div style={{ padding: "32px 0", borderTop: "1px solid var(--stroke-subtle)" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "minmax(0,1fr) auto", gap: isMobile ? 24 : 48, alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-gray-400)", marginBottom: 12 }}>Live Prototype</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-.01em", color: "var(--text-primary)", margin: "0 0 10px" }}>Full App Chrome</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.65, color: "var(--text-body)", margin: "0 0 18px", maxWidth: 420 }}>The complete Home Buyer Education flow — onboarding, modules, quiz, and certificate — running live in a 390px device frame. Tap through it right here.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
              {["Onboarding", "Modules", "Quiz", "Results"].map((s) =>
              <span key={s} style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 11, padding: "5px 11px", borderRadius: "var(--radius-pill-px, 999px)", background: "var(--fill-surface-yellow)", color: "var(--fill-text-yellow)" }}>{s}</span>
              )}
            </div>
            <a href="ui_kits/app/index.html" target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 13, color: "var(--text-body)", textDecoration: "none" }}>
              Open full-screen
              <span className="material-symbols-rounded" style={{ fontSize: 16 }}>open_in_new</span>
            </a>
          </div>
          <div style={{ flex: "none", display: "flex", justifyContent: "center" }}>
            <iframe
              src={typeof window !== "undefined" && window.__resources && window.__resources.appFrame || "ui_kits/app/index.html"}
              title="LUCAS Home Buyer Education — live prototype"
              style={{
                width: isMobile ? "100%" : 470,
                maxWidth: 470,
                height: 880,
                border: "none",
                borderRadius: "var(--radius-lg-px)",
                background: "var(--surface-recessed)",
                boxShadow: "var(--shadow-card)"
              }} />
            
          </div>
        </div>
      </div>
    </PageSection>);

}

// ── 10 · LEARNINGS ───────────────────────────────────────────

function Learnings() {
  const items = [
  { title: "Noto Sans over other humanist fonts", body: "Noto Sans supports the full Unicode range — important for multi-lingual content in future markets. Combined with Inter's technical precision for data strings, the pairing balances warmth and function." },
  { title: "Yellow as primary action in dark mode", body: "In light mode the primary action uses near-black (#121212) to ground the experience. In dark mode, shifting to brand yellow maintains WCAG contrast while reinforcing the brand identity at every touch point." },
  { title: "4-point spacing grid rationale", body: "The 4pt grid aligns with iOS Human Interface Guidelines and Material Design baselines, ensuring components integrate cleanly in both React Native and web contexts without pixel-rounding artifacts." },
  { title: "'Never wrong, always reframe' principle", body: "User testing revealed anxiety spikes on standard 'Incorrect' feedback. LUCAS uses encouraging language with the correct answer explanation to maintain forward momentum — no shame, always teachable." },
  { title: "Soft radius everywhere", body: "Sharp corners tested as clinical in a financial context. All interactive elements use rounded corners (minimum 8px) to reinforce approachability. The pill radius (999px) is reserved for toggles, chips, and badges." },
  { title: "Little Lucas mood system", body: "14 base moods + 7 costume variants were art-directed to cover every scenario in a 10-module course: success, struggle, instruction, celebration, curiosity, and transitions — each mapped to a specific trigger in app logic." }];

  return (
    <PageSection id="learnings" eyebrow="10 · Learnings" title="Learnings" intro="Documented design decisions, tested hypotheses, and rationale behind key choices in the LUCAS system.">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px,1fr))", gap: 20 }}>
        {items.map(({ title, body }) =>
        <div key={title} style={{ padding: "24px 28px", borderRadius: "var(--radius-lg-px)", background: "var(--surface-elevated)", boxShadow: "var(--shadow-card)", borderLeft: "3px solid var(--color-brand-500)" }}>
            <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, letterSpacing: "-.01em", color: "var(--text-primary)", margin: "0 0 10px" }}>{title}</h4>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.7, color: "var(--text-body)", margin: 0 }}>{body}</p>
          </div>
        )}
      </div>
    </PageSection>);

}

// ── root ──────────────────────────────────────────────────────

function Showcase() {
  return (
    <ResponsiveProvider>
      <Introduction />
      <Brand />
      <Colors />
      <Typography />
      <Spacing />
      <Radius />
      <Effects />
      <Components />
      <App />
      <Learnings />
    </ResponsiveProvider>);

}

window.Showcase = Showcase;