// ---------------------------------------------------------------------------
// Add your games here. For each game, provide:
//   name  - the title shown on the card
//   image - path to the picture (put real screenshots in the "images" folder
//           and use e.g. "images/my-game.png")
//   url   - the link that opens when the card is clicked
// ---------------------------------------------------------------------------
const games = [
  {
    name: "Block Breaker",
    image: "images/block-breaker.png",
    url: "https://block-breaker.crostine.com",
  },
  {
    name: "Rift Slayer",
    image: "images/rift-slayer.png",
    url: "https://rift-slayer.crostine.com",
  },
];

const grid = document.getElementById("games-grid");

games.forEach((game) => {
  const card = document.createElement("a");
  card.className = "card";
  card.href = game.url;
  card.setAttribute("aria-label", game.name);

  const img = document.createElement("img");
  img.className = "card__image";
  img.src = game.image;
  img.alt = game.name;
  img.loading = "lazy";

  const body = document.createElement("div");
  body.className = "card__body";

  const name = document.createElement("div");
  name.className = "card__name";
  name.textContent = game.name;

  const hint = document.createElement("div");
  hint.className = "card__hint";

  body.appendChild(name);
  body.appendChild(hint);
  card.appendChild(img);
  card.appendChild(body);
  grid.appendChild(card);
});

document.getElementById("year").textContent = new Date().getFullYear();
