# LUCAS Design System

**LUCAS — Home Buyer Education** is a mobile web app by **NFM Lending** (built by Origin & Oak Creative) that guides first-time and underserved homebuyers through a HUD-compliant Home Buyer Education (HBE) certification. Users move through 10 educational modules with quizzes, encouragement, and a gamified house-building reward system — narrated by **Little Lucas**, a friendly house-shaped yellow robot copilot.

This project is the LUCAS design system: tokens, fonts, brand assets, 33 reusable React components, and a working app UI kit. Consumers link the single root `styles.css`.

---

## Quick Start

```html
<link rel="stylesheet" href="path/to/styles.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0&display=swap">
<script src="path/to/_ds_bundle.js"></script>
```

```js
const { Button, Card, Toggle, Stepper, /* … */ } = window.LUCASDesignSystem_675758;
```

Light/dark mode is driven by a `data-theme` attribute on `<html>`:
```html
<html data-theme="light"> <!-- or "dark" -->
```

---

## Sources

- **Figma:** "LUCAS App Design System.fig". Pages: Color_Style, Lucas-Avatars, Lucas-Scene, icons, components, app-screens. Tokens extracted from the Primitives / Mode / Size variable collections via `fig_materialize` → `components/fig-tokens.css`.
- **Uploaded assets:** light/dark logos and 21 "Little Lucas" mascot PNGs (`uploads/` → `assets/`).
- Brand notes provided with the kickoff brief (voice, palette, mascot character).

---

## File Map

| Path | Purpose |
|---|---|
| `styles.css` | Global entry point (import-only). Reaches all tokens + fonts + base. |
| `tokens/typography.css` | Font faces + Noto Sans / Inter type scale. |
| `tokens/effects.css` | Spacing / radius / shadow px tokens + `@keyframes skeleton-shimmer`. |
| `tokens/base.css` | Element resets (box-sizing, body defaults). |
| `components/fig-tokens.css` | Generated color + size tokens from Figma Variables (light + `[data-theme="dark"]`). |
| `components/<group>/` | 33 components — each `Name.jsx` + `Name.d.ts` + `Name.prompt.md`. |
| `guidelines/` | Foundation specimen cards (colors, type, spacing, radii/shadows, logo). |
| `showcase/Showcase.jsx` | Full documentation site content (10 sections, all components). |
| `index.html` | Full-width design system documentation site with collapsible sidebar + light/dark toggle. |
| `ui_kits/app/` | Interactive iPhone app recreation (onboarding → modules → quiz → certificate). |
| `assets/` | `logo-light.svg`, `logo-dark.svg`, `lucas/*.png` mascot set. |

Bundle namespace: **`window.LUCASDesignSystem_675758`**

---

## Components (33)

### core
| Component | Description |
|---|---|
| `Accordion` | Expandable sections — single or multi-open. FAQ, glossary, progressive disclosure. |
| `Avatar` | User profile — image or initials on brand yellow. Circle / rounded / square + status dot. |
| `Button` | Primary (black/yellow), secondary (outlined), tertiary (yellow). sm / md / lg. |
| `Card` | Base surface — default, recessed, brand, dark tones. |
| `Chip` | Selectable filter pill — outlined off, yellow on. Leading icon + count badge. |
| `IconButton` | Round icon-only button. Material Symbols Rounded glyph. 44px tap target. |
| `StatusBadge` | Compact status pill — success / solidBrand / error / warning / brand / neutral / solid. |
| `Table` | Data table — sticky header, optional zebra striping, column alignment. |

### forms
| Component | Description |
|---|---|
| `Checkbox` | Rounded-square checkbox. Selected = yellow fill + dark check. |
| `Input` | Labelled field — default / active / error / disabled / dropdown / multiline. |
| `RadioButton` | Ringed radio for single-select quiz and preference options. |
| `SearchBar` | Pill-shaped input with leading search icon, focus ring, and clear button. |
| `SegmentedControl` | One-of-N selector. Active segment fills yellow. |
| `Slider` | Range input with branded track + knob. `format` callback for currency/percentage display. |
| `Toggle` | Binary on/off switch. ON = brand yellow + dark knob. sm / md / lg. |

### feedback
| Component | Description |
|---|---|
| `Callout` | Inline feedback — correct / incorrect / warning / info. The "never shame" voice. |
| `EmptyState` | Zero-data placeholder — icon badge, title, body, action slot. |
| `ProgressBar` | Segmented or continuous module/quiz completion indicator. |
| `Skeleton` | Shimmer loading placeholder. Any width / height / shape. |
| `Toast` | Transient notification — dark surface, semantic accent bar + icon. |
| `Tooltip` | Dark hover bubble. Wraps any trigger. top / right / bottom / left placement. |

### navigation
| Component | Description |
|---|---|
| `BottomSheet` | iOS-style modal sheet from the bottom. Blurred backdrop. `contained` prop for demos. |
| `HeaderNav` | App top bar — back chevron, centered title, optional trailing slot. |
| `MobileFooter` | Sticky bottom action bar — 1–2 stacked full-width buttons. |
| `PaginationDots` | Onboarding position indicator. Active dot stretches into a yellow pill. |
| `Stepper` | Horizontal step indicator — completed (green ✓), active (primary), upcoming (inactive). |
| `Tabs` | Underline tab bar. Active tab = bold + brand yellow underline. |

### learning
| Component | Description |
|---|---|
| `AnswerRow` | Quiz option — letter-coded A–D. Grades correct / incorrect in place. |
| `ModuleItem` | Module list row — completed / active / locked states + trailing badge. |
| `StatTile` + `StatRow` | Label/value stat tile. `StatRow` lays out multiple tiles with hairline dividers. |

### lucas
| Component | Description |
|---|---|
| `LucasAvatar` | The mascot. 14 base moods + 7 costume variants. `mood` + `size` + `basePath` props. |

---

## Design Tokens (308)

All tokens live in `components/fig-tokens.css` (generated) and `tokens/*.css` (handcrafted aliases). Always use semantic tokens in component code — never reference a primitive directly.

### Key semantic groups
| Group | Tokens |
|---|---|
| Surfaces | `--surface-background`, `--surface-elevated`, `--surface-primary`, `--surface-recessed`, `--surface-dark` |
| Text | `--text-primary`, `--text-body`, `--text-brand`, `--text-on-action-primary` |
| Stroke | `--stroke-subtle`, `--stroke-primary`, `--stroke-action-active`, `--stroke-action-error` |
| Action surfaces | `--surface-action-primary-*`, `--surface-action-secondary-*`, `--surface-action-tertiary-*` |
| Fill pairs | `--fill-surface-yellow/green/red/orange` + `--fill-text-yellow/green/red/orange` |
| Spacing | `--space-2xs` (4px) → `--space-4xl` (60px) |
| Radius | `--radius-2xs-px` (4px) → `--radius-xl-px` (24px) → `--radius-pill` (999px) |
| Shadows | `--shadow-xs` → `--shadow-lg`, `--shadow-card`, `--shadow-success`, `--shadow-error` |

---

## Content Fundamentals

**Voice = "big sister / auntie energy."** Warm, encouraging, in-your-corner.

- **Never "wrong."** Incorrect answers are *reframed*: "Not Quite — 2 Attempts Remaining," then an instructive explanation. Correct answers get "You've got it!"
- **No jargon.** Say "getting pre-approved," not DTI/LTV/TLA. Explain percentages in human terms.
- **Casing:** Sentence case for body/labels. ALL CAPS sparingly for big celebration moments only.
- **Emoji:** Not used. Warmth comes from Little Lucas's expressions and the yellow palette.

---

## Visual Foundations

- **Color:** Signature **brand yellow #FFC000** is the hero accent. Near-black **#121212** for primary text + primary button in light mode (swaps to yellow in dark). Semantic green/red/orange for state only.
- **Type:** **Noto Sans** for display/headlines (700–800, tight negative tracking), buttons & labels (600), body (400). **Inter** for dense data / fine print. No serif.
- **Spacing:** 4pt grid. Generous card padding (16–20px). Min 44px tap targets.
- **Corners:** Soft everywhere — inputs/badges 8px, buttons 12px, cards 16–20px, banners 24px, chips/toggles fully round.
- **Shadows:** Gentle, low-contrast. `--shadow-card` (0 2px 12px rgba(0,0,0,.06)) is the default lift.
- **Backgrounds:** Solid fills only — no gradients, no textures, no patterns.
- **Imagery:** Little Lucas mascot PNGs are the only illustration. No photography.
- **Layout:** Mobile-first, 390px design width. Sticky bottom bar, top header with back chevron + centered title.

---

## Iconography

**Standardized on [Material Symbols Rounded](https://fonts.google.com/icons)** — rounded terminals match LUCAS's soft, friendly aesthetic.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0&display=swap">
```

Common glyphs: `arrow_back_ios_new`, `close`, `check`, `check_circle`, `lock`, `play_circle`, `help`, `info`, `menu_book`, `schedule`, `search`, `home`, `widgets`, `school`, `palette`.

> ⚠️ The original Figma references Font Awesome 6 Pro + a proprietary Wix icon set. Those weren't shipped — this system substitutes Material Symbols Rounded. Swap in the licensed set if pixel-exact icon parity is required.

---

## Documentation Site

Open `index.html` for the full design system documentation — 10 sections, all 33 components with interactive states, light/dark toggle, and collapsible icon-rail sidebar.
