import { getData } from "./api.js";

const catCardContainer = document.querySelector(".catCardContainer");
const cats = document.getElementById("cats");
const randomCats = document.getElementById("randomCats");

async function generateCatCards() {
  let url = "https://api.thecatapi.com/v1/breeds";
  try {
    let cats = await getData(url);
    cats.forEach((cat) => {
      const catCard = document.createElement("div");
      catCard.classList = "catCard";
      const catBreed = document.createElement("h2");
      catBreed.classList = "catBreed";
      catBreed.innerText = cat.name;
      const catImgContainer = document.createElement("div");
      catImgContainer.classList = "catImgContainer";
      const catImg = document.createElement("img");
      catImg.classList = "catImg";
      catImg.src = cat.image.url;
      const catOrigin = document.createElement("h4");
      catOrigin.classList = "catOrigin";
      catOrigin.innerText = "Origin: " + cat.origin;
      const catDesc = document.createElement("p");
      catDesc.classList = "catDesc";
      catDesc.innerText = cat.description;

      catCard.appendChild(catBreed);
      catCard.appendChild(catImgContainer);
      catCard.appendChild(catOrigin);
      catCard.appendChild(catDesc);

      catCardContainer.appendChild(catCard);
      catImgContainer.appendChild(catImg);
    });
  } catch (error) {
    console.error(error);
  }
}

async function generateRandomCat() {
  let url = "https://api.thecatapi.com/v1/images/search";
  try {
    let cat = await getData(url);
    const randomCatCard = document.createElement("div");
    randomCatCard.classList = "randomCatCard";
    const randomCatImg = document.createElement("img");
    randomCatImg.src = cat[0].url;
    randomCatImg.style.maxWidth = "400px";
    randomCatImg.style.maxHeight = "400px";

    randomCatCard.appendChild(randomCatImg);

    catCardContainer.appendChild(randomCatCard);
  } catch (error) {
    console.error(error);
  }
}

function clickHandler(event) {
  if (event.target === cats) {
    cats.remove();
    randomCats.remove();
    generateCatCards();
  } else {
    cats.remove();
    generateRandomCat();
    randomCats.innerText = "Give me more random cats!";
  }
}

cats.addEventListener("click", clickHandler);
randomCats.addEventListener("click", clickHandler);
