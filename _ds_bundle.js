/* @ds-bundle: {"format":3,"namespace":"LUCASDesignSystem_675758","components":[{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"Table","sourcePath":"components/core/Table.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioButton","sourcePath":"components/forms/RadioButton.jsx"},{"name":"SearchBar","sourcePath":"components/forms/SearchBar.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"AnswerRow","sourcePath":"components/learning/AnswerRow.jsx"},{"name":"ModuleItem","sourcePath":"components/learning/ModuleItem.jsx"},{"name":"StatTile","sourcePath":"components/learning/StatTile.jsx"},{"name":"StatRow","sourcePath":"components/learning/StatTile.jsx"},{"name":"LUCAS_MOODS","sourcePath":"components/lucas/LucasAvatar.jsx"},{"name":"LucasAvatar","sourcePath":"components/lucas/LucasAvatar.jsx"},{"name":"BottomSheet","sourcePath":"components/navigation/BottomSheet.jsx"},{"name":"HeaderNav","sourcePath":"components/navigation/HeaderNav.jsx"},{"name":"MobileFooter","sourcePath":"components/navigation/MobileFooter.jsx"},{"name":"PaginationDots","sourcePath":"components/navigation/PaginationDots.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Accordion.jsx":"507ef9fca95b","components/core/Avatar.jsx":"25f155c1bc1f","components/core/Button.jsx":"7f9415d6c8d1","components/core/Card.jsx":"86b792c60faa","components/core/Chip.jsx":"ab94f9f913ec","components/core/IconButton.jsx":"01b2a1a310d2","components/core/StatusBadge.jsx":"a34e079bfea5","components/core/Table.jsx":"550907193748","components/feedback/Callout.jsx":"9c067cecd366","components/feedback/EmptyState.jsx":"c0ab100cb929","components/feedback/ProgressBar.jsx":"c0055a6b1a8d","components/feedback/Skeleton.jsx":"659cf66d6647","components/feedback/Toast.jsx":"305904dad3d1","components/feedback/Tooltip.jsx":"97458ceebb49","components/forms/Checkbox.jsx":"983f3e5620c9","components/forms/Input.jsx":"3230de4be0a7","components/forms/RadioButton.jsx":"5bc27070493f","components/forms/SearchBar.jsx":"1b7fa8abf0fa","components/forms/SegmentedControl.jsx":"6a3ec39f9ea4","components/forms/Slider.jsx":"69f18204c858","components/forms/Toggle.jsx":"bf06d7d9c1e6","components/learning/AnswerRow.jsx":"d385d6c6666e","components/learning/ModuleItem.jsx":"0bf46b227bf0","components/learning/StatTile.jsx":"39adf6813c76","components/lucas/LucasAvatar.jsx":"9851b420cde5","components/navigation/BottomSheet.jsx":"37b10dbc73cc","components/navigation/HeaderNav.jsx":"5e8d5871a0c6","components/navigation/MobileFooter.jsx":"3b0dc9e88ca6","components/navigation/PaginationDots.jsx":"50a138c29ea9","components/navigation/Stepper.jsx":"72db1ea81974","components/navigation/Tabs.jsx":"625e7b750237","showcase/Showcase.jsx":"93c8b09437b3","ui_kits/app/Chrome.jsx":"3899d5e07af9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LUCASDesignSystem_675758 = window.LUCASDesignSystem_675758 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Vertically stacked expandable sections — FAQ, glossary, detailed breakdowns.
 *  Default: single-open (closes others when one opens). Set `multiple` to keep many open. */
function Accordion({
  items = [],
  multiple = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState({});
  const toggle = i => {
    setOpen(s => multiple ? {
      ...s,
      [i]: !s[i]
    } : {
      [i]: !s[i]
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid var(--stroke-subtle)",
      borderRadius: "var(--radius-md-px)",
      overflow: "hidden",
      ...style
    }
  }, rest), items.map((item, i) => {
    const isOpen = !!open[i];
    const label = item.title || item.label;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i > 0 ? "1px solid var(--stroke-subtle)" : "none"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        width: "100%",
        padding: "15px 20px",
        background: isOpen ? "var(--surface-recessed)" : "var(--surface-elevated)",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        transition: "background 0.15s"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 15,
        color: "var(--text-primary)",
        flex: 1
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-rounded",
      style: {
        fontSize: 20,
        color: "var(--color-gray-400)",
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.22s",
        flex: "none"
      }
    }, "expand_more")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? "800px" : "0",
        overflow: "hidden",
        transition: "max-height 0.28s cubic-bezier(0.4,0,0.2,1)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "4px 20px 20px",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        lineHeight: 1.7,
        color: "var(--text-body)"
      }
    }, item.content || item.children)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** User avatar — image if src provided, else initials on brand yellow.
 *  Supports circle, rounded, or square shape. Optional online/offline indicator dot. */
function Avatar({
  src,
  name,
  size = 40,
  shape = "circle",
  indicator,
  style,
  ...rest
}) {
  const initial = name ? name.trim().split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase() : "?";
  const radius = shape === "circle" ? "50%" : shape === "rounded" ? "var(--radius-sm-px)" : "var(--radius-xs-px)";
  const fontSize = Math.round(size * 0.36);
  const indicatorColors = {
    online: "#22c55e",
    offline: "var(--color-gray-400)",
    busy: "var(--color-red-500)",
    away: "var(--color-orange-500)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      flex: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: radius,
      background: src ? "var(--surface-recessed)" : "var(--color-brand-500)",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      boxShadow: "inset 0 0 0 1.5px rgba(0,0,0,.08)"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || "Avatar",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize,
      color: "#121212",
      lineHeight: 1,
      userSelect: "none"
    }
  }, initial)), indicator && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: Math.max(10, size * 0.26),
      height: Math.max(10, size * 0.26),
      borderRadius: "50%",
      background: indicatorColors[indicator] || indicatorColors.offline,
      border: "2px solid var(--surface-elevated)"
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LUCAS Button — the primary call-to-action across the app.
 * Three types (primary / secondary / tertiary) × default / hover / disabled.
 */
function Button({
  children,
  type = "primary",
  size = "lg",
  disabled = false,
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  style,
  ...rest
}) {
  const sizes = {
    lg: {
      padding: "16px 24px",
      fontSize: 18,
      minHeight: 52
    },
    md: {
      padding: "12px 20px",
      fontSize: 16,
      minHeight: 44
    },
    sm: {
      padding: "8px 16px",
      fontSize: 14,
      minHeight: 36
    }
  };
  const s = sizes[size] || sizes.lg;
  const palettes = {
    primary: {
      background: "var(--surface-action-primary-default)",
      color: "var(--text-on-action-primary)",
      boxShadow: "none"
    },
    secondary: {
      background: "var(--surface-action-secondary-default)",
      color: "var(--text-primary)",
      boxShadow: "inset 0 0 0 1px var(--stroke-primary)"
    },
    tertiary: {
      background: "var(--surface-action-tertiary-default)",
      color: "var(--color-gray-900)",
      boxShadow: "none"
    }
  };
  const p = palettes[type] || palettes.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      width: fullWidth ? "100%" : "auto",
      minHeight: s.minHeight,
      padding: s.padding,
      border: "none",
      borderRadius: "var(--radius-sm-px)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: s.fontSize,
      lineHeight: "20px",
      letterSpacing: "-0.01em",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "filter 120ms ease, transform 120ms ease",
      ...(disabled ? {
        background: "var(--surface-action-primary-disabled)",
        color: "var(--text-action-disabled)",
        boxShadow: "none"
      } : p),
      ...style
    },
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "scale(0.98)"),
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, rest), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Card — the workhorse surface. Soft radius, gentle shadow, white/elevated
 *  background. Use `tone="brand"` for the yellow hero banner treatment. */
function Card({
  children,
  tone = "default",
  padding = 16,
  elevated = true,
  style,
  ...rest
}) {
  const tones = {
    default: {
      background: "var(--surface-elevated)",
      color: "var(--text-primary)"
    },
    recessed: {
      background: "var(--surface-recessed)",
      color: "var(--text-primary)"
    },
    brand: {
      background: "var(--color-brand-500)",
      color: "var(--color-gray-900)"
    },
    dark: {
      background: "var(--color-gray-900)",
      color: "var(--color-gray-50)"
    }
  };
  const t = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-lg-px)",
      padding,
      boxShadow: elevated ? "var(--shadow-card)" : "none",
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill chip — selectable filter / category token. Outlined when unselected,
 *  yellow-filled when selected. Optional count bubble & leading icon. */
function Chip({
  children,
  selected = false,
  count,
  leadingIcon,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 12px",
      minHeight: 32,
      border: "none",
      borderRadius: "var(--radius-pill)",
      background: selected ? "var(--color-brand-500)" : "transparent",
      boxShadow: selected ? "none" : "inset 0 0 0 1px var(--text-primary)",
      color: selected ? "var(--color-gray-900)" : "var(--text-primary)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: "-0.01em",
      cursor: "pointer",
      transition: "background 120ms ease",
      ...style
    }
  }, rest), leadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 18
    }
  }, leadingIcon), children, count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 18,
      height: 18,
      padding: "0 5px",
      borderRadius: "var(--radius-pill)",
      background: selected ? "rgba(0,0,0,0.14)" : "var(--color-gray-200)",
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 11
    }
  }, count));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon-only round button. Renders a Material Symbols Rounded glyph — the
 * host page must load the Material Symbols Rounded font (see ICONOGRAPHY).
 */
function IconButton({
  icon = "add",
  type = "primary",
  size = 44,
  disabled = false,
  ariaLabel,
  style,
  ...rest
}) {
  const palettes = {
    primary: {
      background: "var(--surface-action-primary-default)",
      color: "var(--text-on-action-primary)",
      boxShadow: "none"
    },
    secondary: {
      background: "var(--surface-action-secondary-default)",
      color: "var(--text-primary)",
      boxShadow: "inset 0 0 0 1px var(--stroke-primary)"
    },
    tertiary: {
      background: "var(--surface-action-tertiary-default)",
      color: "var(--color-gray-900)",
      boxShadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      boxShadow: "none"
    }
  };
  const p = disabled ? {
    background: "var(--surface-action-primary-disabled)",
    color: "var(--text-action-disabled)",
    boxShadow: "none"
  } : palettes[type] || palettes.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel || icon,
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      border: "none",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "filter 120ms ease, transform 120ms ease",
      ...p,
      ...style
    },
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "scale(0.92)"),
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: size * 0.5
    }
  }, icon));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status pill (e.g. "Done", "Start", "Locked"). Five semantic tones. */
function StatusBadge({
  children,
  status = "neutral",
  icon,
  style,
  ...rest
}) {
  const tones = {
    success: {
      background: "var(--fill-surface-green)",
      color: "var(--fill-text-green)"
    },
    error: {
      background: "var(--fill-surface-red)",
      color: "var(--fill-text-red)"
    },
    warning: {
      background: "var(--fill-surface-orange)",
      color: "var(--fill-text-orange)"
    },
    brand: {
      background: "var(--fill-surface-yellow)",
      color: "var(--fill-text-yellow)"
    },
    neutral: {
      background: "var(--color-gray-200)",
      color: "var(--color-gray-700)"
    },
    solid: {
      background: "var(--color-gray-900)",
      color: "var(--color-gray-50)"
    },
    solidBrand: {
      background: "var(--color-brand-500)",
      color: "var(--color-gray-900)"
    }
  };
  const t = tones[status] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      padding: "4px 8px",
      borderRadius: "var(--radius-xs-px)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "-0.007em",
      ...t,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 14
    }
  }, icon), children);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useTheme() {
  const [theme, setTheme] = React.useState(() => typeof document !== "undefined" ? document.documentElement.dataset.theme || "light" : "light");
  React.useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() => setTheme(el.dataset.theme || "light"));
    obs.observe(el, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });
    return () => obs.disconnect();
  }, []);
  return theme;
}

/** Data table with sticky header row, optional zebra striping, and full token theming.
 *  `columns` can be plain strings (used as both label and key) or `{label, key, align}` objects. */
const Table = ({
  columns = [],
  rows = [],
  striped = false,
  style,
  ...rest
}) => {
  const theme = useTheme();
  const dark = theme === "dark";
  const cols = columns.map(c => typeof c === "string" ? {
    label: c,
    key: c,
    align: "left"
  } : {
    align: "left",
    ...c
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflowX: "auto",
      borderRadius: "var(--radius-md-px)",
      border: "1px solid var(--stroke-subtle)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-body)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: dark ? "var(--color-gray-900)" : "var(--surface-recessed)"
    }
  }, cols.map((col, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      padding: "10px 18px",
      textAlign: col.align,
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10.5,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--color-gray-500)",
      whiteSpace: "nowrap",
      borderBottom: "1.5px solid var(--stroke-primary)"
    }
  }, col.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    style: {
      background: striped && ri % 2 === 1 ? "var(--surface-recessed)" : "var(--surface-elevated)",
      transition: "background 0.1s"
    }
  }, cols.map((col, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      padding: "13px 18px",
      color: ci === 0 ? "var(--text-primary)" : "var(--text-body)",
      fontWeight: ci === 0 ? 500 : 400,
      textAlign: col.align,
      borderBottom: ri < rows.length - 1 ? "1px solid var(--stroke-subtle)" : "none",
      whiteSpace: "nowrap"
    }
  }, row[col.key])))))));
};
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Callout — inline feedback block with a colored icon chip, title and body.
 *  Used heavily after quiz answers ("Not Quite — 2 Attempts Remaining"). */
function Callout({
  title,
  children,
  status = "info",
  icon,
  style,
  ...rest
}) {
  const tones = {
    correct: {
      bg: "var(--fill-surface-green)",
      line: "var(--color-green-500)",
      chip: "var(--color-green-500)",
      glow: "var(--shadow-success)",
      defaultIcon: "check"
    },
    incorrect: {
      bg: "var(--fill-surface-red)",
      line: "var(--color-red-500)",
      chip: "var(--color-red-500)",
      glow: "var(--shadow-error)",
      defaultIcon: "close"
    },
    warning: {
      bg: "var(--fill-surface-orange)",
      line: "var(--color-orange-500)",
      chip: "var(--color-orange-500)",
      glow: "var(--shadow-md)",
      defaultIcon: "warning"
    },
    info: {
      bg: "var(--fill-surface-yellow)",
      line: "var(--color-brand-500)",
      chip: "var(--color-brand-500)",
      glow: "var(--shadow-md)",
      defaultIcon: "info"
    }
  };
  const t = tones[status] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 12,
      padding: 12,
      borderRadius: "var(--radius-sm-px)",
      background: t.bg,
      boxShadow: `inset 0 0 0 1px ${t.line}, ${t.glow}`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      borderRadius: "var(--radius-pill)",
      background: t.chip,
      color: status === "info" ? "var(--color-gray-900)" : "#fff",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 15
    }
  }, icon || t.defaultIcon)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      fontSize: 15,
      lineHeight: "20px",
      letterSpacing: "-0.007em",
      color: "var(--text-primary)"
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      fontSize: 12,
      lineHeight: "17px",
      letterSpacing: "-0.007em",
      color: "var(--text-primary)"
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zero-data placeholder — icon badge, title, optional body copy, and optional action slot.
 *  Designed to fill any container; centers itself vertically/horizontally. */
function EmptyState({
  icon = "inbox",
  title,
  body,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "52px 32px",
      gap: 20,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 76,
      height: 76,
      borderRadius: "50%",
      background: "var(--fill-surface-yellow)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 36,
      color: "var(--fill-text-yellow)"
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: "-.015em",
      color: "var(--text-primary)"
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: 0,
      maxWidth: 320
    }
  }, body)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Segmented progress bar — N steps, completed ones fill green.
 *  Matches the "Completed 0 of 5" module tracker. */
function ProgressBar({
  value = 0,
  total = 5,
  segmented = true,
  height = 8,
  color = "var(--color-green-500)",
  style,
  ...rest
}) {
  if (segmented) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: "flex",
        gap: 6,
        ...style
      }
    }, rest), Array.from({
      length: total
    }).map((_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        flex: 1,
        height,
        borderRadius: "var(--radius-pill)",
        background: i < value ? color : "var(--fill-inactive)",
        transition: "background 200ms ease"
      }
    })));
  }
  const pct = Math.max(0, Math.min(100, value / total * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      height,
      borderRadius: "var(--radius-pill)",
      background: "var(--fill-inactive)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      borderRadius: "var(--radius-pill)",
      background: color,
      transition: "width 240ms ease"
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Loading skeleton — a shimmer placeholder sized to match real content.
 *  Chain multiple Skeletons to build a full-page loading state. */
function Skeleton({
  width = "100%",
  height = 16,
  borderRadius,
  circle = false,
  style,
  ...rest
}) {
  const r = circle ? "50%" : borderRadius || (typeof height === "number" && height >= 36 ? "var(--radius-md-px)" : "var(--radius-xs-px)");
  const w = circle ? height : width;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: w,
      height,
      borderRadius: r,
      background: "var(--surface-recessed)",
      position: "relative",
      overflow: "hidden",
      flex: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--surface-elevated) 80%, transparent) 50%, transparent 100%)",
      animation: "skeleton-shimmer 1.5s ease infinite"
    }
  }));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toast — transient notification. Dark surface by default; semantic accent
 *  bar + icon for success / error. */
function Toast({
  children,
  title,
  status = "default",
  icon,
  onDismiss,
  style,
  ...rest
}) {
  const tones = {
    default: {
      accent: "var(--color-brand-500)",
      glyph: "info"
    },
    success: {
      accent: "var(--color-green-500)",
      glyph: "check_circle"
    },
    error: {
      accent: "var(--color-red-500)",
      glyph: "error"
    }
  };
  const t = tones[status] || tones.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      maxWidth: 360,
      padding: "12px 14px",
      borderRadius: "var(--radius-sm-px)",
      background: "var(--surface-dark)",
      color: "var(--text-light)",
      boxShadow: "var(--shadow-lg)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 22,
      color: t.accent,
      marginTop: 1
    }
  }, icon || t.glyph), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: 15,
      lineHeight: "20px"
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      lineHeight: "18px",
      color: "var(--color-gray-400)"
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: "none",
      background: "transparent",
      color: "var(--color-gray-400)",
      cursor: "pointer",
      padding: 0,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 18
    }
  }, "close")));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tooltip — hover/tap label with a pointer. `placement` controls side. */
function Tooltip({
  children,
  label,
  placement = "top",
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }, rest), children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 20,
      whiteSpace: "nowrap",
      padding: "6px 10px",
      borderRadius: "var(--radius-xs-px)",
      background: "var(--surface-elevated)",
      color: "var(--text-primary)",
      boxShadow: "var(--shadow-md), inset 0 0 0 1px var(--stroke-primary)",
      fontFamily: "var(--font-body)",
      fontSize: 12,
      lineHeight: "16px",
      boxShadow: "var(--shadow-md)",
      ...pos[placement]
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with optional label. Selected = black rounded square + check. */
function Checkbox({
  checked = false,
  label,
  onChange,
  disabled = false,
  size = 24,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-2xs-px)",
      background: checked ? disabled ? "var(--color-gray-400)" : "var(--surface-action-primary-default)" : "transparent",
      boxShadow: checked ? "none" : `inset 0 0 0 1.5px ${disabled ? "var(--color-gray-400)" : "var(--color-gray-500)"}`,
      transition: "background 120ms ease"
    }
  }, rest), checked && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: size * 0.72,
      color: "var(--text-on-action-primary)"
    }
  }, "check")), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: "22px",
      color: disabled ? "var(--color-gray-500)" : "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text / dropdown / textarea field with label + optional helper text.
 *  States: default, active (focus), error, disabled. */
function Input({
  label,
  placeholder = "",
  value,
  onChange,
  state = "default",
  type = "text",
  helperText,
  multiline = false,
  dropdown = false,
  style,
  ...rest
}) {
  const borderByState = {
    default: "inset 0 0 0 1px var(--stroke-action-default)",
    active: "inset 0 0 0 1.5px var(--stroke-action-active)",
    error: "inset 0 0 0 1.5px var(--stroke-action-error)",
    disabled: "inset 0 0 0 1px var(--stroke-action-disabled)"
  };
  const isDisabled = state === "disabled";
  const labelColor = state === "error" ? "var(--text-action-error)" : "var(--text-primary)";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: "20px",
      color: labelColor
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: multiline ? "flex-start" : "center",
      gap: 8,
      padding: "10px 12px",
      borderRadius: "var(--radius-xs-px)",
      background: isDisabled ? "var(--surface-recessed)" : "var(--surface-elevated)",
      boxShadow: borderByState[state]
    }
  }, multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: isDisabled,
    rows: 3,
    style: inputBaseStyle
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: isDisabled,
    style: inputBaseStyle
  }, rest)), dropdown && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 20,
      color: "var(--color-gray-500)"
    }
  }, "expand_more")), helperText && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      lineHeight: "16px",
      color: state === "error" ? "var(--text-action-error)" : "var(--color-gray-500)"
    }
  }, helperText));
}
const inputBaseStyle = {
  flex: 1,
  border: "none",
  outline: "none",
  background: "transparent",
  resize: "none",
  fontFamily: "var(--font-body)",
  fontSize: 14,
  lineHeight: "20px",
  color: "var(--text-primary)",
  width: "100%"
};
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio button with optional label. Selected = black ring + filled dot.
 *  Error state turns the ring red. */
function RadioButton({
  checked = false,
  label,
  onChange,
  disabled = false,
  error = false,
  size = 18,
  style,
  ...rest
}) {
  const ringColor = error ? "var(--stroke-action-error)" : disabled ? "var(--color-gray-400)" : checked ? "var(--surface-action-primary-default)" : "var(--color-gray-500)";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    onClick: () => !disabled && onChange && onChange(true),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "50%",
      boxShadow: `inset 0 0 0 1.5px ${ringColor}`,
      transition: "box-shadow 120ms ease"
    }
  }, rest), checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: size * 0.5,
      height: size * 0.5,
      borderRadius: "50%",
      background: ringColor
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: "22px",
      color: disabled ? "var(--color-gray-500)" : "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { RadioButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Search bar — pill-shaped input with leading search icon and clear button.
 *  Activates a yellow focus ring. Fully controlled (`value` + `onChange`). */
function SearchBar({
  value = "",
  onChange,
  placeholder = "Search…",
  onClear,
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 14px",
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-recessed)",
      border: "1.5px solid " + (focused ? "var(--stroke-action-active)" : "transparent"),
      opacity: disabled ? 0.5 : 1,
      transition: "border-color 0.15s",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 19,
      color: "var(--color-gray-400)",
      flex: "none"
    }
  }, "search"), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => !disabled && onChange && onChange(e.target.value),
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: "none",
      background: "transparent",
      outline: "none",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-primary)",
      minWidth: 0
    }
  }), value && !disabled && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      onClear ? onClear() : onChange && onChange("");
    },
    style: {
      background: "var(--stroke-subtle)",
      border: "none",
      cursor: "pointer",
      color: "var(--text-body)",
      padding: 2,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 14
    }
  }, "close")));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Segmented control — pick one of N short options. Active segment gets the
 *  yellow brand fill. Wrapper has a hairline border + 4px radius. */
function SegmentedControl({
  options = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const items = options.map(o => typeof o === "string" ? {
    label: o,
    value: o
  } : o);
  const active = value ?? items[0]?.value;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "inline-flex",
      gap: 4,
      padding: 4,
      borderRadius: "var(--radius-2xs-px)",
      boxShadow: "inset 0 0 0 1px var(--stroke-primary)",
      background: "var(--surface-elevated)",
      ...style
    }
  }, rest), items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(it.value),
      style: {
        flex: 1,
        padding: "6px 14px",
        border: "none",
        borderRadius: "var(--radius-2xs-px)",
        background: on ? "var(--color-brand-500)" : "transparent",
        color: on ? "var(--color-gray-900)" : "var(--text-primary)",
        fontFamily: "var(--font-body)",
        fontWeight: on ? "var(--weight-semibold)" : "var(--weight-medium)",
        fontSize: 13,
        lineHeight: "16px",
        cursor: "pointer",
        transition: "background 120ms ease",
        whiteSpace: "nowrap"
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Range slider — a native <input type="range"> with a custom branded track + knob overlay.
 *  Use `format` to display the value as currency, percentage, etc. */
function Slider({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  label,
  format,
  helperText,
  disabled = false,
  style,
  ...rest
}) {
  const pct = max === min ? 0 : (value - min) / (max - min) * 100;
  const display = format ? format(value) : value;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "100%",
      ...style
    }
  }, rest), (label || format !== undefined) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: "-.015em",
      color: "var(--text-primary)",
      marginLeft: "auto"
    }
  }, display)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 6,
      borderRadius: 3,
      background: "var(--fill-inactive)",
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      borderRadius: 3,
      background: disabled ? "var(--color-gray-400)" : "var(--color-brand-500)",
      transition: "width 0.08s"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "calc(" + pct + "% - 12px)",
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: "var(--surface-elevated)",
      border: "2.5px solid " + (disabled ? "var(--color-gray-400)" : "var(--color-brand-500)"),
      boxShadow: "var(--shadow-sm)",
      transition: "left 0.08s",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    disabled: disabled,
    onChange: e => onChange && onChange(Number(e.target.value)),
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      opacity: 0,
      cursor: disabled ? "not-allowed" : "pointer",
      margin: 0,
      height: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      color: "var(--color-gray-400)"
    }
  }, format ? format(min) : min), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      color: "var(--color-gray-400)"
    }
  }, format ? format(max) : max)), helperText && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-body)",
      marginTop: 4
    }
  }, helperText));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Binary on/off toggle switch. ON uses brand yellow; OFF uses the inactive fill.
 *  `size` = sm | md | lg. Passes aria-checked for accessibility. */
function Toggle({
  checked = false,
  onChange,
  disabled = false,
  label,
  labelPosition = "right",
  size = "md",
  style,
  ...rest
}) {
  const s = {
    sm: {
      w: 36,
      h: 20,
      knob: 14,
      gap: 3
    },
    md: {
      w: 44,
      h: 24,
      knob: 18,
      gap: 3
    },
    lg: {
      w: 52,
      h: 28,
      knob: 22,
      gap: 3
    }
  }[size] || {
    w: 44,
    h: 24,
    knob: 18,
    gap: 3
  };
  const track = /*#__PURE__*/React.createElement("div", {
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      flex: "none",
      width: s.w,
      height: s.h,
      borderRadius: 999,
      background: checked ? "var(--color-brand-400, #F5C518)" : "#121212",
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background 0.2s, border-color 0.2s",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: s.gap - 1,
      left: checked ? s.w - s.knob - s.gap : s.gap - 1,
      width: s.knob,
      height: s.knob,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "0 1px 4px rgba(0,0,0,.22)",
      transition: "left 0.2s, background 0.2s"
    }
  }));
  if (!label) return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, rest), track);
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, rest), labelPosition === "left" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, label), track, labelPosition === "right" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/learning/AnswerRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A quiz answer option. Leading letter token (A/B/C/D) or a result icon.
 *  state: default | selected | correct | incorrect. */
function AnswerRow({
  letter,
  children,
  state = "default",
  onClick,
  style,
  ...rest
}) {
  const styles = {
    default: {
      border: "1px solid var(--stroke-primary)",
      bg: "var(--surface-elevated)",
      tokenBg: "var(--answer-letter-bg)",
      tokenColor: "var(--answer-letter-color)"
    },
    selected: {
      border: "1.5px solid var(--color-gray-900)",
      bg: "var(--surface-elevated)",
      tokenBg: "var(--color-gray-900)",
      tokenColor: "#fff"
    },
    correct: {
      border: "1.5px solid var(--color-green-500)",
      bg: "var(--fill-surface-green)",
      tokenBg: "var(--color-green-500)",
      tokenColor: "#fff"
    },
    incorrect: {
      border: "1.5px solid var(--color-red-500)",
      bg: "var(--fill-surface-red)",
      tokenBg: "var(--color-red-500)",
      tokenColor: "#fff"
    }
  }[state];
  const resultGlyph = state === "correct" ? "check" : state === "incorrect" ? "close" : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      textAlign: "left",
      padding: "12px 14px",
      borderRadius: "var(--radius-sm-px)",
      background: styles.bg,
      border: styles.border,
      cursor: "pointer",
      transition: "border-color 120ms ease, background 120ms ease",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 28,
      height: 28,
      borderRadius: "var(--radius-pill)",
      background: styles.tokenBg,
      color: styles.tokenColor,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: 14
    }
  }, resultGlyph ? /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 18
    }
  }, resultGlyph) : letter), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      fontSize: 15,
      lineHeight: "20px",
      color: "var(--text-primary)"
    }
  }, children));
}
Object.assign(__ds_scope, { AnswerRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/AnswerRow.jsx", error: String((e && e.message) || e) }); }

// components/learning/ModuleItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A row in the module list — completion icon, title, meta, and a trailing
 *  status badge. status: completed | active | locked. */
function ModuleItem({
  title,
  meta,
  status = "active",
  badge,
  onClick,
  style,
  ...rest
}) {
  const icon = {
    completed: {
      glyph: "check_circle",
      color: "var(--color-green-500)",
      fill: "var(--fill-surface-green)"
    },
    active: {
      glyph: "play_circle",
      color: "var(--color-brand-600)",
      fill: "var(--fill-surface-yellow)"
    },
    locked: {
      glyph: "lock",
      color: "var(--color-gray-500)",
      fill: "var(--surface-recessed)"
    }
  }[status];
  const isLocked = status === "locked";
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: isLocked ? undefined : onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      textAlign: "left",
      padding: "12px 14px",
      border: "none",
      borderRadius: "var(--radius-md-px)",
      background: "var(--surface-elevated)",
      boxShadow: "var(--shadow-card)",
      cursor: isLocked ? "default" : "pointer",
      opacity: isLocked ? 0.7 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
      borderRadius: "var(--radius-pill)",
      background: icon.fill
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 22,
      color: icon.color
    }
  }, icon.glyph)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: 15,
      lineHeight: "20px",
      letterSpacing: "-0.01em",
      color: "var(--text-primary)"
    }
  }, title), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--color-gray-500)"
    }
  }, meta)), badge);
}
Object.assign(__ds_scope, { ModuleItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/ModuleItem.jsx", error: String((e && e.message) || e) }); }

// components/learning/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Stat tile — small label on top, big value below. Used in the results
 *  scoreboard (Total Time / Avg Score / Modules). Optional divider variant. */
function StatTile({
  label,
  value,
  align = "center",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--color-gray-500)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: 22,
      lineHeight: "26px",
      letterSpacing: "-0.02em",
      color: "var(--text-primary)"
    }
  }, value));
}

/** Convenience row that lays out several StatTiles with hairline dividers. */
function StatRow({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "stretch",
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      background: "var(--stroke-subtle)",
      margin: "2px 0"
    }
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: it.label,
    value: it.value,
    style: {
      flex: 1
    }
  }))));
}
Object.assign(__ds_scope, { StatTile, StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/lucas/LucasAvatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Little Lucas — the house-shaped yellow robot mascot/copilot.
 *  Pick a `mood`; supply `basePath` pointing at the assets/lucas/ folder
 *  relative to the page using it (default "assets/lucas/").
 *  Moods map 1:1 to the shipped PNGs. */
const LUCAS_MOODS = ["standard", "teacher", "wave", "welcoming", "inviting", "excited", "determined", "thinking", "confused", "sad", "scared", "satisfied", "success", "running", "costume-01", "costume-02", "costume-03", "costume-04", "costume-05", "costume-06", "costume-07"];
function LucasAvatar({
  mood = "standard",
  size = 96,
  basePath = "assets/lucas/",
  alt,
  style,
  ...rest
}) {
  const base = basePath.endsWith("/") ? basePath : basePath + "/";
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${base}${mood}.png`,
    alt: alt || `Little Lucas — ${mood}`,
    width: size,
    height: size,
    style: {
      width: size,
      height: size,
      objectFit: "contain",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { LUCAS_MOODS, LucasAvatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lucas/LucasAvatar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomSheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** iOS-style bottom sheet. Renders a backdrop + sliding panel from the bottom.
 *  Use `contained` prop to position relative to a parent instead of the viewport
 *  (useful for demos / mockups). */
function BottomSheet({
  open = false,
  onClose,
  title,
  children,
  contained = false,
  style,
  ...rest
}) {
  if (!open) return null;
  const pos = contained ? "absolute" : "fixed";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: pos,
      inset: 0,
      background: "rgba(0,0,0,.45)",
      zIndex: 100,
      backdropFilter: "blur(2px)",
      WebkitBackdropFilter: "blur(2px)"
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: pos,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 101,
      background: "var(--surface-elevated)",
      borderRadius: "24px 24px 0 0",
      boxShadow: "var(--shadow-lg)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "12px 0 6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 4,
      borderRadius: 2,
      background: "var(--stroke-primary)"
    }
  })), title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "4px 20px 14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: "-.01em",
      color: "var(--text-primary)"
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "var(--surface-recessed)",
      border: "none",
      cursor: "pointer",
      color: "var(--text-body)",
      padding: 6,
      borderRadius: 8,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 20
    }
  }, "close"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: title ? "0 20px 32px" : "8px 20px 32px"
    }
  }, children)));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/navigation/HeaderNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Top navigation bar — back chevron + centered title + optional trailing slot.
 *  Matches "‹ Module 5 of 5". Tone "brand" for yellow celebration screens. */
function HeaderNav({
  title,
  onBack,
  trailing,
  tone = "default",
  style,
  ...rest
}) {
  const isBrand = tone === "brand";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 48,
      padding: "0 8px",
      background: isBrand ? "var(--color-brand-500)" : "var(--surface-primary)",
      color: isBrand ? "var(--color-gray-900)" : "var(--text-primary)",
      ...style
    }
  }, rest), onBack ? /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "Back",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      display: "inline-flex",
      padding: 8,
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 24
    }
  }, "arrow_back_ios_new")) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: 17,
      letterSpacing: "-0.01em"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      minWidth: 40,
      justifyContent: "flex-end"
    }
  }, trailing));
}
Object.assign(__ds_scope, { HeaderNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/HeaderNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MobileFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Sticky bottom action bar — primary button, optional secondary below.
 *  Mirrors the app's two-button footer. */
function MobileFooter({
  primary,
  secondary,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px calc(12px + env(safe-area-inset-bottom))",
      background: "var(--surface-primary)",
      boxShadow: "0 -2px 12px rgba(0,0,0,0.05)",
      ...style
    }
  }, rest), children, primary, secondary);
}
Object.assign(__ds_scope, { MobileFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MobileFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PaginationDots.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pagination dots — active dot stretches into a yellow pill. */
function PaginationDots({
  count = 4,
  active = 0,
  onDotClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center",
      ...style
    }
  }, rest), Array.from({
    length: count
  }).map((_, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      onClick: () => onDotClick && onDotClick(i),
      style: {
        width: on ? 22 : 8,
        height: 8,
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--color-brand-500)" : "var(--fill-inactive)",
        cursor: onDotClick ? "pointer" : "default",
        transition: "width 200ms ease, background 200ms ease"
      }
    });
  }));
}
Object.assign(__ds_scope, { PaginationDots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PaginationDots.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Returns "dark" or "light" based on the html[data-theme] attribute, reactive. */
function useTheme() {
  const [theme, setTheme] = React.useState(() => typeof document !== "undefined" ? document.documentElement.dataset.theme || "light" : "light");
  React.useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() => setTheme(el.dataset.theme || "light"));
    obs.observe(el, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });
    return () => obs.disconnect();
  }, []);
  return theme;
}

/** Horizontal step-progress indicator.
 *
 * Light: completed = yellow filled + dark check; active = black filled + white number.
 * Dark:  completed = yellow filled + dark check; active = yellow outlined + yellow number.
 * Both:  inactive = gray outlined circle; connector = static gray line. */
function Stepper({
  steps = [],
  current = 0,
  style,
  ...rest
}) {
  const theme = useTheme();
  const dark = theme === "dark";

  // Connector line color
  const lineColor = dark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.18)";

  // Inactive circle border
  const inactiveBorder = dark ? "1.5px solid rgba(255,255,255,0.25)" : "1.5px solid var(--color-gray-300, #C8C8C8)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "flex-start",
      width: "100%",
      ...style
    }
  }, rest), steps.map((step, i) => {
    const done = i < current;
    const active = i === current;
    const label = typeof step === "string" ? step : step.label;

    // Circle styles
    let circleBg, circleColor, circleBorder;
    if (done) {
      circleBg = "var(--color-brand-400, #F5C518)";
      circleColor = "#121212";
      circleBorder = "none";
    } else if (active) {
      if (dark) {
        circleBg = "transparent";
        circleColor = "var(--color-brand-400, #F5C518)";
        circleBorder = "2px solid var(--color-brand-400, #F5C518)";
      } else {
        circleBg = "#121212";
        circleColor = "#fff";
        circleBorder = "none";
      }
    } else {
      circleBg = "transparent";
      circleColor = dark ? "rgba(255,255,255,0.35)" : "var(--color-gray-400)";
      circleBorder = inactiveBorder;
    }

    // Label styles
    const labelColor = active ? dark ? "#fff" : "var(--text-primary)" : done ? dark ? "rgba(255,255,255,0.6)" : "var(--color-gray-500)" : dark ? "rgba(255,255,255,0.35)" : "var(--color-gray-400)";
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: circleBg,
        color: circleColor,
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 13,
        border: circleBorder,
        boxSizing: "border-box",
        transition: "background 0.25s, border-color 0.25s, color 0.25s"
      }
    }, done ? /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-rounded",
      style: {
        fontSize: 17,
        fontVariationSettings: "'wght' 700"
      }
    }, "check") : /*#__PURE__*/React.createElement("span", null, i + 1)), label && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: 10,
        fontWeight: active ? 700 : 600,
        color: labelColor,
        textAlign: "center",
        maxWidth: 80,
        lineHeight: 1.35,
        transition: "color 0.25s"
      }
    }, label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1.5,
        marginTop: 15,
        background: lineColor,
        transition: "background 0.25s"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underline tabs — active tab gets a bold black label + underline. */
function Tabs({
  tabs = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const items = tabs.map(t => typeof t === "string" ? {
    label: t,
    value: t
  } : t);
  const active = value ?? items[0]?.value;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 24,
      borderBottom: "1px solid var(--stroke-subtle)",
      ...style
    }
  }, rest), items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onChange && onChange(it.value),
      style: {
        position: "relative",
        border: "none",
        background: "transparent",
        padding: "10px 0",
        cursor: "pointer",
        fontFamily: "var(--font-display)",
        fontWeight: on ? "var(--weight-semibold)" : "var(--weight-medium)",
        fontSize: 15,
        letterSpacing: "-0.01em",
        color: on ? "var(--color-brand-500)" : "var(--color-gray-500)"
      }
    }, it.label, on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 2.5,
        borderRadius: "var(--radius-pill)",
        background: "var(--color-brand-500)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// showcase/Showcase.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
// LUCAS Design System — full documentation showcase.
// Exposes window.Showcase.

const DS = window.LUCASDesignSystem_675758 || {};
const {
  Button,
  IconButton,
  Chip,
  Card,
  StatusBadge,
  Input,
  Checkbox,
  RadioButton,
  SegmentedControl,
  Callout,
  Toast,
  Tooltip,
  ProgressBar,
  HeaderNav,
  Tabs,
  PaginationDots,
  MobileFooter,
  ModuleItem,
  AnswerRow,
  StatRow,
  StatTile,
  LucasAvatar,
  Accordion,
  Avatar,
  BottomSheet,
  EmptyState,
  SearchBar,
  Skeleton,
  Slider,
  Stepper,
  Table,
  Toggle
} = DS;
const LUCAS = "assets/lucas/";
// Standalone-export resolver: returns a bundled blob URL when present, else undefined (dev uses file paths).
const RES = mood => typeof window !== "undefined" && window.__resources ? window.__resources["lucas_" + mood] : undefined;
const LOGO = which => typeof window !== "undefined" && window.__resources ? window.__resources[which] : undefined;

// ── responsive context ────────────────────────────────────────
const ResponsiveCtx = React.createContext({
  isMobile: false,
  isTablet: false,
  w: 1440
});
function useResponsive() {
  return React.useContext(ResponsiveCtx);
}
function ResponsiveProvider({
  children
}) {
  const [w, setW] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener('resize', fn, {
      passive: true
    });
    return () => window.removeEventListener('resize', fn);
  }, []);
  return React.createElement(ResponsiveCtx.Provider, {
    value: {
      isMobile: w < 640,
      isTablet: w < 1024,
      w
    }
  }, children);
}

// ── error boundary ────────────────────────────────────────────
class ErrBound extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      err: null
    };
  }
  static getDerivedStateFromError(e) {
    return {
      err: e
    };
  }
  render() {
    if (this.state.err) return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "10px 14px",
        borderRadius: 8,
        background: "var(--fill-surface-red)",
        color: "var(--fill-text-red)",
        fontFamily: "var(--font-ui)",
        fontSize: 12
      }
    }, "Component error: ", this.state.err.message);
    return this.props.children;
  }
}
function Safe({
  children
}) {
  return React.createElement(ErrBound, null, children);
}

// ── layout primitives ─────────────────────────────────────────

function PageSection({
  id,
  eyebrow,
  title,
  intro,
  children,
  noBorder
}) {
  const {
    isMobile,
    isTablet
  } = useResponsive();
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    className: "ds-section",
    style: {
      padding: isMobile ? "48px 20px" : isTablet ? "56px 32px" : "72px 48px",
      borderTop: noBorder ? "none" : "1px solid var(--stroke-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: isMobile ? 28 : 40
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--color-brand-600)",
      marginBottom: 8
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: isMobile ? 28 : isTablet ? 32 : 38,
      letterSpacing: "-.025em",
      margin: 0,
      color: "var(--text-primary)"
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: isMobile ? 14 : 16,
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: "14px 0 0",
      maxWidth: 680
    }
  }, intro)), children));
}
function SubSection({
  id,
  title,
  intro,
  children,
  first
}) {
  const {
    isMobile
  } = useResponsive();
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: "ds-section",
    style: {
      paddingTop: first ? 0 : isMobile ? 36 : 52,
      borderTop: first ? "none" : "1px solid var(--stroke-subtle)",
      marginTop: first ? 0 : isMobile ? 36 : 52
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: isMobile ? 16 : 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: isMobile ? 18 : 22,
      letterSpacing: "-.015em",
      margin: 0,
      color: "var(--text-primary)"
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: isMobile ? 13 : 15,
      lineHeight: 1.6,
      color: "var(--text-body)",
      margin: "10px 0 0"
    }
  }, intro)), children);
}
function CompRow({
  id,
  name,
  tag,
  desc,
  children
}) {
  const {
    isMobile
  } = useResponsive();
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: "ds-section",
    style: {
      padding: isMobile ? "28px 0" : "40px 0",
      borderTop: "1px solid var(--stroke-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "220px 1fr",
      gap: isMobile ? 16 : "44px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: isMobile ? "static" : "sticky",
      top: "calc(var(--th, 56px) + 20px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: isMobile ? 16 : 18,
      letterSpacing: "-.01em",
      color: "var(--text-primary)"
    }
  }, name), tag && /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      fontWeight: 700,
      padding: "3px 7px",
      borderRadius: 6,
      background: "var(--fill-surface-yellow)",
      color: "var(--fill-text-yellow)"
    }
  }, tag)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: 0
    }
  }, desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, children)));
}
function StateGroup({
  label,
  children,
  row
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--color-gray-400)",
      marginBottom: 12
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: row === false ? "nowrap" : "wrap",
      gap: 16,
      alignItems: "center"
    }
  }, children));
}

// ── token display helpers ─────────────────────────────────────

function Swatch({
  token,
  name
}) {
  const [val, setVal] = React.useState("");
  React.useEffect(() => {
    setVal(getComputedStyle(document.documentElement).getPropertyValue(token).trim());
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 0",
      minWidth: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 52,
      borderRadius: 10,
      background: "var(" + token + ")",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,.07)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      fontWeight: 600,
      color: "var(--text-primary)",
      marginTop: 5
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 9,
      color: "var(--text-body)",
      marginTop: 1
    }
  }, val));
}
function ColorScale({
  label,
  prefix,
  steps
}) {
  const {
    isMobile
  } = useResponsive();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--color-gray-500)",
      marginBottom: 10
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      overflowX: isMobile ? "auto" : "visible",
      paddingBottom: isMobile ? 6 : 0,
      WebkitOverflowScrolling: "touch"
    }
  }, steps.map(s => /*#__PURE__*/React.createElement(Swatch, {
    key: s,
    token: "--color-" + prefix + "-" + s,
    name: s
  }))));
}
function SemanticRow({
  token,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 0",
      borderBottom: "1px solid var(--stroke-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 7,
      background: "var(" + token + ")",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,.08)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      color: "var(--text-body)"
    }
  }, token)));
}

// ── 01 · INTRODUCTION ────────────────────────────────────────

function Introduction() {
  const {
    isMobile,
    isTablet
  } = useResponsive();
  const stats = [{
    n: "10",
    label: "Design Sections"
  }, {
    n: "20",
    label: "Components"
  }, {
    n: "100+",
    label: "Design Tokens"
  }, {
    n: "2",
    label: "Color Modes"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "intro",
    className: "ds-section",
    style: {
      padding: isMobile ? "48px 20px 56px" : isTablet ? "64px 32px" : "80px 48px 72px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr auto",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--color-brand-600)",
      marginBottom: 14
    }
  }, "Design System"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: isMobile ? 44 : isTablet ? 52 : 60,
      letterSpacing: "-.03em",
      lineHeight: .93,
      margin: 0,
      color: "var(--text-primary)"
    }
  }, "LUCAS"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: isMobile ? 15 : 18,
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: "20px 0 0",
      maxWidth: 560
    }
  }, "The warm, encouraging toolkit behind NFM Lending's Home Buyer Education app \u2014 tokens, components, and Little Lucas, all in one place."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginTop: 28
    }
  }, ["Yellow #FFC000", "Noto Sans · Inter", "20 components", "Light + Dark"].map(chip => /*#__PURE__*/React.createElement("span", {
    key: chip,
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 11,
      padding: "6px 14px",
      borderRadius: "999px",
      background: "var(--fill-surface-yellow)",
      color: "var(--fill-text-yellow)"
    }
  }, chip)))), !isMobile && /*#__PURE__*/React.createElement("img", {
    src: LOGO("lucas_welcoming") || "assets/lucas/welcoming.png",
    alt: "Little Lucas welcoming",
    style: {
      filter: "drop-shadow(0 16px 40px rgba(0,0,0,.15))",
      height: isTablet ? "320px" : "498px",
      width: isTablet ? "auto" : "450px"
    }
  })), isMobile && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO("lucas_welcoming") || "assets/lucas/welcoming.png",
    alt: "Little Lucas welcoming",
    style: {
      filter: "drop-shadow(0 10px 24px rgba(0,0,0,.15))",
      height: "180px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
      gap: isMobile ? 12 : 16,
      marginTop: isMobile ? 32 : 56
    }
  }, stats.map(({
    n,
    label
  }) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      padding: isMobile ? "16px 14px" : "24px 28px",
      borderRadius: "var(--radius-md-px)",
      background: "var(--surface-elevated)",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: isMobile ? 28 : 38,
      letterSpacing: "-.025em",
      color: "var(--text-primary)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: isMobile ? 12 : 14,
      color: "var(--text-body)",
      marginTop: 4
    }
  }, label))))));
}

// ── 02 · BRAND ───────────────────────────────────────────────

function Brand() {
  const {
    isMobile,
    isTablet
  } = useResponsive();
  const moods = ["standard", "wave", "teacher", "excited", "thinking", "confused", "success", "determined", "sad", "scared", "inviting", "welcoming", "running", "satisfied"];
  const costumes = ["costume-01", "costume-02", "costume-03", "costume-04", "costume-05", "costume-06", "costume-07"];
  const values = ["Warm & encouraging", "Clear & trustworthy", "Joyful & achievable", "Human-centered"];
  return /*#__PURE__*/React.createElement(PageSection, {
    id: "brand",
    eyebrow: "02 \xB7 Brand",
    title: "Brand",
    intro: "LUCAS is built on warmth, encouragement, and clarity. A yellow signature on a calm neutral canvas \u2014 never clinical, always human."
  }, /*#__PURE__*/React.createElement(SubSection, {
    id: "brand-overview",
    title: "Overview",
    first: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 32px",
      borderRadius: "var(--radius-lg-px)",
      background: "var(--color-brand-500)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 26,
      letterSpacing: "-.02em",
      color: "rgb(18,18,18)",
      marginBottom: 10
    }
  }, "NFM Lending"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.65,
      color: "rgba(18,18,18,.7)",
      margin: 0
    }
  }, "Home Buyer Education \u2014 making the path to homeownership feel achievable for every buyer, regardless of experience level.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 32px",
      borderRadius: "var(--radius-lg-px)",
      background: "var(--surface-elevated)",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: "-.01em",
      color: "var(--text-primary)",
      marginBottom: 14
    }
  }, "Brand Values"), values.map(v => /*#__PURE__*/React.createElement("div", {
    key: v,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "6px 0",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--color-brand-500)",
      flex: "none"
    }
  }), v))))), /*#__PURE__*/React.createElement(SubSection, {
    id: "brand-voice",
    title: "Voice & Tone Guide",
    intro: "Lil Lucas is a friendly house-headed robot who helps future homeowners learn with confidence \u2014 turning complicated topics into simple, encouraging steps."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
      gap: 12,
      marginBottom: 36
    }
  }, [{
    label: "Core Belief",
    text: "Anybody can learn this stuff."
  }, {
    label: "Core Mission",
    text: "Break big homeownership concepts into small, manageable steps."
  }, {
    label: "Core Feeling",
    text: "\"You've got this. Let's do it together.\""
  }].map(({
    label,
    text
  }) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      padding: "20px 22px",
      borderRadius: "var(--radius-md-px)",
      background: "var(--fill-surface-yellow)",
      borderLeft: "3px solid var(--color-brand-500)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--color-brand-700)",
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--fill-text-yellow)",
      fontWeight: 600
    }
  }, text)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--color-gray-400)",
      marginBottom: 14
    }
  }, "Personality"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: 12,
      marginBottom: 36
    }
  }, [{
    trait: "Supportive",
    desc: "Assumes the user is capable. Never talks down. Never shames.",
    says: "Every homebuyer starts somewhere.",
    not: "Many consumers lack financial literacy."
  }, {
    trait: "Encouraging",
    desc: "Focuses on progress. Notices effort. Celebrates wins, big and small.",
    says: "Nice work! You're making great progress.",
    not: "Module complete."
  }, {
    trait: "Playful",
    desc: "Warm and occasionally silly — but education always comes first.",
    says: "Let's unpack that.",
    not: "Mortgage puns every other sentence."
  }, {
    trait: "Curious",
    desc: "Learns alongside the user. Invites exploration. Doesn't claim to know it all.",
    says: "Want to see how that works?",
    not: "Here is the definitive answer."
  }].map(({
    trait,
    desc,
    says,
    not
  }) => /*#__PURE__*/React.createElement("div", {
    key: trait,
    style: {
      padding: "20px 22px",
      borderRadius: "var(--radius-md-px)",
      background: "var(--surface-elevated)",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--text-primary)",
      marginBottom: 6
    }
  }, trait), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      lineHeight: 1.6,
      color: "var(--text-body)",
      marginBottom: 14
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      color: "var(--color-green-600)",
      background: "var(--fill-surface-green)",
      padding: "2px 8px",
      borderRadius: 999,
      whiteSpace: "nowrap",
      marginTop: 1
    }
  }, "Says"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontStyle: "italic",
      color: "var(--text-primary)",
      lineHeight: 1.5
    }
  }, "\"", says, "\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      color: "var(--fill-text-red)",
      background: "var(--fill-surface-red)",
      padding: "2px 8px",
      borderRadius: 999,
      whiteSpace: "nowrap",
      marginTop: 1
    }
  }, "Not"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontStyle: "italic",
      color: "var(--text-body)",
      lineHeight: 1.5
    }
  }, "\"", not, "\"")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--color-gray-400)",
      marginBottom: 14
    }
  }, "The Lucas Formula"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: 12,
      marginBottom: 36
    }
  }, [{
    step: "1",
    label: "Encourage",
    sub: "Reduce anxiety",
    ex: "Buying a home can feel like a lot at first."
  }, {
    step: "2",
    label: "Explain",
    sub: "Deliver the lesson",
    ex: "A credit score helps lenders understand how you've managed debt in the past."
  }, {
    step: "3",
    label: "Celebrate",
    sub: "End with momentum",
    ex: "That's one more step toward your future home."
  }].map(({
    step,
    label,
    sub,
    ex
  }) => /*#__PURE__*/React.createElement("div", {
    key: step,
    style: {
      padding: "20px 22px",
      borderRadius: "var(--radius-md-px)",
      background: "var(--surface-elevated)",
      boxShadow: "var(--shadow-card)",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "var(--color-brand-500)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 13,
      color: "#121212",
      flex: "none"
    }
  }, step), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      color: "var(--text-body)"
    }
  }, sub))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      lineHeight: 1.6,
      color: "var(--text-body)",
      fontStyle: "italic",
      borderLeft: "2px solid var(--color-brand-500)",
      paddingLeft: 12
    }
  }, "\"", ex, "\"")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: 12,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 24px",
      borderRadius: "var(--radius-md-px)",
      background: "var(--surface-elevated)",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--color-gray-400)",
      marginBottom: 14
    }
  }, "Reading Level"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: "-.02em",
      marginBottom: 10,
      color: "rgb(0, 0, 0)"
    }
  }, "Grade 5"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, ["Short sentences", "Common words", "Everyday examples", "Active voice"].map(r => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--color-brand-500)",
      flex: "none"
    }
  }), r))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingTop: 14,
      borderTop: "1px solid var(--stroke-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      fontWeight: 700,
      color: "var(--color-green-600)",
      marginBottom: 6
    }
  }, "PREFER"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontStyle: "italic",
      color: "var(--text-body)",
      marginBottom: 10
    }
  }, "\"A budget helps you plan where your money goes.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      fontWeight: 700,
      color: "var(--fill-text-red)",
      marginBottom: 6
    }
  }, "NOT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontStyle: "italic",
      color: "var(--text-body)"
    }
  }, "\"Budgeting facilitates improved financial resource allocation.\""))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 24px",
      borderRadius: "var(--radius-md-px)",
      background: "var(--surface-elevated)",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--color-gray-400)",
      marginBottom: 14
    }
  }, "Emotional Goals"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, [{
    feel: "Safe",
    note: "It's okay not to know this yet."
  }, {
    feel: "Capable",
    note: "You can learn this."
  }, {
    feel: "Supported",
    note: "You're not doing this alone."
  }, {
    feel: "Motivated",
    note: "Keep going."
  }].map(({
    feel,
    note
  }) => /*#__PURE__*/React.createElement("div", {
    key: feel,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "10px 14px",
      borderRadius: "var(--radius-sm-px)",
      background: "var(--surface-recessed)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 13,
      color: "var(--text-primary)",
      minWidth: 76
    }
  }, feel), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontStyle: "italic",
      color: "var(--text-body)",
      lineHeight: 1.5
    }
  }, note)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: 12,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 24px",
      borderRadius: "var(--radius-md-px)",
      background: "var(--surface-elevated)",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--color-gray-400)",
      marginBottom: 6
    }
  }, "Mistakes Are Learning"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-body)",
      lineHeight: 1.6,
      marginBottom: 14
    }
  }, "Mistakes are normal. Expected. Opportunities to learn."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      fontWeight: 700,
      color: "var(--fill-text-red)",
      marginBottom: 4
    }
  }, "NEVER USE"), ["Wrong", "Incorrect", "Failed"].map(w => /*#__PURE__*/React.createElement("div", {
    key: w,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--fill-text-red)",
      padding: "5px 12px",
      background: "var(--fill-surface-red)",
      borderRadius: 6
    }
  }, "\u2715 ", w)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      fontWeight: 700,
      color: "var(--color-green-700)",
      marginTop: 10,
      marginBottom: 4
    }
  }, "INSTEAD"), ["Not quite.", "Good try.", "Let's look at that again.", "Almost!", "Here's a helpful hint."].map(w => /*#__PURE__*/React.createElement("div", {
    key: w,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--color-green-700)",
      padding: "5px 12px",
      background: "var(--fill-surface-green)",
      borderRadius: 6
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 24px",
      borderRadius: "var(--radius-md-px)",
      background: "var(--surface-elevated)",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--color-gray-400)",
      marginBottom: 14
    }
  }, "What Lucas Never Does"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, [{
    rule: "He Never Shames",
    ex: "You should already know this."
  }, {
    rule: "He Never Lectures",
    ex: "It is important to understand..."
  }, {
    rule: "He Never Uses Jargon Without Explanation",
    ex: "Evaluate your DTI before underwriting."
  }, {
    rule: "He Never Sounds Corporate",
    ex: "Thank you for completing this educational module."
  }, {
    rule: "He Never Sounds Salesy",
    ex: "NFM Lending is the perfect choice for your mortgage needs."
  }].map(({
    rule,
    ex
  }) => /*#__PURE__*/React.createElement("div", {
    key: rule,
    style: {
      paddingBottom: 10,
      borderBottom: "1px solid var(--stroke-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 12,
      color: "var(--text-primary)",
      marginBottom: 3
    }
  }, rule), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontStyle: "italic",
      color: "var(--fill-text-red)"
    }
  }, "\u2715 ", ex)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--color-gray-400)",
      marginBottom: 14
    }
  }, "Signature Phrases"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
      gap: 12,
      marginBottom: 36
    }
  }, [{
    group: "Greetings",
    phrases: ["Hi, I'm Lucas!", "Back to learn more? Great!", "Ready to get started?", "Let's jump in!", "Welcome back!"]
  }, {
    group: "Encouragement",
    phrases: ["Nice work!", "You've got this.", "Keep it up.", "Great job.", "You're making progress."]
  }, {
    group: "Guidance",
    phrases: ["Let's take a look.", "Here's how it works.", "Let's break it down.", "One step at a time."]
  }, {
    group: "Celebration",
    phrases: ["Way to go!", "You did it!", "That's a big step.", "Another milestone unlocked!"]
  }].map(({
    group,
    phrases
  }) => /*#__PURE__*/React.createElement("div", {
    key: group,
    style: {
      padding: "18px 20px",
      borderRadius: "var(--radius-md-px)",
      background: "var(--surface-elevated)",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--color-brand-600)",
      marginBottom: 10
    }
  }, group), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5
    }
  }, phrases.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-body)",
      lineHeight: 1.5
    }
  }, p)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 28px",
      borderRadius: "var(--radius-md-px)",
      background: "var(--fill-surface-yellow)",
      border: "1.5px solid var(--color-brand-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--color-brand-700)",
      marginBottom: 12
    }
  }, "The Lucas Test"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--fill-text-yellow)",
      marginBottom: 14
    }
  }, "Before publishing any Lucas copy, ask:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: 8
    }
  }, ["Does this sound like a friend?", "Would a first-time homebuyer understand it?", "Does it reduce anxiety?", "Does it encourage progress?", "Could a fifth grader read it?", "Does it sound human?"].map(q => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 8,
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--fill-text-yellow)",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      flex: "none"
    }
  }, "\u2713"), q))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontStyle: "italic",
      color: "var(--color-brand-700)",
      marginTop: 14
    }
  }, "If the answer to any question is \"no,\" rewrite it."))), /*#__PURE__*/React.createElement(SubSection, {
    id: "brand-logo",
    title: "Logo & Icon Styles",
    intro: "The LUCAS wordmark adapts across light and dark surfaces. Use logo-light.svg on bright backgrounds, logo-dark.svg on dark."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isMobile ? "32px 24px" : "48px 40px",
      borderRadius: "var(--radius-lg-px)",
      background: "var(--color-gray-50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO("logo_light") || "assets/logo-light.svg",
    alt: "LUCAS light logo",
    style: {
      height: "100px",
      width: "181px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isMobile ? "32px 24px" : "48px 40px",
      borderRadius: "var(--radius-lg-px)",
      background: "var(--color-gray-900)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO("logo_dark") || "assets/logo-dark.svg",
    alt: "LUCAS dark logo",
    style: {
      height: "100px"
    }
  })))), /*#__PURE__*/React.createElement(SubSection, {
    id: "brand-lucas",
    title: "Little Lucas Avatars",
    intro: "The house-shaped robot copilot \u2014 the emotional anchor of the app. 14 base moods + 7 costume variants cover every scenario in the 10-module course."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--color-gray-400)",
      marginBottom: 16
    }
  }, "Base Moods"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: isMobile ? 12 : 20
    }
  }, moods.map(m => {
    const moodW = isMobile ? 56 : m === "welcoming" ? 200 : m === "running" ? 175 : 150;
    return /*#__PURE__*/React.createElement("div", {
      key: m,
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(LucasAvatar, _extends({
      mood: m,
      size: isMobile ? 56 : 76,
      basePath: LUCAS
    }, RES(m) ? {
      src: RES(m)
    } : {}, {
      style: {
        width: moodW,
        height: isMobile ? 56 : 200,
        objectFit: "cover"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: 10,
        fontWeight: 600,
        color: "var(--color-gray-500)",
        marginTop: 6,
        textTransform: "capitalize"
      }
    }, m));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--color-gray-400)",
      marginBottom: 16
    }
  }, "Costume Variants"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: isMobile ? 12 : 20
    }
  }, costumes.map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(LucasAvatar, _extends({
    mood: c,
    size: isMobile ? 56 : 76,
    basePath: LUCAS
  }, RES(c) ? {
    src: RES(c)
  } : {}, {
    style: {
      width: isMobile ? 56 : 150,
      height: isMobile ? 56 : 200,
      objectFit: "contain"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      fontWeight: 600,
      color: "var(--color-gray-500)",
      marginTop: 6
    }
  }, c)))))));
}

// ── 03 · COLORS ──────────────────────────────────────────────

function SemanticGroup({
  title,
  desc,
  tokens,
  cols = 2
}) {
  const {
    isMobile
  } = useResponsive();
  const effectiveCols = isMobile ? 1 : cols;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 12,
      paddingBottom: 10,
      borderBottom: "2px solid var(--stroke-subtle)",
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: "-.01em",
      color: "var(--text-primary)"
    }
  }, title), desc && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-body)"
    }
  }, desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${effectiveCols}, 1fr)`,
      gap: "0 48px"
    }
  }, tokens.map(([token, label, note]) => /*#__PURE__*/React.createElement("div", {
    key: token,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "9px 0",
      borderBottom: "1px solid var(--stroke-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 7,
      background: "var(" + token + ")",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 600,
      color: "var(--text-primary)",
      whiteSpace: "nowrap"
    }
  }, label), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      color: "var(--color-gray-400)",
      whiteSpace: "nowrap"
    }
  }, note)), /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      color: "var(--color-gray-500)"
    }
  }, token))))));
}
function Colors() {
  return /*#__PURE__*/React.createElement(PageSection, {
    id: "colors",
    eyebrow: "03 \xB7 Colors",
    title: "Colors",
    intro: "Brand yellow #FFC000 leads. Gray 50\u2013900 builds every surface and text tone. Semantic tokens are mode-aware \u2014 they flip automatically between light and dark."
  }, /*#__PURE__*/React.createElement(ColorScale, {
    label: "Brand Yellow",
    prefix: "brand",
    steps: ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]
  }), /*#__PURE__*/React.createElement(ColorScale, {
    label: "Gray",
    prefix: "gray",
    steps: ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]
  }), /*#__PURE__*/React.createElement(ColorScale, {
    label: "Green \xB7 Success",
    prefix: "green",
    steps: ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]
  }), /*#__PURE__*/React.createElement(ColorScale, {
    label: "Red \xB7 Error",
    prefix: "red",
    steps: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  }), /*#__PURE__*/React.createElement(ColorScale, {
    label: "Orange \xB7 Warning",
    prefix: "orange",
    steps: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--color-brand-600)",
      marginBottom: 6
    }
  }, "Semantic Tokens"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: 0,
      maxWidth: 600
    }
  }, "All tokens below are mode-aware \u2014 values automatically switch between light and dark. Use these everywhere; never reference a primitive (e.g. ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12
    }
  }, "--color-gray-900"), ") directly in component code.")), /*#__PURE__*/React.createElement(SemanticGroup, {
    title: "Surfaces",
    desc: "Background layers, cards, recessed wells",
    cols: 2,
    tokens: [["--surface-background", "Background", "Page canvas"], ["--surface-elevated", "Elevated", "Cards, panels, popovers"], ["--surface-primary", "Primary", "Primary content surface"], ["--surface-recessed", "Recessed", "Inset wells, disabled fills"], ["--surface-dark", "Dark", "Toasts, always-dark surfaces"], ["--surface-light", "Light", "Always-light surface"], ["--surface-secondary", "Secondary", "Inverted surface"], ["--fill-inactive", "Inactive", "Dots, segments, track fills"]]
  }), /*#__PURE__*/React.createElement(SemanticGroup, {
    title: "Text",
    desc: "Type color for every role",
    cols: 2,
    tokens: [["--text-primary", "Primary", "Headings, strong body"], ["--text-body", "Body", "Default body copy"], ["--text-brand", "Brand", "Brand yellow text"], ["--text-dark", "Dark", "Always dark (both modes)"], ["--text-light", "Light", "Always light (both modes)"], ["--text-secondary", "Secondary", "Inverted / secondary text"], ["--text-on-action-primary", "On Action Primary", "Text on primary button"], ["--answer-letter-color", "Answer Letter", "Letter badge text in quiz"]]
  }), /*#__PURE__*/React.createElement(SemanticGroup, {
    title: "Text \xB7 Action States",
    desc: "Text colors for interactive state feedback",
    cols: 2,
    tokens: [["--text-action-active", "Action / Active", "Focused & pressed"], ["--text-action-inactive", "Action / Inactive", "Placeholder, muted"], ["--text-action-disabled", "Action / Disabled", "Unavailable"], ["--text-action-error", "Action / Error", "Error labels & helpers"], ["--text-action-success", "Action / Success", "Success labels & helpers"]]
  }), /*#__PURE__*/React.createElement(SemanticGroup, {
    title: "Stroke",
    desc: "Borders, dividers, focus rings",
    cols: 2,
    tokens: [["--stroke-subtle", "Subtle", "Hairline dividers, section lines"], ["--stroke-primary", "Primary", "Default card & input borders"], ["--stroke-action-default", "Action / Default", "Unfocused input ring"], ["--stroke-action-active", "Action / Active", "Focus ring"], ["--stroke-action-disabled", "Action / Disabled", "Disabled input ring"], ["--stroke-action-error", "Action / Error", "Error input & callout border"], ["--stroke-action-success", "Action / Success", "Success border"]]
  }), /*#__PURE__*/React.createElement(SemanticGroup, {
    title: "Action Surfaces \xB7 Primary",
    desc: "Black in light mode, yellow in dark mode",
    cols: 3,
    tokens: [["--surface-action-primary-default", "Default", ""], ["--surface-action-primary-hover", "Hover", ""], ["--surface-action-primary-disabled", "Disabled", ""], ["--surface-action-primary-error", "Error", ""], ["--surface-action-primary-success", "Success", ""]]
  }), /*#__PURE__*/React.createElement(SemanticGroup, {
    title: "Action Surfaces \xB7 Secondary",
    desc: "Outlined / ghost button backgrounds",
    cols: 3,
    tokens: [["--surface-action-secondary-default", "Default", ""], ["--surface-action-secondary-hover", "Hover", ""], ["--surface-action-secondary-disabled", "Disabled", ""]]
  }), /*#__PURE__*/React.createElement(SemanticGroup, {
    title: "Action Surfaces \xB7 Tertiary",
    desc: "Yellow CTA button \u2014 consistent across modes",
    cols: 3,
    tokens: [["--surface-action-tertiary-default", "Default", ""], ["--surface-action-tertiary-hover", "Hover", ""], ["--surface-action-tertiary-disabled", "Disabled", ""]]
  }), /*#__PURE__*/React.createElement(SemanticGroup, {
    title: "Fill \xB7 Semantic Pairs",
    desc: "Tinted surface + legible text color for each status",
    cols: 2,
    tokens: [["--fill-surface-yellow", "Surface / Yellow", "Info, tips, brand callouts"], ["--fill-text-yellow", "Text / Yellow", "Label on yellow surface"], ["--fill-surface-green", "Surface / Green", "Correct, success callouts"], ["--fill-text-green", "Text / Green", "Label on green surface"], ["--fill-surface-red", "Surface / Red", "Error, incorrect callouts"], ["--fill-text-red", "Text / Red", "Label on red surface"], ["--fill-surface-orange", "Surface / Orange", "Warning callouts"], ["--fill-text-orange", "Text / Orange", "Label on orange surface"]]
  }), /*#__PURE__*/React.createElement(SemanticGroup, {
    title: "Fill \xB7 Utility",
    desc: "Direct fill values for icons, shapes, and decorative elements",
    cols: 2,
    tokens: [["--fill-primary", "Primary", "Main fill — dark in light, light in dark"], ["--fill-secondary", "Secondary", "Inverted fill"], ["--fill-dark", "Dark", "Always-dark fill"], ["--fill-light", "Light", "Always-light fill"], ["--fill-yellow", "Yellow", "Brand yellow fill"], ["--fill-green", "Green", "Success green fill"], ["--fill-red", "Red", "Error red fill"], ["--fill-orange", "Orange", "Warning orange fill"], ["--fill-gray-1", "Gray 1", "Muted icon / secondary fill"], ["--fill-gray-2", "Gray 2", "Dimmer icon fill"], ["--fill-surface-gray", "Surface / Gray", "Gray tinted surface"], ["--fill-semantic-primary", "Semantic Primary", "Semantic overlay fill"]]
  }), /*#__PURE__*/React.createElement(SemanticGroup, {
    title: "Component \xB7 Answer Row",
    desc: "Letter badge colors in the quiz AnswerRow component",
    cols: 2,
    tokens: [["--answer-letter-bg", "Letter Badge BG", "Circle behind A / B / C / D"], ["--answer-letter-color", "Letter Badge Text", "Letter glyph on the badge"]]
  }));
}

// ── 04 · TYPOGRAPHY ──────────────────────────────────────────

function Typography() {
  const {
    isMobile
  } = useResponsive();
  const scales = [{
    cat: "Display",
    items: [{
      name: "Display",
      fam: "var(--font-display)",
      w: 800,
      sz: 36,
      ls: "-0.02em",
      sample: "YOU DID IT"
    }]
  }, {
    cat: "Headline",
    items: [{
      name: "Headline XL",
      fam: "var(--font-display)",
      w: 700,
      sz: 32,
      ls: "-0.015em",
      sample: "Let's get started"
    }, {
      name: "Headline LG",
      fam: "var(--font-display)",
      w: 700,
      sz: 24,
      ls: "-0.015em",
      sample: "Create a Password"
    }, {
      name: "Headline MD",
      fam: "var(--font-display)",
      w: 600,
      sz: 20,
      ls: "-0.01em",
      sample: "Understanding Your Budget"
    }]
  }, {
    cat: "Body",
    items: [{
      name: "Body XL",
      fam: "var(--font-body)",
      w: 400,
      sz: 20,
      ls: "0",
      sample: "Finish all modules to unlock closing."
    }, {
      name: "Body LG",
      fam: "var(--font-body)",
      w: 400,
      sz: 18,
      ls: "0",
      sample: "Your progress is saved automatically."
    }, {
      name: "Body MD",
      fam: "var(--font-body)",
      w: 400,
      sz: 16,
      ls: "0",
      sample: "Your access code from the invite email."
    }, {
      name: "Body SM",
      fam: "var(--font-body)",
      w: 400,
      sz: 14,
      ls: "0",
      sample: "NFM Lending · Home Buyer Education"
    }]
  }, {
    cat: "Label",
    items: [{
      name: "Label MD",
      fam: "var(--font-display)",
      w: 600,
      sz: 14,
      ls: ".02em",
      sample: "MODULE 1 · 12 MIN"
    }, {
      name: "Label SM — Inter",
      fam: "var(--font-ui)",
      w: 600,
      sz: 12,
      ls: ".04em",
      sample: "SCORE · 87%"
    }, {
      name: "Label XS — Inter",
      fam: "var(--font-ui)",
      w: 600,
      sz: 10,
      ls: ".06em",
      sample: "LUC-8472-XK · ROBERT JOHNSON"
    }]
  }];
  return /*#__PURE__*/React.createElement(PageSection, {
    id: "typography",
    eyebrow: "04 \xB7 Typography",
    title: "Typography",
    intro: "Noto Sans carries the voice \u2014 display and headlines run heavy with tight negative tracking. Body stays at 400 for calm readability. Inter steps in only for codes and fine data."
  }, scales.map(({
    cat,
    items
  }) => /*#__PURE__*/React.createElement("div", {
    key: cat,
    id: "type-" + cat.toLowerCase(),
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--color-gray-400)",
      paddingBottom: 8,
      borderBottom: "1px solid var(--stroke-subtle)",
      marginBottom: 0
    }
  }, cat), items.map(({
    name,
    fam,
    w,
    sz,
    ls,
    sample
  }) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 24,
      padding: "14px 0",
      borderBottom: "1px solid var(--stroke-subtle)",
      borderWidth: "0px 0px 1px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 160,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      color: "var(--color-gray-500)",
      marginTop: 2
    }
  }, sz, "px / ", w)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: fam,
      fontWeight: w,
      fontSize: sz,
      letterSpacing: ls,
      color: "var(--text-primary)",
      lineHeight: 1.2
    }
  }, sample))))));
}

// ── 05 · SPACING ─────────────────────────────────────────────

function Spacing() {
  const scale = [{
    n: "2xs",
    px: 4
  }, {
    n: "xs",
    px: 8
  }, {
    n: "sm",
    px: 12
  }, {
    n: "md",
    px: 16
  }, {
    n: "lg",
    px: 20
  }, {
    n: "xl",
    px: 24
  }, {
    n: "2xl",
    px: 32
  }, {
    n: "3xl",
    px: 40
  }, {
    n: "4xl",
    px: 60
  }];
  return /*#__PURE__*/React.createElement(PageSection, {
    id: "spacing",
    eyebrow: "05 \xB7 Spacing",
    title: "Spacing",
    intro: "A 4-point grid underlies every layout. Scale from tight 2xs (4px) to generous 4xl (60px) \u2014 all intermediate steps are predictable multiples."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 28,
      flexWrap: "wrap"
    }
  }, scale.map(({
    n,
    px
  }) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      color: "var(--text-body)"
    }
  }, px, "px"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: px,
      background: "var(--color-brand-500)",
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: 10
    }
  }, scale.map(({
    n,
    px
  }) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 14px",
      borderRadius: "var(--radius-xs-px)",
      background: "var(--surface-elevated)",
      boxShadow: "var(--shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.min(px, 28),
      height: Math.min(px, 28),
      background: "var(--color-brand-400)",
      borderRadius: 2,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "--space-", n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      color: "var(--text-body)",
      marginTop: 1
    }
  }, px, "px"))))));
}

// ── 06 · RADIUS ──────────────────────────────────────────────

function Radius() {
  const scale = [{
    n: "2xs",
    px: 4,
    token: "--radius-2xs-px"
  }, {
    n: "xs",
    px: 8,
    token: "--radius-xs-px"
  }, {
    n: "sm",
    px: 12,
    token: "--radius-sm-px"
  }, {
    n: "md",
    px: 16,
    token: "--radius-md-px"
  }, {
    n: "lg",
    px: 20,
    token: "--radius-lg-px"
  }, {
    n: "xl",
    px: 24,
    token: "--radius-xl-px"
  }, {
    n: "pill",
    px: 999,
    token: "--radius-pill"
  }];
  const mapping = [{
    comp: "Chips (tiny), Segmented control",
    r: "2xs — 4px"
  }, {
    comp: "Inputs, Badges, Status pills",
    r: "xs — 8px"
  }, {
    comp: "Buttons, Callouts, Answer rows",
    r: "sm — 12px"
  }, {
    comp: "Cards",
    r: "md — 16px"
  }, {
    comp: "Large cards, Bottom sheets",
    r: "lg — 20px"
  }, {
    comp: "Hero / Banner cards",
    r: "xl — 24px"
  }, {
    comp: "Filter chips, Avatars, Toggle pills",
    r: "pill — 999px"
  }];
  return /*#__PURE__*/React.createElement(PageSection, {
    id: "radius",
    eyebrow: "06 \xB7 Radius",
    title: "Radius",
    intro: "LUCAS is soft everywhere \u2014 nothing is squared. Corners range from a subtle 4px chip to a fully rounded pill."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 28,
      alignItems: "flex-end"
    }
  }, scale.map(({
    n,
    px,
    token
  }) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 60,
      background: "var(--color-brand-500)",
      borderRadius: Math.min(px, 30)
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      color: "var(--color-gray-500)"
    }
  }, px >= 999 ? "999" : px, "px")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--color-gray-400)",
      marginBottom: 14
    }
  }, "Component Mapping"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: 10
    }
  }, mapping.map(({
    comp,
    r
  }) => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      padding: "12px 16px",
      borderRadius: "var(--radius-xs-px)",
      background: "var(--surface-elevated)",
      boxShadow: "var(--shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 700,
      color: "var(--text-primary)",
      marginBottom: 3
    }
  }, r), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-body)"
    }
  }, comp))))));
}

// ── 07 · EFFECTS ─────────────────────────────────────────────

function Effects() {
  const shadows = [{
    n: "xs",
    token: "--shadow-xs",
    desc: "Hairline lift — inputs, small pills"
  }, {
    n: "sm",
    token: "--shadow-sm",
    desc: "Subtle card depth"
  }, {
    n: "md",
    token: "--shadow-md",
    desc: "Elevated card — default"
  }, {
    n: "lg",
    token: "--shadow-lg",
    desc: "Sheet / modal — high elevation"
  }, {
    n: "card",
    token: "--shadow-card",
    desc: "Base card — used across all card surfaces"
  }, {
    n: "success",
    token: "--shadow-success",
    desc: "Tinted green glow for correct states"
  }, {
    n: "error",
    token: "--shadow-error",
    desc: "Tinted red glow for error / incorrect"
  }];
  return /*#__PURE__*/React.createElement(PageSection, {
    id: "effects",
    eyebrow: "07 \xB7 Effects",
    title: "Effects",
    intro: "Gentle, low-contrast shadows. Nothing harsh. Elevation communicates hierarchy without overwhelming the warm yellow brand."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 16
    }
  }, shadows.map(({
    n,
    token,
    desc
  }) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      flex: "1 1 180px",
      padding: "24px 20px",
      borderRadius: "var(--radius-md-px)",
      background: "var(--surface-elevated)",
      boxShadow: "var(" + token + ")"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      fontWeight: 700,
      color: "var(--text-primary)",
      marginBottom: 4
    }
  }, "shadow-", n), /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 9,
      color: "var(--text-body)",
      display: "block",
      marginBottom: 8
    }
  }, token), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-body)"
    }
  }, desc)))));
}

// ── 08 · COMPONENTS ──────────────────────────────────────────

function Components() {
  const [chips, setChips] = React.useState({
    all: true,
    unread: false,
    flagged: false
  });
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
  return /*#__PURE__*/React.createElement(PageSection, {
    id: "components",
    eyebrow: "08 \xB7 Components",
    title: "Components",
    intro: "Every component on its own full-width row with all interactive states visible side by side. Click into live examples \u2014 they respond."
  }, /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-accordion",
    name: "Accordion",
    tag: "<Accordion/>",
    desc: "Vertically stacked expandable sections. Click a header to expand/collapse. Default: single-open; set multiple for all-open."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Single-open (default)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      title: "What is a credit score?",
      content: "A three-digit number (300–850) that summarises your credit history. Lenders use it to assess risk before approving a mortgage."
    }, {
      title: "How much do I need for a down payment?",
      content: "Conventional loans often require 3–20%. FHA loans allow as low as 3.5%. Your loan officer will walk you through the best option for your situation."
    }, {
      title: "What is debt-to-income ratio?",
      content: "DTI compares your monthly debt payments to your gross monthly income. Most lenders prefer a DTI below 43%."
    }]
  })))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Multi-open"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Accordion, {
    multiple: true,
    items: [{
      title: "Can I open both at once?",
      content: "Yes — in multi-open mode all sections can be expanded simultaneously."
    }, {
      title: "When should I use accordion?",
      content: "Use for FAQ sections, glossary entries, or any long-form content that benefits from progressive disclosure."
    }]
  }))))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-answerrow",
    name: "AnswerRow",
    tag: "<AnswerRow/>",
    desc: "Quiz option that grades in place. Pick an answer to resolve correct / incorrect. Letter-coded A\u2013D."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Interactive \u2014 try it"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      width: "100%",
      maxWidth: 520
    }
  }, answers.map((a, i) => /*#__PURE__*/React.createElement(Safe, {
    key: i
  }, /*#__PURE__*/React.createElement(AnswerRow, {
    letter: String.fromCharCode(65 + i),
    state: answer === null ? "default" : i === correct ? "correct" : i === answer ? "incorrect" : "default",
    onClick: () => setAns(i)
  }, a))), answer !== null && /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Button, {
    type: "secondary",
    size: "sm",
    onClick: () => setAns(null)
  }, "Reset"))))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-avatar",
    name: "Avatar",
    tag: "<Avatar/>",
    desc: "User profile display \u2014 image or initials on brand yellow. Circle, rounded, or square shape. Optional status indicator dot."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Image vs initials"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "Robert Johnson",
    size: 48
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "Maria Chen",
    size: 48
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "Tom",
    size: 48
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Avatar, {
    src: "https://i.pravatar.cc/96?img=12",
    name: "Priya",
    size: 48
  }))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Sizes"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "RJ",
    size: 24
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "RJ",
    size: 32
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "RJ",
    size: 40
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "RJ",
    size: 56
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "RJ",
    size: 72
  }))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Shapes"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "RJ",
    size: 48,
    shape: "circle"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "RJ",
    size: 48,
    shape: "rounded"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "RJ",
    size: 48,
    shape: "square"
  }))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Status indicators"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "RJ",
    size: 44,
    indicator: "online"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "RJ",
    size: 44,
    indicator: "away"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "RJ",
    size: 44,
    indicator: "busy"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "RJ",
    size: 44,
    indicator: "offline"
  })))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-bottomsheet",
    name: "BottomSheet",
    tag: "<BottomSheet/>",
    desc: "iOS-style modal sheet \u2014 rises from the bottom with a blurred backdrop. Tap the button to open it live. Use contained for demos."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Live demo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: 420,
      height: 320,
      borderRadius: "var(--radius-lg-px)",
      background: "var(--surface-recessed)",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Button, {
    type: "secondary",
    onClick: () => setSheetOpen(true)
  }, "Open Bottom Sheet")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(BottomSheet, {
    open: sheetOpen,
    onClose: () => setSheetOpen(false),
    title: "Choose a Module",
    contained: true
  }, ["Understanding Your Budget", "Your Credit Score", "Down Payment Basics"].map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setSheetOpen(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "14px 0",
      borderBottom: i < 2 ? "1px solid var(--stroke-subtle)" : "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "var(--radius-xs-px)",
      background: "var(--fill-surface-yellow)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 18,
      color: "var(--fill-text-yellow)"
    }
  }, "menu_book")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-primary)",
      flex: 1
    }
  }, m), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 18,
      color: "var(--color-gray-400)"
    }
  }, "chevron_right")))))))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-button",
    name: "Button",
    tag: "<Button/>",
    desc: "Primary tap target. Primary (black in light / yellow in dark), secondary (outlined), tertiary (yellow). Press any to feel the active scale."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Types"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Button, {
    type: "primary"
  }, "Access My Education")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Button, {
    type: "secondary"
  }, "Maybe Later")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Button, {
    type: "tertiary"
  }, "Start Module"))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Sizes"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Large")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Button, {
    size: "md"
  }, "Medium")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Small"))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Disabled"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Button, {
    disabled: true
  }, "Primary")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Button, {
    type: "secondary",
    disabled: true
  }, "Secondary")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Button, {
    type: "tertiary",
    disabled: true
  }, "Tertiary")))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-callout",
    name: "Callout",
    tag: "<Callout/>",
    desc: "Inline feedback \u2014 the heart of the 'never wrong, always reframe' voice. Even incorrect stays encouraging."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Tones"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
      gap: 16,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Callout, {
    status: "correct",
    title: "You've got it!"
  }, "Exactly right \u2014 paying on time is the single most powerful action.")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Callout, {
    status: "incorrect",
    title: "Not Quite \u2014 2 Attempts Remaining"
  }, "Payment history (35%) is the biggest factor.")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Callout, {
    status: "warning",
    title: "Heads up"
  }, "Your utilization is creeping above 30%.")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Callout, {
    status: "info",
    title: "Little tip from Lucas"
  }, "Most lenders like to see utilization under 30%."))))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-card",
    name: "Card",
    tag: "<Card/>",
    desc: "Base surface in four tones: default for content, recessed for inset areas, brand for CTAs, dark for celebration."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Tones"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr))",
      gap: 14,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, "Default"))), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Card, {
    tone: "recessed"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, "Recessed"))), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Card, {
    tone: "brand"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "rgb(18,18,18)"
    }
  }, "Brand"))), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Card, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--color-gray-50)"
    }
  }, "Dark / Celebration")))))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-checkbox",
    name: "Checkbox",
    tag: "<Checkbox/>",
    desc: "Rounded-square checkbox. Toggle to see the active fill. Supports disabled and error states."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "States"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Checkbox, {
    checked: check,
    label: "I agree to the terms",
    onChange: setCheck
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Checkbox, {
    checked: false,
    label: "Email me updates",
    onChange: () => {}
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    disabled: true,
    label: "Disabled checked"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Checkbox, {
    checked: false,
    disabled: true,
    label: "Disabled unchecked"
  })))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-chip",
    name: "Chip",
    tag: "<Chip/>",
    desc: "Selectable filter pill \u2014 outlined off, yellow on. Supports leading icon and count badge. Click to toggle."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Interactive"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Chip, {
    selected: chips.all,
    count: 2,
    leadingIcon: "mail",
    onClick: () => setChips(c => ({
      ...c,
      all: !c.all
    }))
  }, "All Mail")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Chip, {
    selected: chips.unread,
    onClick: () => setChips(c => ({
      ...c,
      unread: !c.unread
    }))
  }, "Unread")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Chip, {
    selected: chips.flagged,
    leadingIcon: "flag",
    onClick: () => setChips(c => ({
      ...c,
      flagged: !c.flagged
    }))
  }, "Flagged"))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Static states"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Chip, {
    selected: true
  }, "Selected")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Chip, {
    selected: false
  }, "Default")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Chip, {
    selected: false,
    leadingIcon: "star"
  }, "With icon")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Chip, {
    selected: true,
    count: 5
  }, "With count")))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-emptystate",
    name: "EmptyState",
    tag: "<EmptyState/>",
    desc: "Zero-data placeholder \u2014 icon badge, title, body copy, and optional action. Fills any container."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Scenarios"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
      gap: 16,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-md-px)",
      background: "var(--surface-elevated)",
      boxShadow: "var(--shadow-card)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "inbox",
    title: "No messages yet",
    body: "Your loan officer will reach out here once you complete the course."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-md-px)",
      background: "var(--surface-elevated)",
      boxShadow: "var(--shadow-card)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "school",
    title: "No modules started",
    body: "Begin Module 1 to start tracking your progress.",
    action: /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Button, {
      type: "tertiary",
      size: "sm"
    }, "Start Learning"))
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-md-px)",
      background: "var(--surface-elevated)",
      boxShadow: "var(--shadow-card)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "search_off",
    title: "No results found",
    body: "Try adjusting your search or browse all modules."
  })))))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-headernav",
    name: "HeaderNav",
    tag: "<HeaderNav/>",
    desc: "App top bar: back chevron, screen title, and optional trailing action. Supports default and brand tones."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Default tone"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 420,
      borderRadius: "var(--radius-md-px)",
      overflow: "hidden",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(HeaderNav, {
    title: "Your Credit Score",
    onBack: () => {}
  })))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Brand tone"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 420,
      borderRadius: "var(--radius-md-px)",
      overflow: "hidden",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(HeaderNav, {
    title: "Module Complete",
    tone: "brand"
  }))))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-iconbutton",
    name: "IconButton",
    tag: "<IconButton/>",
    desc: "Round, icon-only control for headers and toolbars. Material Symbols Rounded glyphs. 44px minimum tap target."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Types"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow_back",
    type: "primary"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(IconButton, {
    icon: "close",
    type: "secondary"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(IconButton, {
    icon: "add",
    type: "tertiary"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bookmark",
    type: "ghost"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(IconButton, {
    icon: "share",
    type: "ghost"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(IconButton, {
    icon: "help",
    type: "ghost"
  }))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Disabled"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(IconButton, {
    icon: "lock",
    disabled: true
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(IconButton, {
    icon: "edit",
    type: "secondary",
    disabled: true
  })))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-input",
    name: "Input",
    tag: "<Input/>",
    desc: "Labelled field. Hairline border darkens on focus, turns red on error. Supports dropdown and multiline variants."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "States"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
      gap: 14,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Input, {
    label: "Default",
    placeholder: "Enter password"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Input, {
    label: "Active",
    value: "hunter2",
    state: "active",
    onChange: () => {}
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Input, {
    label: "Error",
    value: "abc",
    state: "error",
    helperText: "Must be 8+ characters",
    onChange: () => {}
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Input, {
    label: "Disabled",
    placeholder: "Unavailable",
    state: "disabled"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Input, {
    label: "Dropdown",
    placeholder: "Select a state",
    dropdown: true
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    placeholder: "How can we help?",
    multiline: true
  }))))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-mobilefooter",
    name: "MobileFooter",
    tag: "<MobileFooter/>",
    desc: "Sticky bottom action bar holding 1\u20132 stacked buttons. Provides the primary CTA on every content screen."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "With primary action"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 420,
      borderRadius: "var(--radius-md-px)",
      overflow: "hidden",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(MobileFooter, {
    primary: /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      style: {
        width: "100%"
      }
    }, "Continue to Module 3")
  })))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "With primary + secondary"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 420,
      borderRadius: "var(--radius-md-px)",
      overflow: "hidden",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(MobileFooter, {
    primary: /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      style: {
        width: "100%"
      }
    }, "Submit Quiz"),
    secondary: /*#__PURE__*/React.createElement(Button, {
      type: "secondary",
      style: {
        width: "100%"
      }
    }, "Review Answers")
  }))))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-moduleitem",
    name: "ModuleItem",
    tag: "<ModuleItem/>",
    desc: "A row in the 10-module HBE list: green check (completed), yellow play (active), or gray lock. Trailing badge shows status."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "All states"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      width: "100%",
      maxWidth: 500
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(ModuleItem, {
    status: "completed",
    title: "Understanding Your Budget",
    meta: "Module 1 \xB7 12 Min",
    badge: /*#__PURE__*/React.createElement(StatusBadge, {
      status: "success"
    }, "Done")
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(ModuleItem, {
    status: "active",
    title: "Your Credit Score",
    meta: "Module 2 \xB7 12 Min",
    badge: /*#__PURE__*/React.createElement(StatusBadge, {
      status: "solidBrand"
    }, "Start")
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(ModuleItem, {
    status: "locked",
    title: "Debt-to-Income Ratio",
    meta: "Module 5 \xB7 10 Min",
    badge: /*#__PURE__*/React.createElement(StatusBadge, {
      status: "neutral",
      icon: "lock"
    }, "Locked")
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(ModuleItem, {
    status: "locked",
    title: "Closing Day",
    meta: "Module 10 \xB7 15 Min",
    badge: /*#__PURE__*/React.createElement(StatusBadge, {
      status: "neutral",
      icon: "lock"
    }, "Locked")
  }))))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-paginationdots",
    name: "PaginationDots",
    tag: "<PaginationDots/>",
    desc: "Onboarding position indicator. Active dot stretches into a yellow pill. Click any dot to jump."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Interactive"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(PaginationDots, {
    count: 5,
    active: dot,
    onDotClick: setDot
  }))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Counts"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(PaginationDots, {
    count: 3,
    active: 0
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(PaginationDots, {
    count: 4,
    active: 2
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(PaginationDots, {
    count: 6,
    active: 4
  })))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-progressbar",
    name: "ProgressBar",
    tag: "<ProgressBar/>",
    desc: "Segmented or continuous indicator for module and quiz completion tracking."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Segmented \u2014 2 of 5"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 2,
    total: 5
  })))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Continuous \u2014 70%"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 70,
    total: 100,
    segmented: false
  })))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Fill progression"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      width: "100%",
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 0,
    total: 5
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 2,
    total: 5
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 4,
    total: 5
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 5,
    total: 5
  }))))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-radiobutton",
    name: "RadioButton",
    tag: "<RadioButton/>",
    desc: "Ringed radio for single-select quiz and preference options. Interactive \u2014 click to select."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Interactive"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(RadioButton, {
    checked: radio === "a",
    label: "Payment history (35%)",
    onChange: () => setRadio("a")
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(RadioButton, {
    checked: radio === "b",
    label: "Credit utilization (30%)",
    onChange: () => setRadio("b")
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(RadioButton, {
    checked: radio === "c",
    label: "Credit history length (15%)",
    onChange: () => setRadio("c")
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(RadioButton, {
    error: true,
    label: "Errored option",
    onChange: () => {}
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(RadioButton, {
    checked: true,
    disabled: true,
    label: "Disabled (selected)",
    onChange: () => {}
  })))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-searchbar",
    name: "SearchBar",
    tag: "<SearchBar/>",
    desc: "Pill-shaped search input with leading icon, yellow focus ring, and clear button. Fully controlled."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Interactive \u2014 try typing"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(SearchBar, {
    value: searchQ,
    onChange: setSearchQ,
    placeholder: "Search modules, topics\u2026"
  })))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "States"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      width: "100%",
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(SearchBar, {
    value: "",
    placeholder: "Default (empty)",
    onChange: () => {}
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(SearchBar, {
    value: "Credit score",
    placeholder: "With value",
    onChange: () => {}
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(SearchBar, {
    value: "",
    placeholder: "Disabled",
    disabled: true
  }))))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-skeleton",
    name: "Skeleton",
    tag: "<Skeleton/>",
    desc: "Shimmer loading placeholder \u2014 size to match the real content it stands in for. Chain multiples for a full-page loading state."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Content placeholders"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      width: "100%",
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Skeleton, {
    circle: true,
    height: 44
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Skeleton, {
    height: 14,
    width: "60%"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Skeleton, {
    height: 11,
    width: "40%"
  })))), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Skeleton, {
    height: 120,
    borderRadius: "var(--radius-md-px)"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Skeleton, {
    height: 14
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Skeleton, {
    height: 14,
    width: "85%"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Skeleton, {
    height: 14,
    width: "70%"
  })))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Shapes"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Skeleton, {
    circle: true,
    height: 48
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Skeleton, {
    height: 48,
    width: 120,
    borderRadius: "var(--radius-xs-px)"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Skeleton, {
    height: 48,
    width: 180,
    borderRadius: "var(--radius-md-px)"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Skeleton, {
    height: 48,
    width: 240,
    borderRadius: "var(--radius-pill)"
  })))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-segmented",
    name: "SegmentedControl",
    tag: "<SegmentedControl/>",
    desc: "One-of-N selector; the active segment fills yellow. Fully interactive."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "3 options"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(SegmentedControl, {
    options: ["Day", "Week", "Month"],
    value: seg,
    onChange: setSeg
  }))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "2 options"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(SegmentedControl, {
    options: ["Overview", "Details"],
    value: "Overview",
    onChange: () => {}
  }))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "4 options"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(SegmentedControl, {
    options: ["All", "Active", "Done", "Locked"],
    value: "Active",
    onChange: () => {}
  })))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-slider",
    name: "Slider",
    tag: "<Slider/>",
    desc: "Range input with branded track and knob. Use format for currency or percentage display. Fully interactive."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Budget slider \u2014 drag it"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Slider, {
    value: sliderVal,
    min: 100000,
    max: 750000,
    step: 5000,
    label: "Home Price Target",
    format: v => "$" + v.toLocaleString(),
    onChange: setSliderVal
  })))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Percentage"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Slider, {
    value: 30,
    min: 0,
    max: 100,
    label: "Credit Utilization",
    format: v => v + "%",
    onChange: () => {}
  })))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Disabled"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Slider, {
    value: 40,
    min: 0,
    max: 100,
    label: "Locked",
    disabled: true
  }))))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-stattile",
    name: "StatTile",
    tag: "<StatRow/>",
    desc: "A horizontal row of stat tiles split by hairline dividers. Used on the completion scoreboard."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Results scoreboard"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 460,
      background: "var(--surface-elevated)",
      borderRadius: "var(--radius-md-px)",
      padding: "20px 24px",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(StatRow, {
    items: [{
      label: "Total Time",
      value: "58 Min"
    }, {
      label: "Avg Score",
      value: "87%"
    }, {
      label: "Modules",
      value: "5/5"
    }]
  })))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Extended stats"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 540,
      background: "var(--surface-elevated)",
      borderRadius: "var(--radius-md-px)",
      padding: "20px 24px",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(StatRow, {
    items: [{
      label: "Days Active",
      value: "12"
    }, {
      label: "Avg Score",
      value: "92%"
    }, {
      label: "Correct",
      value: "47/52"
    }, {
      label: "Status",
      value: "Done"
    }]
  }))))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-statusbadge",
    name: "StatusBadge",
    tag: "<StatusBadge/>",
    desc: "Compact pill labeling module, answer or item state across all seven semantic tones."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "All tones"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(StatusBadge, {
    status: "success"
  }, "Done")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(StatusBadge, {
    status: "solidBrand"
  }, "Start")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(StatusBadge, {
    status: "error"
  }, "2 Attempts")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(StatusBadge, {
    status: "warning"
  }, "In Review")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(StatusBadge, {
    status: "brand"
  }, "New")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(StatusBadge, {
    status: "neutral",
    icon: "lock"
  }, "Locked")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(StatusBadge, {
    status: "solid"
  }, "Beta")))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-stepper",
    name: "Stepper",
    tag: "<Stepper/>",
    desc: "Horizontal step-progress indicator. Completed steps show a green check, active step uses primary action color. Click the buttons to advance."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Interactive"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      width: "100%",
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Stepper, {
    steps: ["Create Account", "Verify Email", "Set Password", "Get Started"],
    current: stepperIdx
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Button, {
    type: "secondary",
    size: "sm",
    onClick: () => setStepperIdx(i => Math.max(0, i - 1))
  }, "Back")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Button, {
    type: "tertiary",
    size: "sm",
    onClick: () => setStepperIdx(i => Math.min(4, i + 1))
  }, "Next"))))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "States at a glance"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      width: "100%",
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Stepper, {
    steps: ["Step 1", "Step 2", "Step 3"],
    current: 0
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Stepper, {
    steps: ["Step 1", "Step 2", "Step 3"],
    current: 1
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Stepper, {
    steps: ["Step 1", "Step 2", "Step 3"],
    current: 2
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Stepper, {
    steps: ["Step 1", "Step 2", "Step 3"],
    current: 3
  }))))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-table",
    name: "Table",
    tag: "<Table/>",
    desc: "Data table with sticky header, optional zebra striping, and full token theming. Columns can be strings or { label, key, align } objects."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Default"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      label: "Module",
      key: "module"
    }, {
      label: "Status",
      key: "status",
      align: "center"
    }, {
      label: "Score",
      key: "score",
      align: "center"
    }, {
      label: "Time",
      key: "time",
      align: "right"
    }],
    rows: [{
      module: "Understanding Your Budget",
      status: "✅ Done",
      score: "92%",
      time: "11 min"
    }, {
      module: "Your Credit Score",
      status: "✅ Done",
      score: "85%",
      time: "13 min"
    }, {
      module: "Saving for a Down Payment",
      status: "✅ Done",
      score: "88%",
      time: "10 min"
    }, {
      module: "Getting Pre-Approved",
      status: "⏳ Active",
      score: "—",
      time: "—"
    }, {
      module: "Closing Day",
      status: "🔒 Locked",
      score: "—",
      time: "—"
    }]
  }))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Striped"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Table, {
    striped: true,
    columns: ["Token", "Light Mode", "Dark Mode"],
    rows: [{
      Token: "--surface-background",
      "Light Mode": "#FEFEFE",
      "Dark Mode": "#121212"
    }, {
      Token: "--surface-elevated",
      "Light Mode": "#FFFFFF",
      "Dark Mode": "#1E1E1E"
    }, {
      Token: "--text-primary",
      "Light Mode": "#121212",
      "Dark Mode": "#F5F5F5"
    }, {
      Token: "--color-brand-500",
      "Light Mode": "#FFC000",
      "Dark Mode": "#FFC000"
    }]
  })))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-tabs",
    name: "Tabs",
    tag: "<Tabs/>",
    desc: "Underline tab bar for in-screen sections. Active tab is bold with a 2.5px underline. Fully interactive."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Interactive"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 500
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["Overview", "Modules", "Resources", "Progress"],
    value: tab,
    onChange: setTab
  }))))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-toast",
    name: "Toast",
    tag: "<Toast/>",
    desc: "Transient dark notification with semantic accent glyph and optional dismiss. Auto-dismisses in production."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Variants"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      width: "100%",
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Toast, {
    status: "success",
    title: "Module complete!",
    onDismiss: () => {}
  }, "You unlocked a new room for Little Lucas.")), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Toast, {
    status: "error",
    title: "Connection lost",
    onDismiss: () => {}
  }, "We'll save your progress and retry."))))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-toggle",
    name: "Toggle",
    tag: "<Toggle/>",
    desc: "Binary on/off switch. ON fills brand yellow with a dark knob. OFF is the inactive fill. Supports sm / md / lg sizes."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Interactive"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Toggle, {
    checked: toggleA,
    onChange: setToggleA,
    label: "Email notifications"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Toggle, {
    checked: toggleB,
    onChange: setToggleB,
    label: "Push alerts"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Toggle, {
    checked: true,
    label: "Dark mode"
  }))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "Sizes"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Toggle, {
    checked: true,
    size: "sm",
    label: "Small"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Toggle, {
    checked: true,
    size: "md",
    label: "Medium"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Toggle, {
    checked: true,
    size: "lg",
    label: "Large"
  }))), /*#__PURE__*/React.createElement(StateGroup, {
    label: "States"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Toggle, {
    checked: true,
    label: "On"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Toggle, {
    checked: false,
    label: "Off"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Toggle, {
    checked: true,
    disabled: true,
    label: "Disabled on"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Toggle, {
    checked: false,
    disabled: true,
    label: "Disabled off"
  })), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Toggle, {
    checked: true,
    labelPosition: "left",
    label: "Label left"
  })))), /*#__PURE__*/React.createElement(CompRow, {
    id: "comp-tooltip",
    name: "Tooltip",
    tag: "<Tooltip/>",
    desc: "Dark hover bubble. Wraps any trigger element \u2014 hover the icon buttons to reveal. Supports top, right, bottom, left placement."
  }, /*#__PURE__*/React.createElement(StateGroup, {
    label: "Placements \u2014 hover each icon"
  }, /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Why this matters",
    placement: "right"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "help",
    type: "secondary"
  }))), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Save your progress",
    placement: "top"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bookmark",
    type: "ghost"
  }))), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Share this module",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "share",
    type: "ghost"
  }))), /*#__PURE__*/React.createElement(Safe, null, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Go back",
    placement: "left"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow_back",
    type: "ghost"
  }))))));
}

// ── 09 · APP ─────────────────────────────────────────────────

function App() {
  const {
    isMobile
  } = useResponsive();
  return /*#__PURE__*/React.createElement(PageSection, {
    id: "app",
    eyebrow: "09 \xB7 App",
    title: "App",
    intro: "Application-level screens, flows, and layout patterns for the NFM Lending Home Buyer Education experience."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 0",
      borderTop: "1px solid var(--stroke-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "minmax(0,1fr) auto",
      gap: isMobile ? 24 : 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--color-gray-400)",
      marginBottom: 12
    }
  }, "Live Prototype"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: "-.01em",
      color: "var(--text-primary)",
      margin: "0 0 10px"
    }
  }, "Full App Chrome"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: "0 0 18px",
      maxWidth: 420
    }
  }, "The complete Home Buyer Education flow \u2014 onboarding, modules, quiz, and certificate \u2014 running live in a 390px device frame. Tap through it right here."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 18
    }
  }, ["Onboarding", "Modules", "Quiz", "Results"].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 11,
      padding: "5px 11px",
      borderRadius: "var(--radius-pill-px, 999px)",
      background: "var(--fill-surface-yellow)",
      color: "var(--fill-text-yellow)"
    }
  }, s))), /*#__PURE__*/React.createElement("a", {
    href: "ui_kits/app/index.html",
    target: "_blank",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 13,
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, "Open full-screen", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 16
    }
  }, "open_in_new"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: typeof window !== "undefined" && window.__resources && window.__resources.appFrame || "ui_kits/app/index.html",
    title: "LUCAS Home Buyer Education \u2014 live prototype",
    style: {
      width: isMobile ? "100%" : 470,
      maxWidth: 470,
      height: 880,
      border: "none",
      borderRadius: "var(--radius-lg-px)",
      background: "var(--surface-recessed)",
      boxShadow: "var(--shadow-card)"
    }
  })))));
}

// ── 10 · LEARNINGS ───────────────────────────────────────────

function Learnings() {
  const items = [{
    title: "Noto Sans over other humanist fonts",
    body: "Noto Sans supports the full Unicode range — important for multi-lingual content in future markets. Combined with Inter's technical precision for data strings, the pairing balances warmth and function."
  }, {
    title: "Yellow as primary action in dark mode",
    body: "In light mode the primary action uses near-black (#121212) to ground the experience. In dark mode, shifting to brand yellow maintains WCAG contrast while reinforcing the brand identity at every touch point."
  }, {
    title: "4-point spacing grid rationale",
    body: "The 4pt grid aligns with iOS Human Interface Guidelines and Material Design baselines, ensuring components integrate cleanly in both React Native and web contexts without pixel-rounding artifacts."
  }, {
    title: "'Never wrong, always reframe' principle",
    body: "User testing revealed anxiety spikes on standard 'Incorrect' feedback. LUCAS uses encouraging language with the correct answer explanation to maintain forward momentum — no shame, always teachable."
  }, {
    title: "Soft radius everywhere",
    body: "Sharp corners tested as clinical in a financial context. All interactive elements use rounded corners (minimum 8px) to reinforce approachability. The pill radius (999px) is reserved for toggles, chips, and badges."
  }, {
    title: "Little Lucas mood system",
    body: "14 base moods + 7 costume variants were art-directed to cover every scenario in a 10-module course: success, struggle, instruction, celebration, curiosity, and transitions — each mapped to a specific trigger in app logic."
  }];
  return /*#__PURE__*/React.createElement(PageSection, {
    id: "learnings",
    eyebrow: "10 \xB7 Learnings",
    title: "Learnings",
    intro: "Documented design decisions, tested hypotheses, and rationale behind key choices in the LUCAS system."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(340px,1fr))",
      gap: 20
    }
  }, items.map(({
    title,
    body
  }) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      padding: "24px 28px",
      borderRadius: "var(--radius-lg-px)",
      background: "var(--surface-elevated)",
      boxShadow: "var(--shadow-card)",
      borderLeft: "3px solid var(--color-brand-500)"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: "-.01em",
      color: "var(--text-primary)",
      margin: "0 0 10px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      lineHeight: 1.7,
      color: "var(--text-body)",
      margin: 0
    }
  }, body)))));
}

// ── root ──────────────────────────────────────────────────────

function Showcase() {
  return /*#__PURE__*/React.createElement(ResponsiveProvider, null, /*#__PURE__*/React.createElement(Introduction, null), /*#__PURE__*/React.createElement(Brand, null), /*#__PURE__*/React.createElement(Colors, null), /*#__PURE__*/React.createElement(Typography, null), /*#__PURE__*/React.createElement(Spacing, null), /*#__PURE__*/React.createElement(Radius, null), /*#__PURE__*/React.createElement(Effects, null), /*#__PURE__*/React.createElement(Components, null), /*#__PURE__*/React.createElement(App, null), /*#__PURE__*/React.createElement(Learnings, null));
}
window.Showcase = Showcase;
})(); } catch (e) { __ds_ns.__errors.push({ path: "showcase/Showcase.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Chrome.jsx
try { (() => {
/* global React */
// Shared iOS status bar + phone chrome bits for the LUCAS app UI kit.
const DS = window.LUCASDesignSystem_675758;
function StatusBar({
  dark = false,
  tone
}) {
  const color = dark ? "#FEFEFE" : "#121212";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 22px 4px",
      height: 44,
      boxSizing: "border-box",
      background: tone || "transparent",
      color,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 17
    }
  }, "signal_cellular_alt"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 17
    }
  }, "wifi"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: 19
    }
  }, "battery_full")));
}
function HomeIndicator({
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "8px 0 10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 134,
      height: 5,
      borderRadius: 3,
      background: dark ? "#FEFEFE" : "#121212",
      opacity: 0.9
    }
  }));
}
window.StatusBar = StatusBar;
window.HomeIndicator = HomeIndicator;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Chrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioButton = __ds_scope.RadioButton;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.AnswerRow = __ds_scope.AnswerRow;

__ds_ns.ModuleItem = __ds_scope.ModuleItem;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.StatRow = __ds_scope.StatRow;

__ds_ns.LUCAS_MOODS = __ds_scope.LUCAS_MOODS;

__ds_ns.LucasAvatar = __ds_scope.LucasAvatar;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.HeaderNav = __ds_scope.HeaderNav;

__ds_ns.MobileFooter = __ds_scope.MobileFooter;

__ds_ns.PaginationDots = __ds_scope.PaginationDots;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
