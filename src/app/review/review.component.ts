import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';
import { Review } from '../review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  review : Review;

  constructor(private reviewService : ReviewService) { }

  ngOnInit() {
    this.review = new Review(0,0,0,false,"");
    // 0,0,0,false,""
  }

  onSubmit(){
    this.reviewService.createReview(this.review).subscribe()
      // {
      // this.reviewService.triggerRefresh(true);
      // this.review.newRating=0;
      // this.review.price=0;
      // this.review.cleaness=0;
      // this.review.disabledFriendly=false;
      // this.review.comment="";
      // }
    // );
  }

}
