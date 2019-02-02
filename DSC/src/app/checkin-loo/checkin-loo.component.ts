import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkin-loo',
  templateUrl: './checkin-loo.component.html',
  styleUrls: ['./checkin-loo.component.css']
})
export class CheckinLooComponent implements OnInit {

  private user;
  private token;
  loouser: string;
  islogin: boolean;

  constructor(private router:Router) { }

  ngOnInit() {
    debugger
    this.user = localStorage.getItem('currentUser');
    if(!!this.user){
        this.islogin = true;
        this.router.navigate(['/site']);
    } else {
        this.islogin = false;
      }

  }

  onSubmit(){

  }
}
