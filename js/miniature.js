import {createFotos} from './data.js';
import { showBigPicture } from './big-picture.js';

const pictureElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const miniatureFotos = createFotos;

const miniatureFotoFragment = document.createDocumentFragment();

miniatureFotos.forEach(({url, likes, comments, description}) => {
  const fotoElement = pictureTemplate.cloneNode(true);
  fotoElement.querySelector('.picture__img').src = url;
  fotoElement.querySelector('.picture__likes').textContent = likes;
  fotoElement.querySelector('.picture__comments').textContent = comments.length;
  fotoElement.addEventListener('click', () => {
    showBigPicture(url, likes, comments, description)
  });
  miniatureFotoFragment.appendChild(fotoElement);
});

pictureElement.appendChild(miniatureFotoFragment);

export {pictureElement};
