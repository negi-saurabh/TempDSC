import { Component, OnInit } from '@angular/core';
import { LooUser } from '../looUser';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { LOOSERS } from '../mock-looUsers'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,private router:Router) { }
  private user;
  private token;
  looUser: LooUser;
  username : String;


  ngOnInit() {
        this.username = localStorage.getItem('username');
        this.user = localStorage.getItem('currentUser');
        this.token= localStorage.getItem('accessToken');
        this.looUser = new LooUser();
        let purpose=localStorage.getItem('purpose');
        debugger
        if(purpose==="CL" && !!this.user && !!this.token){
          this.router.navigate(['/site']);
        }
        else if (purpose==="RL" && !!this.user && !!this.token){
          this.router.navigate(['/review']);
        }
        else{
          alert("Need to login with right Credentials, before check-in or reviewing a Loo");
          //this.router.navigate(['/login']);
          }
  }

  onSubmit(){
    //let accessToken=localStorage.getItem('accessToken');
     //var response=this.authenticationService.getUser().subscribe();
     var response=this.authenticationService.login(this.looUser).subscribe();
     this.router.navigate(['/checkin-loo']);
   }
}
