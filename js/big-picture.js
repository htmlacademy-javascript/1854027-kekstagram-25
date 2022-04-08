import './miniature.js';
import {isEscapeKey} from './util.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const pageBody = document.querySelector('body');

const offPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openBigPicture () {
  bigPictureElement.classList.remove('hidden');
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  pageBody.classList.add('modal-open');
  document.addEventListener('keydown', offPictureEscKeydown);
};

function closeBigPicture () {
  bigPictureElement.classList.add('hidden');
  commentsCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', offPictureEscKeydown);
};

pictureElement.addEventListener('click', () => {
  openBigPicture ();
});

bigPictureCancel.addEventListener('click', () => {
    closeBigPicture () 
});

const bigFoto = createFotos();

const bigFotoFragment = document.createDocumentFragment();

bigFoto.forEach(({url, likes, comments, description}) => {
  const fotoElement = pictureTemplate.cloneNode(true);
  fotoElement.querySelector('.picture__img').style = url;
  fotoElement.querySelector('.picture__likes').style = likes;
  fotoElement.querySelector('.picture__comments').style = comments;
  fotoElement.querySelector('.picture__comments').style = description;
  bigFotoFragment.appendChild(fotoElement);
});

bigPictureElement.appendChild(bigFotoFragment);
