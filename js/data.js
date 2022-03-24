import {getRandomPositiveInteger} from './util.js';
import {getRandomArrayElement} from './util.js';

const DESCRIPTION = [
'Пейзаж',
'Закат',
'Горы',
'Озеро',
'Момент'
];

const MESSAGE = [
'Всё отлично!',
'В целом всё неплохо. Но не всё.',
'В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках.',
'Как можно было поймать такой неудачный момент?!'
];

const NAME = [
'Вася',
'Маша',
'Коля',
'Паша',
'Маня',
'Саша'
];

const createComments = () => ({
id: getRandomPositiveInteger(1, 200),
avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
message: getRandomArrayElement(MESSAGE),
name: getRandomArrayElement(NAME)
});

const commentsFoto = Array.from({length: 1}, createComments);

const createFoto = () => ({
id: getRandomPositiveInteger(1, 25),
url: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
description: getRandomArrayElement(DESCRIPTION),
likes: getRandomPositiveInteger(15, 200),
comments: commentsFoto
});

const createFotos = Array.from({length: 1}, createFoto);

export {createFotos};
  