# My Games — Landing Page

A simple landing page that shows a grid of cards, one per game. Click a card to open that game's page.

## Files

- `index.html` — the page structure
- `styles.css` — layout and styling
- `script.js` — the list of games (edit this to add your games)
- `images/` — sample placeholder pictures (replace with your own screenshots)

## How to add a game

1. Open `script.js`.
2. Copy one of the entries inside the `games` array and edit `name`, `image`, and `url`:

```js
{
  name: "My Cool Game",
  image: "images/my-cool-game.png",   // your screenshot
  url: "https://example.com/my-game", // where the card links to
},
```

3. Drop your screenshot into the `images/` folder and point `image` at it.
4. Save — the card shows up automatically.

## How to publish on GitHub Pages

1. Create a repository on GitHub (e.g. `my-games`).
2. Push these files to the repository (or upload them via the GitHub website).
3. Go to the repo **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch` and choose `main` (or `master`) with the `/ (root)` folder.
5. Save. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.
