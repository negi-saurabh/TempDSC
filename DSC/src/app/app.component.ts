import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loo-Finder';
      constructor(public router: Router) {
      }

    private loadComponent = false;
    private user;
    private token;

    /**loadChildComponentforCheckin(){
        //need to check if user is already logged in. if not send false
          debugger
          this.user = localStorage.getItem('currentUser');
          this.token = localStorage.getItem('accessToken');
          if(!!this.user && !!this.token){
             this.router.navigate(['/site']);
           } else {
             this.router.navigate(['/checkin-loo']);
           }
      }

    loadChildComponentloadforRating(){
           //need to check if user is already logged in. if not send false
           debugger
           this.user = localStorage.getItem('currentUser');
           this.token = localStorage.getItem('accessToken');
           if(!!this.user && !!this.token){
             this.router.navigate(['/find-loo']);
           } else {
             this.router.navigate(['/checkin-loo']);
         }
       }**/
}
