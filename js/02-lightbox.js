import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');


function getGalleryItem()
{
  let fragment = new DocumentFragment;
  const galeryItem = galleryItems.map(item=>
    {      
      let galleryLink = document.createElement("a");
      galleryLink.classList.add('gallery__item');
      galleryLink.href=item.original;      
      let galleryImg = document.createElement("img");
      galleryImg.classList.add('gallery__image');
      galleryImg.src = item.preview;          
      galleryImg.alt = item.description;
      galleryLink.appendChild(galleryImg);
      
      fragment.append(galleryLink);
    })
    return fragment;
}
gallery.append(getGalleryItem());


gallery.addEventListener('click', e => 
{ 
  e.preventDefault(); 
  if (e.target.nodeName !== 'IMG') { 
    return; 
  } 
  
  instance.element().querySelector('img').src = e.target.dataset.source; 
   
 show.simplelightbox;
 
}); 
var simplelightbox = new SimpleLightbox('.gallery a', { 
widthRatio: 0.5,
heightRatio: 0.5,
throttleInterval: 250,
fadeSpeed: 250,
// captionSelector:`${e.target.nodeName.description}`
});

console.log(galleryItems);
