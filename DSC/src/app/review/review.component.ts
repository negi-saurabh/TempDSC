import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReviewService } from '../review.service'
import { Router } from '@angular/router';
import { Review } from '../review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  review: Review

  constructor(private reviewService: ReviewService,private router:Router) { }

  ngOnInit() {
    this.review = new Review();
  }

  OnSubmit(form: NgForm) {
    debugger
    //submit the site and save the site id in Loo
    this.reviewService.registerReviews(form.value).subscribe();
    this.router.navigate(['/review']);
  }

}
