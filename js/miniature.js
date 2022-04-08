import {createFotos} from './data.js';

const pictureElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const miniatureFotos = createFotos();

const miniatureFotoFragment = document.createDocumentFragment();

miniatureFotos.forEach(({url, likes, comments}) => {
  const fotoElement = pictureTemplate.cloneNode(true);
  fotoElement.querySelector('.picture__img').style.fill = url;
  fotoElement.querySelector('.picture__likes').style.fill = likes;
  fotoElement.querySelector('.picture__comments').style.fill = comments;
  miniatureFotoFragment.appendChild(fotoElement);
});

pictureElement.appendChild(miniatureFotoFragment);
