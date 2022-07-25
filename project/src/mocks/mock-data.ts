import {cityType, offerType, reviewType, Points, City} from '../types/types';

export function generateId():string {
  return `id${Math.random().toString(16).slice(2)}`;
}

export const reviews:reviewType[] = [
  {
    avatar: 'https://picsum.photos/id/31/54/54',
    name: 'Alesha',
    score: 5,
    date: 'August 2007',
    reviewText: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
  },
  {
    avatar: 'https://picsum.photos/id/65/54/54',
    name: 'Diana',
    score: 2,
    date: 'March 2016',
    reviewText: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
  {
    avatar: 'https://picsum.photos/id/89/54/54',
    name: 'Igor',
    score: 1,
    date: 'September 204',
    reviewText: 'Повседневная практика показывает, что начало повседневной работы по формированию позиции создаёт предпосылки качественно новых шагов для дальнейших направлений развитая системы массового участия. Дорогие друзья, постоянное информационно-техническое обеспечение нашей деятельности напрямую зависит от позиций, занимаемых участниками в отношении поставленных задач. ',
  },
  {
    avatar: 'https://picsum.photos/id/98/54/54',
    name: 'Vladislav',
    score: 4,
    date: 'December 2022',
    reviewText: 'Не следует, однако, забывать о том, что постоянное информационно-техническое обеспечение нашей деятельности представляет собой интересный эксперимент проверки дальнейших направлений развитая системы массового участия!',
  },
  {
    avatar: 'https://picsum.photos/id//54/54',
    name: 'Arsen',
    score: 5,
    date: 'May 2019',
    reviewText: 'С другой стороны консультация с профессионалами из IT обеспечивает широкому кругу специалистов участие в формировании ключевых компонентов планируемого обновления. ',
  },
];

export const cities:cityType[] = [
  {cityName: 'Paris', cityId: 0},
  {cityName: 'Cologne', cityId: 1},
  {cityName: 'Brussels', cityId: 2},
  {cityName: 'Amsterdam', cityId: 3},
  {cityName: 'Hamburg', cityId: 4},
  {cityName: 'Dusseldord', cityId: 5},
];

export const offers: offerType[] = [
  {
    id: generateId(),
    photos: ['https://picsum.photos/id//1/260/200','https://picsum.photos/id//2/260/200','https://picsum.photos/id//3/260/200','https://picsum.photos/id//4/260/200'],
    title: 'Aliquam sed nisi volutpat, tempus lacus in, ultricies mi',
    description: 'Etiam semper eu dolor in bibendum. Aliquam non hendrerit nisl. Mauris tincidunt tellus non ante fermentum tempus. Sed ultrices lorem nisl, vel commodo ante volutpat nec. Ut mollis nisl eu arcu hendrerit pulvinar. Donec eget leo elementum nisl malesuada viverra. Mauris eu semper velit. Ut mattis nisl vel dui ultrices sagittis. Nam porttitor iaculis dui at ultrices. Mauris a laoreet dolor. Fusce turpis risus, sodales vulputate lorem at, vehicula placerat purus. Ut nec laoreet nisl.',
    type: 'apartment',
    isPremium: true,
    stars: 3,
    city: cities[1],
    bedrooms: 2,
    guestsMax: 7,
    price: 4534,
    householdItems: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    isFavorite: true,
    ownerInfo: {
      avatar: 'https://picsum.photos/id//1/74/74',
      name: 'Suzan',
      isPro: true,
    },
    reviews: reviews[0],
  },
  {
    id: generateId(),
    photos: ['https://picsum.photos/id//5/260/200','https://picsum.photos/id//6/260/200','https://picsum.photos/id//7/260/200','https://picsum.photos/id//8/260/200'],
    title: 'Donec pulvinar felis sed ante maximus fringilla',
    description: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque id finibus tellus',
    type: 'flat',
    isPremium: false,
    stars: 5,
    city: cities[1],
    bedrooms: 1,
    guestsMax: 4,
    price: 3576,
    householdItems: ['Wifi', 'Kitchen', 'Cable TV'],
    isFavorite: false,
    ownerInfo: {
      avatar: 'https://picsum.photos/id//2/74/74',
      name: 'Max',
      isPro: false,
    },
    reviews: reviews[1],
  },
  {
    id: generateId(),
    photos: ['https://picsum.photos/id//9/260/200','https://picsum.photos/id//10/260/200','https://picsum.photos/id//11/260/200','https://picsum.photos/id//12/260/200'],
    title: 'Morbi congue porta ex, id convallis est mattis nec.',
    description: 'Sed vitae nunc vitae massa varius aliquam sit amet id ante. Maecenas at accumsan quam. Proin quis enim vulputate, suscipit dui non, luctus justo.',
    type: 'villa',
    isPremium: true,
    stars: 4,
    city: cities[2],
    bedrooms: 5,
    guestsMax: 14,
    price: 15757,
    householdItems: ['Wifi', 'Kitchen', 'Cable TV', 'Pool', 'Backyard'],
    isFavorite: true,
    ownerInfo: {
      avatar: 'https://picsum.photos/id//3/74/74',
      name: 'Sergei',
      isPro: true,
    },
    reviews: reviews[2],
  },
  {
    id: generateId(),
    photos: ['https://picsum.photos/id//13/260/200','https://picsum.photos/id//14/260/200','https://picsum.photos/id//15/260/200','https://picsum.photos/id//16/260/200'],
    title: 'Donec viverra orci dui, eu placerat arcu malesuada ac.',
    description: 'Ut mollis nisl eu arcu hendrerit pulvinar. Donec eget leo elementum nisl malesuada viverra. Mauris eu semper velit. Ut mattis nisl vel dui ultrices sagittis. ',
    type: 'atelier',
    isPremium: false,
    stars: 5,
    city: cities[3],
    bedrooms: 1,
    guestsMax: 2,
    price: 3435,
    householdItems: ['Wifi', 'Kitchen', 'Cable TV', 'Balcony'],
    isFavorite: true,
    ownerInfo: {
      avatar: 'https://picsum.photos/id//4/74/74',
      name: 'Nika',
      isPro: false,
    },
    reviews: reviews[3],
  },
];

export const POINTS: Points = [
  {
    title: 'Саундвью',
    lat: 40.816881,
    lng: -73.872768
  },
  {
    title: 'Ферри Поинт',
    lat: 40.814909,
    lng: -73.830682
  },
  {
    title: 'Бронкс',
    lat: 40.862413,
    lng: -73.879357
  },
  {
    title: 'Инвуд-Хилл',
    lat: 40.870817,
    lng: -73.927112
  },
  {
    title: 'Пелхэм-Бей-Парк',
    lat: 40.877312,
    lng: -73.807182
  }
];

export const mainCity:City = {
  title: 'Нью-Йорк',
  lat: 40.835292,
  lng: -73.916236,
  zoom: 10
};
