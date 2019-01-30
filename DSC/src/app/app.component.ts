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
    loadChildComponentforCheckin(){
        //need to check if user is already logged in. if not send false
         this.loadComponent = true;
      }

    loadChildComponentloadforRating(){
           //need to check if user is already logged in. if not send false
           this.loadComponent = true;
        }

}
