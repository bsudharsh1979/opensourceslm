# PRD — From Black-Box AI to Auditable Agentic AI (Presentation Deck)

## Original problem statement
Convert a long-form essay on the shift from black-box AI to auditable, API-driven, agentic AI into a McKinsey-style infographic-based presentation. 10-minute slot, 5–6 slides, very few words but impactful, with a closing message.

## User choices
- Format: Interactive web-based React slide deck
- Aesthetic: Modern dark editorial
- Export: Yes — print-to-PDF supported
- Logo / brand color: None
- Presenter notes: No

## Architecture
- React (CRA + Tailwind) — frontend only, no backend changes
- Keyboard navigation (← / →, 1–6, Home/End, Space)
- Print-friendly A4 landscape CSS (page-break per slide)
- Fonts: Fraunces (display serif) + IBM Plex Sans (body) + JetBrains Mono (accent)
- Palette: charcoal #0a0a0b · cream #f5f1ea · amber #f5a524 · subtle teal/crimson accents

## Slide outline (implemented 2026-02)
1. **The Shift** — Black-Box → Auditable, Agentic AI · Strategic Objective card
2. **The API Uprising** — 89% / 24% / 7.53M / +40% / +427% / 51% / 65% stats
3. **The Token Journey** — 7-step horizontal timeline w/ control surface per step
4. **Model Portfolio** — Small / Medium / Large·MoE tiers + governed parameters
5. **Operating Model** — 5 layers: Model Gov · API & Agent Gov · FinOps · Risk · Value
6. **AI Assurance (Closing)** — "Transparency is not enough" + 10 questions

## Files
- `/app/frontend/src/App.js`
- `/app/frontend/src/index.css`
- `/app/frontend/src/components/Deck.jsx`
- `/app/frontend/src/components/SlideShell.jsx`
- `/app/frontend/src/components/slides/Slide1Title.jsx … Slide6Closing.jsx`
- `/app/frontend/public/index.html` (Google Fonts)

## Backlog / Next actions
- P1: Add a one-click "Download PDF" via headless print pipeline (currently uses browser print → save as PDF)
- P2: Add subtle slide-transition animation (fade/slide-in) between slides
- P2: Add presenter mode with timer (per-slide budget for the 10-min talk)
- P2: Export as standalone .pptx via reactPPT/pptxgenjs for offline editing
- P3: Theme toggle (light/cream variant) for printed handout
