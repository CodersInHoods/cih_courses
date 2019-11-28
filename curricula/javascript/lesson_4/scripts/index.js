// Write your code!// URLs
const PHOTOS_URL = `https://api.unsplash.com/photos/?client_id=${ACCESS_TOKEN}`;

// DOM elements
const carouselContainer = document.querySelector(".carousel");
const buttonLeft = document.querySelector(".btn_left");
const buttonRight = document.querySelector(".btn_right");

let currentPhotoIndex = 0;
let photos = [];

const decrementPhotoIndex = () => {
  currentPhotoIndex = currentPhotoIndex === 0 ? 9 : currentPhotoIndex - 1;
};

const incrementPhotoIndex = () => {
  currentPhotoIndex = currentPhotoIndex === 9 ? 0 : currentPhotoIndex + 1;
};

buttonLeft.addEventListener("click", () => {
  decrementPhotoIndex();
  renderImageToPage(photos[currentPhotoIndex], -1);
});
buttonRight.addEventListener("click", () => {
  incrementPhotoIndex();
  renderImageToPage(photos[currentPhotoIndex], 1);
});

fetch(PHOTOS_URL)
  .then(res => res.json())
  .then(photosFromServer => {
    photos = photosFromServer;
    renderImageToPage(photos[currentPhotoIndex]);
  });

const renderImageToPage = (image, direction) => {
  const img = document.createElement("img");

  img.src = image.urls.regular;

  if (direction) {
    if (direction === -1) {
      img.className = "left active";
    }
    if (direction === 1) {
      img.className = "right active";
    }
  } else {
    img.className = "active";
  }

  const previousImage = document.querySelector("img.active");
  if (previousImage) {
    previousImage.className = direction === 1 ? "move_left" : "move_right";
    setTimeout(() => {
      previousImage.remove();
    }, 500);
  }

  carouselContainer.append(img);
};
