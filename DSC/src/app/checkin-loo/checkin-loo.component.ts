import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LooUser } from '../looUser'
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-checkin-loo',
  templateUrl: './checkin-loo.component.html',
  styleUrls: ['./checkin-loo.component.css']
})
export class CheckinLooComponent implements OnInit {

  private user;
  private token;
  looUser: LooUser;
  islogin: boolean;

  constructor(private router:Router,private authenticationService: AuthenticationService,) { }

  ngOnInit() {
    debugger
    localStorage.removeItem('purpose');
    localStorage.setItem('purpose',"CL");
    this.user = localStorage.getItem('currentUser');
    this.token= localStorage.getItem('accessToken');
    this.looUser = new LooUser();
    if(!!this.user && !!this.token){
        this.islogin = true;
        this.router.navigate(['/site']);
    } else {
        this.islogin = false;
        //alert("You are not logged in please login");
        //this.router.navigate(['/checkin-loo']);
      }
  }

  onSubmit(){

      var response=this.authenticationService.login(this.looUser).subscribe();
    }
}
