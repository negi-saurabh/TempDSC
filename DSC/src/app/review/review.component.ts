import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReviewService } from '../review.service'
import { Router } from '@angular/router';
import { Review } from '../review';
import { LooService } from '../loo.service';
import { Loo } from '../loo';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  review: Review
  private user;
  private token;
  loouser: string;
  islogin: boolean;
  marLat: string;
  marLng: string;
  loo: Loo;
  parentMessage: false;

  constructor(private reviewService: ReviewService,private looService:LooService, private router:Router) { }

  ngOnInit() {
    this.review = new Review();
    debugger
    localStorage.setItem('purpose',"RL");
    this.user = localStorage.getItem('currentUser');
    this.token = localStorage.getItem('accessToken');
    if(!!this.user && !!this.token)
      {
        this.islogin = true
        //this.router.navigate(['/review']);
      } else
      {
        this.islogin = false;
        this.router.navigate(['/login']);
      }

  }

  onSubmit(form: NgForm) {
    debugger
    this.marLat = localStorage.getItem('markerLat');
    this.marLng = localStorage.getItem('markerLong');

    if(!!this.marLat && !!this.marLng){
        this.looService.getNearbyLatlong().subscribe(data=>{
          debugger
          let site = data;
          console.log(data);
        });
        this.looService.getMarkerLoo(this.loo).subscribe();
        localStorage.removeItem('markerLat');
        localStorage.removeItem('purpose');
        localStorage.removeItem('markerLong');
        } else {
      //submit the site and save the site id in Loo
      this.reviewService.registerReviews(form.value).subscribe();
      alert("Loo checked-In and review Successfully posted")
      localStorage.removeItem('looId');
      localStorage.removeItem('purpose');
      localStorage.removeItem('reviewid');
      this.router.navigate(['/find-loo']);
    }
  }

}
