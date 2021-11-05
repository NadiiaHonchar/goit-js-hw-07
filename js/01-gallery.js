import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector('.gallery');


function getGalleryItem()
{
  let fragment = new DocumentFragment;
  const galeryItem = galleryItems.map(item=>
    {
      let div = document.createElement("div");
      div.classList.add('gallery__item');
      let galleryLink = document.createElement("a");
      galleryLink.classList.add('gallery__link');
      galleryLink.href=item.original;
      // galleryLink.dataset.lightbox = "lbox";
      let galleryImg = document.createElement("img");
      galleryImg.classList.add('gallery__image');
      galleryImg.src = item.preview;
      galleryImg.dataset.source = item.original;
      
      galleryImg.alt = item.description;
      div.appendChild(galleryLink);
      galleryLink.appendChild(galleryImg);
      fragment.append(div);
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
  
  instance.show(); 
}); 
   
const instance = basicLightbox.create(`<img src="" />`, { 
  onShow: instance => ('onShow', instance), 
  onClose: instance => ('onClose', instance), 
});

console.log(galleryItems);



