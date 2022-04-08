import {createFotos} from './data.js';

const pictureElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const miniatureFotos = createFotos();

const miniatureFotoFragment = document.createDocumentFragment();

miniatureFotos.forEach(({url, likes, comments}) => {
  const fotoElement = pictureTemplate.cloneNode(true);
  fotoElement.querySelector('.picture__img').src = url;
  fotoElement.querySelector('.picture__likes').style = likes;
  fotoElement.querySelector('.picture__comments').style = comments;
  miniatureFotoFragment.appendChild(fotoElement);
});

pictureElement.appendChild(miniatureFotoFragment);

export {pictureElement};
