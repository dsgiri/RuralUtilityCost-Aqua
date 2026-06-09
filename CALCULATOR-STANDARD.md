# Aqua Calculator Development Standard

This document outlines the standard operating procedures for creating or modifying calculators within the Aqua application.

## 1. Structure
Each calculator must reside in `/src/pages/tools/`.
It should consist of an input section and an output/results section.

## 2. Layout
Use a two-column flex or grid layout for desktop, staking vertically on mobile:
- **Left Column**: Inputs (parameters, dropdowns, number inputs).
- **Right Column (Sticky)**: Outputs (Results breakdown, Total, and Disclaimer).

## 3. SEO Component
Every calculator must include the `<SEO>` component at the top level of its return block:
```tsx
<SEO 
  title="Specific Title" 
  description="Specific 150-160 char description."
  keywords="comma, separated, keywords"
/>
```

## 4. Input Styling
Rely on standard Tailwind classes. Form inputs MUST use:
```tsx
className="w-full rounded-lg border-slate-300 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500"
```

## 5. Output Styling
- The results panel should typically use a dark, high-contrast theme (`bg-slate-900 text-white`) to stand out, with accent colors (`text-teal-400` or `text-emerald-400`) for key figures.
- Use `formatCurrency` or `formatNumber` from `src/lib/utils.ts` to format outputs.
- Breakdown lists should be simple flex rows (`justify-between`).

## 6. Required Disclaimer
At the bottom of the results panel, the `<Disclaimer />` component MUST be included:
```tsx
<Disclaimer variant="dark" /> // Use dark variant if inside the dark results panel.
```
