import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');
const gallaryMarkup = galleryCreateMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', gallaryMarkup);

function galleryCreateMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
        </a></li>`;
    })
    .join('');
}

galleryRef.addEventListener('click', onOpenPictureClick);

function onOpenPictureClick(e) {
  e.preventDefault();
  e.target.alt;
  console.log(e.target.alt);
}

let lightboxPicture = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
lightboxPicture.on('show.simpleLightbox');
