# LUCAS Design System

The design system and UI for **LUCAS** — a Home Buyer Education (HBE) web app built for **NFM Lending** by [Origin & Oak Creative](https://originandoak.com).

LUCAS guides first-time homebuyers through HUD-compliant Home Buyer Education certification, with a warm, yellow-forward interface and an AI copilot character, **Little Lucas**, who walks users through the homeownership journey one module at a time.

> **Proprietary — All rights reserved.** This repository contains client work for NFM Lending. Not for redistribution or reuse without written permission.

---

## Overview

| | |
|---|---|
| **Client** | NFM Lending / LUCAS Home Loans |
| **Built by** | Origin & Oak Creative |
| **Platform** | Mobile web application |
| **Current version** | 1.0 — HBE Certification Track (10 modules) |
| **Source of truth** | Figma Variables (3 collections) |
| **Typography** | Noto Sans (primary), Inter (secondary) |

---

## Getting Started

> Update this section to match your actual export. Two common cases below — keep the one that applies and delete the other.

### Static HTML

```bash
git clone https://github.com/rwarren8605/lucas-design-system.git
cd lucas-design-system
# open index.html in a browser, or serve locally:
npx serve .
```

### React / Vite

```bash
git clone https://github.com/rwarren8605/lucas-design-system.git
cd lucas-design-system
npm install
npm run dev      # local development
npm run build    # production build → dist/
```

**Fonts:** Noto Sans and Inter must be available for correct rendering. Confirm the Google Fonts `<link>` (or self-hosted `@font-face`) is present before deploy, or the type system will fall back incorrectly.

---

## Design Tokens

Colors are defined as primitives, then mapped to semantic light/dark mode tokens. Full values live in Figma; the reference set is below.

### Brand — Yellow scale

| Token | Hex | |
|---|---|---|
| brand-50 | `#FFF4D1` | |
| brand-100 | `#FFEBB0` | |
| brand-200 | `#FFE28A` | |
| brand-300 | `#FFD554` | |
| brand-400 | `#FFCD33` | |
| **brand-500** | **`#FFC000`** | **Primary brand color / Little Lucas yellow** |
| brand-600 | `#E8AF00` | |
| brand-700 | `#B58800` | |
| brand-800 | `#8C6A00` | |
| brand-900 | `#473600` | |

### Gray scale

| Token | Hex | Token | Hex |
|---|---|---|---|
| gray-50 | `#FEFEFE` | gray-500 | `#929292` |
| gray-100 | `#F9F9F9` | gray-600 | `#606060` |
| gray-200 | `#F1F1F1` | gray-700 | `#414141` |
| gray-300 | `#DBDBDB` | gray-800 | `#2C2C2C` |
| gray-400 | `#B6B6B6` | gray-900 | `#121212` |

### Status colors

| Role | 500-step | |
|---|---|---|
| Success (green) | `#1B9B33` | |
| Error (red) | `#E83232` | |
| Warning (orange) | `#FF7100` | |

### Semantic highlights

- **Primary CTA (yellow button)** → `surface/action/tertiary/default` = `brand-500` in both light and dark mode.
- **Primary action button** → light mode = `gray-900` (black), dark mode = `brand-500` (yellow).
- **Body text contrast rule** → on white/light backgrounds use `gray-600` or darker; on dark backgrounds use `gray-500` or lighter.

---

## App Screens

- **Authentication** — split-panel onboarding (brand left, form right)
- **Dashboard** — 3-column: sidebar, module list with lock states, stats panel with progress ring
- **Module Content** — yellow hero banner, scrollable content, "Why this Matters" side panel
- **Quiz** — A/B/C/D options with default / selected / correct / wrong states
- **Course Completion** — celebration hero, per-module scores, next-steps CTAs
- **My Certificates** — Certificate of Completion with dual signatures and seal
- **LO Reports** — borrower-facing progress summary sent to the Loan Officer
- **Profile** — personal info, security, program status, notification preferences
- **Course Journey** — timeline view of all modules

---

## The 10 Modules

| # | Title | Focus |
|---|---|---|
| 01 | Welcome to Your Journey | Introduction to Homeownership |
| 02 | Know Your Numbers | Budgeting & Financial Readiness |
| 03 | The Mortgage Basics | Loan Types, Rates & Terms |
| 04 | Finding the Right Home | The Home Search & Offer Process |
| 05 | The Inspection & Appraisal | Due Diligence & Property Condition |
| 06 | Understanding Your Costs | Closing Costs & Cash to Close |
| 07 | Insurance 101 | Homeowners Insurance Essentials |
| 08 | Taxes & Your Home | Property Taxes & Escrow |
| 09 | Long-Term Success | Maintaining Your Home & Equity |
| 10 | You're Ready | Financial Fitness & Next Steps |

As users complete modules, they help Little Lucas furnish his house — a gamified build sequence that culminates in a finished-home celebration.

---

## Voice & Tone

- Plain language — no three-letter acronyms, no mortgage jargon.
- Warm, direct, inclusive — "big sister energy."
- Never labels an answer "wrong" — always reframes as a learning moment.

---

## Team

| Role | Name |
|---|---|
| Lead Designer | Ryan Warren |
| Content Director | Stephanie Studer |
| Project Lead | Tai Pheribo Christensen |
| Project Coordinator | Nikki Trufant-Wade |
| Dev Contact (NFM) | Anand Patel |

---

*© Origin & Oak Creative for NFM Lending. All rights reserved.*
