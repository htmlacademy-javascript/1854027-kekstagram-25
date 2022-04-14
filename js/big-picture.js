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
    closeBigPicture();
  }
};

function openBigPicture () {
  bigPictureElement.classList.remove('hidden');
  pageBody.classList.add('modal-open');
  document.addEventListener('keydown', offPictureEscKeydown);
}

function closeBigPicture () {
  bigPictureElement.classList.add('hidden');
  commentsCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', offPictureEscKeydown);
}

bigPictureCancel.addEventListener('click', () => {
  closeBigPicture ();
});


function showBigPicture (url, likes, comments, description) {

  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.comments-count').textContent = comments.length;
  bigPictureElement.querySelector('.social__caption').textContent = description;
  openBigPicture ();
}

export {showBigPicture};
