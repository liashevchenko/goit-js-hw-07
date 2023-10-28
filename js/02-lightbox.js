import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

/* Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. 
Використовуй готовий код з першого завдання.
Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. 
Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery. 
Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. 
Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення. */

const gallery = document.querySelector(".gallery")
    
function createMarkUp(galleryArray) {
    const item = galleryArray.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href=${original}>
            <img class="gallery__image" src=${preview} alt=${description}/>
            </a>
        </li>`;
    }).join("");
    gallery.insertAdjacentHTML('afterbegin', item);
}


createMarkUp(galleryItems);

gallery.addEventListener('click', handlerClick);

function handlerClick(event) {
    event.preventDefault();
    var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt'});
    gallery.on('show.simplelightbox')
}