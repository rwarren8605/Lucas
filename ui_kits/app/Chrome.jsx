/* global React */
// Shared iOS status bar + phone chrome bits for the LUCAS app UI kit.
const DS = window.LUCASDesignSystem_675758;

function StatusBar({ dark = false, tone }) {
  const color = dark ? "#FEFEFE" : "#121212";
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "12px 22px 4px", height: 44, boxSizing: "border-box",
      background: tone || "transparent", color,
      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15,
    }}>
      <span>9:41</span>
      <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
        <span className="material-symbols-rounded" style={{ fontSize: 17 }}>signal_cellular_alt</span>
        <span className="material-symbols-rounded" style={{ fontSize: 17 }}>wifi</span>
        <span className="material-symbols-rounded" style={{ fontSize: 19 }}>battery_full</span>
      </span>
    </div>
  );
}

function HomeIndicator({ dark = false }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "8px 0 10px" }}>
      <div style={{ width: 134, height: 5, borderRadius: 3, background: dark ? "#FEFEFE" : "#121212", opacity: 0.9 }} />
    </div>
  );
}

window.StatusBar = StatusBar;
window.HomeIndicator = HomeIndicator;
