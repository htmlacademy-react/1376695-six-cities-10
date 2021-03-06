export type ownerType = {
  avatar: string,
  name: string,
  isPro: boolean,
}

export type offerType = {
  id: string,
  photos: string[],
  title: string,
  description: string;
  type: string,
  isPremium: boolean,
  stars: number,
  city: string,
  bedrooms: number,
  guestsMax: number,
  price: number,
  householdItems: string[],
  isFavorite: boolean,
  ownerInfo: ownerType,
  reviews: reviewType,
}

export type reviewType = {
  avatar: string,
  name: string,
  score: number,
  date: string,
  reviewText: string,
}
