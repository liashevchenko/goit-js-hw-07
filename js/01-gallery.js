import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const gallery = document.querySelector(".gallery")
    
function createMarkUp(galleryArray) {
    const item = galleryArray.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href=${original}>
                <img
                    class="gallery__image"
                    src=${preview}
                    data-source=${original}
                    alt=${description}
                />
            </a>
        </li>`;
    }).join("");
    gallery.insertAdjacentHTML('afterbegin', item);
}


createMarkUp(galleryItems);

gallery.addEventListener('click', handlerClick);
    
function handlerClick(event) {
    event.preventDefault();
    if (event.target.classList.contains("gallery__image")) {
        const instance = basicLightbox.create(`
            <img src=${event.target.dataset.source}>
        `).show();

       function handleKeyDown(event) {
    console.log("Key pressed:", event.key); // Check if the event is being triggered
    if (event.key === "Escape") {
        instance.close(() => console.log('lightbox not visible anymore'));
        document.removeEventListener("keydown", handleKeyDown);
        console.log("Modal closed"); // Check if the modal closing code is reached
    }
}

        document.addEventListener("keydown", handleKeyDown);
    }
}
