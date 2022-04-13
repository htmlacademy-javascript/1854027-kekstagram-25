import {isEscapeKey} from './util.js';

const uploadForm = document.querySelector('img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const formEditFoto = document.querySelector('.img-upload__overlay');
const pageBody = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const textHashtags = document.querySelector('.text__hashtags');
const error = document.querySelector('.text__error-hashtag');

const pristine = new Pristine(uploadForm, {
  classTo: 'text__el--description',
  errorTextParent: 'text__el--description',
  errorTextClass: 'text__error'
});

function validateHashtags (value) {
  const hashtags = value.split(' ');
  for (let i=0; i < hashtags.length; i++) {
    const validHashtags = re.test(hashtags[i]);
    if (validHashtags === false) {
        error.textContent = 'Хэш-тег должен начинаться с #. Длина не превышает 20 символов';
        return false;
    }
  }
  const uniqHashtags = new Set(hashtags);

  if (hashtags.length !== uniqHashtags.size) {
    error.textContent = 'Хэш-теги должны быть уникальными';
    return false;
  }

  error.textContent = ' ';
  return true;
}

pristine.addValidator(textHashtags, validateHashtags);

const offPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditFotos();
  }
};

function openEditFotos () {
  formEditFoto.classList.remove('hidden');
  pageBody.classList.add('modal-open');
  document.addEventListener('keydown', offPictureEscKeydown);
}

function closeEditFotos () {
  formEditFoto.classList.remove('hidden');
  pageBody.classList.add('modal-open');
  document.removeEventListener('keydown', offPictureEscKeydown);
  document.addEventListener('submit', (evt) => {
    // Отключаем событие по умолчанию
    evt.prevent.Default(); 
    // Очищаем поля формы 
    evt.target.reset();
  });
}

uploadFile.addEventListener('change', () => {
  openEditFotos ();
});

uploadCancel.addEventListener('click', () => {
  closeEditFotos ();
});

textHashtags.addEventListener ('chahge', () => {
  pristine.validate();
});
