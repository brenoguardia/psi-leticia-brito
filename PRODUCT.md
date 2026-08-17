# PRODUCT.md — psi-leticia-brito

> Durable product context for the personal/professional website of **Letícia de Brito Martins** (Psicóloga). This file captures what the product *is* and must never change; visual decisions live in DESIGN.md.

## Product summary

A single-page Portuguese-language marketing site for a clinical and organizational psychologist. Its job is to build trust in the therapist, explain how therapy helps, present services, and convert visitors into WhatsApp bookings for both individual psychotherapy and corporate consulting. All conversion happens through WhatsApp deep links (no on-site booking form).

## Core facts (durable, factual — do not alter without asking)

- **Therapist:** Letícia de Brito Martins, Psicóloga Clínica e Organizacional.
- **CRP registration:** CRP 12/30305 (shown prominently in hero and about).
- **Tagline / thesis:** "O autoconhecimento é a bússola para o desenvolvimento pessoal."
- **Approach:** Psychoanalysis (psicanálise) — individualized, non-prescriptive, grounded in the subject's history, bonds, and unconscious processes. Positioning emphasizes "consciência" (awareness) over forced change.
- **Audience / positioning:** Individuals (adults and children) plus "empresas conscientes" (conscious companies). Includes Brazilians living abroad.
- **Services offered:**
  - Terapia Individual (individual psychotherapy)
  - Apoio à Ansiedade (anxiety support)
  - Autoconhecimento (self-knowledge)
  - Psicoterapia Infantil (child psychotherapy)
  - Brasileiros no exterior (Brazilians abroad)
  - Orientação profissional (career/professional guidance)
  - Recrutamento e seleção de pessoas (recruitment & selection)
  - Implementação da NR-1 (psychosocial risk management / corporate mental health)
- **Two conversion paths (both WhatsApp):**
  1. Individual psychotherapy session booking.
  2. Corporate consulting booking.
- **Primary CTA copy:** "Agende sua consulta" / "Agende sua consultoria".

## Sections (current page structure)

1. **Hero** — name typing animation, CRP, thesis quote, positioning, primary CTA.
2. **SectionInfo** — "Como a terapia pode fortalecer sua autonomia" (4 benefit cards).
3. **SectionServices** — "Como posso te ajudar" (service card grid).
4. **SectionAbout** — photo, biography, approach, dual CTA.
5. **SectionPhrase** — closing quote.
6. **Footer** — contact / links.

## Technical stack

- **Framework:** Astro (SSG), React islands for interactive pieces, TypeScript.
- **Styling:** Tailwind CSS v4 + shadcn/ui + custom CSS variables (`--brand`, `--card-color-1/2`).
- **Fonts:** Roboto (body), Raleway (headings).
- **Motion:** `motion` (framer-motion successor), rough-notation (`Highlighter`).
- **Key deps:** astro-icon, lucide, Croct (personalization/AB), sharp, sitemap.
- **Package manager:** pnpm. Build: `pnpm build`. Dev: `pnpm dev` (localhost:4321).

## Brand / environment notes

- Brand color is a deep wine/burgundy red: `--brand: #8d0d0d`; accent highlight orange `#FF9800`.
- Two light-section backgrounds: `#FAF7FB` (off-white lavender) and card pastels `#C2D5DF` / `#EBE6E4`.
- Dark sections use a subtle background pattern with white text.
- Content copy is authored in Brazilian Portuguese.
- WhatsApp number is configured via env (`PUBLIC_WHATSAPP_NUMBER`) — never hardcode a number.

## What the site must not do

- Must not invent clinical credentials or claims beyond CRP + described approach.
- Must not hardcode the WhatsApp number; always read from `env.PUBLIC_WHATSAPP_NUMBER`.
- Must keep both conversion paths (individual + corporate) discoverable.
- Must remain Portuguese-language.
