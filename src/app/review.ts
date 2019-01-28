export class Review {
  constructor(
    newRating: number,
    price: number,
    cleaness: number,
    disabledFriendly: boolean,
    comment: string,
    reviewId?: number
){
this.reviewId = reviewId;
this.newRating = newRating;
this.price = price;
this.cleaness= cleaness;
this.disabledFriendly= disabledFriendly;
this.comment= comment;
}

  reviewId: number;
  newRating: number;
  price: number;
  cleaness: number;
  disabledFriendly: boolean;
  comment: string;
}
