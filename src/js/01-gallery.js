// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
   
    const markup = galleryItems.map(({ preview, original, description}) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`

);

galleryEl.insertAdjacentHTML("beforeend", markup.join(""));


let lighbox = new SimpleLightbox('.gallery a', { captionsData: "alt" ,captionDelay: 250, captionPosition: "bottom"});