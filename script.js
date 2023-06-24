let text = document.getElementById("text-name");
let image1 = document.getElementById("image-1");
let image2 = document.getElementById("image-2");
let image1a = document.getElementById("image-1a");
let image2a = document.getElementById("image-2a");

text.addEventListener("input", function () {
  changeimage(text.textContent.toLowerCase().trim());
});

function changeimage(name) {
  loadImage(`https://img.pokemondb.net/sprites/home/shiny/${name}.png`)
    .then((img) => {
      image2.src = img.src;
      image2a.href = `https://img.pokemondb.net/sprites/home/shiny/${name}.png`;
    })
    .catch((err) => console.error(err));

  loadImage(`https://img.pokemondb.net/sprites/home/normal/${name}.png`)
    .then((img) => {
      image1.src = img.src;
      image1a.href = `https://img.pokemondb.net/sprites/home/normal/${name}.png`;
    })
    .catch((err) => console.error(err));
}

const loadImage = (url) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", (err) => reject(err));
    img.src = url;
  });
