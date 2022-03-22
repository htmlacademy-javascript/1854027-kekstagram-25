// Старая домашка
export function getRandom (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const checkLine = (row, maxLength) => row.length<maxLength;

// Это на проверку
const DESCRIPTION = [
	'Пейзаж',
	'Закат',
	'Горы',
	'Озеро',
	'Момент'
]

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках.',
  'Как можно было поймать такой неудачный момент?!'
]

const NAME = [
  'Вася',
  'Маша',
  'Коля',
  'Паша',
  'Маня',
  'Саша'
]

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

const createComments = () => {
  return {
    id: getRandomPositiveInteger(1, 200),
    avatar: 'img/avatar-'+getRandomPositiveInteger(1, 6)+'.svg',
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME)
  };
};

const commentsFoto = Array.from({length: 1}, createComments);

console.log(commentsFoto);

createFoto = () => {
	return {
		id: getRandomPositiveInteger(1, 25),
		url: 'photos/'+getRandomPositiveInteger(1, 25)+'.jpg',
		description: getRandomArrayElement(DESCRIPTION),
		likes: getRandomPositiveInteger(15, 200),
		comments: commentsFoto
	}
}

const foto = Array.from({length: 1}, createFoto);

console.log(foto);