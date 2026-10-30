# Memory Game

A browser-based card-matching game built with React, JavaScript, and CSS. Find all six pairs of fantasy-themed cards while keeping track of your turns.

## How to play

1. Select two cards to reveal their images.
2. Matching cards stay face up. Unmatched cards turn back after one second.
3. Continue until all pairs are matched.
4. Select **New Game** to reshuffle the deck and reset the turn counter.

## Features

- Twelve cards made from six matching image pairs
- Shuffled board on load and on each new game
- Turn counter
- Card selection paused while a pair is being evaluated
- React state and effects for game logic
- Reusable `SingleCard` component

## Run locally

Install Node.js and npm, then run:

```bash
git clone https://github.com/ymk-coder-star/memory-game.git
cd memory-game
npm install
npm start
```

Open http://localhost:3000. No account, backend, or API key is required.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Start the development server |
| `npm test` | Launch the Create React App test runner |
| `npm run build` | Create a production bundle in `build/` |

## Source layout

- `src/App.js` — deck creation, selections, matching logic, and turn state
- `src/components/SingleCard` — reusable card interface
- `src/App.css` and `src/index.css` — layout and styling
- `public/img` — card artwork

This portfolio project demonstrates React component composition, event handling, and state-driven UI.
