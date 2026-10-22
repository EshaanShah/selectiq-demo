# SelectIQ

SelectIQ is a polished, frontend-only demo of an AI-powered photography culling assistant. The analysis, recommendations, and preference learning are intentionally simulated for a reliable classroom presentation.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Photos

The demo uses 24 public Pexels image URLs and includes an automatic visual fallback if an image cannot load. To use fully local assets, add images to `public/photos/` and replace the matching URLs in `src/data/photos.js` with paths such as `/photos/wedding-01.jpg`.

## Notes

- No API keys, authentication, backend, database, uploads, or external AI services are used.
- All state is in React and resets when the page reloads or **Start New Demo** is selected.

## Presenter quick path

The app includes a **Presenter Guide** button in the header. For the intended personalized result, choose:

1. **Candid emotion** — bride and mother holding hands.
2. **Natural laughter** — newlyweds laughing with friends.
3. **Family connection** — bride entering with her parents.

On the results screen, point out the learned-style chips and the five matching Keep photographs. For a final interaction, open **Review → Walking in together** and move it to Keep; the counts change from 5/4/15 to 6/3/15.
