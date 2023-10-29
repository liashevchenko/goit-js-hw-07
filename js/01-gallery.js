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

let instance;

function handlerClick(event) {
    event.preventDefault();
    if (event.target.classList.contains("gallery__image")) {
        instance = basicLightbox.create(`
            <img src=${event.target.dataset.source}>
        `, {
            onShow: document.addEventListener("keydown", handleKeyDown),
            onClose: document.removeEventListener("keyup", handleKeyDown)
        });

        instance.show();
        
    }
}

function handleKeyDown(event) {
    console.log("work")
    if (event.key === "Escape" && instance.visible()) {
        instance.close();
    }
}