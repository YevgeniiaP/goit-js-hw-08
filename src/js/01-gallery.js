// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const galleryCards  = createGalleryItems(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryCards );

function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </div>`;
    })
            .join("");
};

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});


galleryList.addEventListener('click', imageOpen);