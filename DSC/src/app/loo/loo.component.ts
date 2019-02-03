import { Component, OnInit } from '@angular/core';
import { Site } from '../site';
import { SITES } from '../mock-site';
import { Loo } from '../loo';
import { LooUser } from '../looUser';
import { NgForm } from '@angular/forms';
import { LooService } from '../loo.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-loo',
  templateUrl: './loo.component.html',
  styleUrls: ['./loo.component.css']
})
export class LooComponent implements OnInit {
	sites = SITES;
	selectedLoo: Site;
  lat: number;
  lng: number;
  looUser:LooUser;
  private user;
  private token;
  islogin: boolean;
  loo: Loo = <Loo>{};


	onSelect(site: Site): void {
		this.selectedLoo = site;
	}

  constructor(private looService: LooService,private router:Router) { }

  private getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(Position =>{
           debugger
          this.lat = Position.coords.latitude;
          this.lng = Position.coords.longitude;
      });
    }
  }

  ngOnInit() {
    debugger
    this.user = localStorage.getItem('currentUser');
    this.token = localStorage.getItem('accessToken');
    if(!!this.user && !!this.token){
        this.islogin = true;
    } else {
        this.islogin = false;
      }
    this.looUser = new LooUser();
    this.getUserLocation();
  }

  public loadComponent = false;
  loadMyChildComponent(){
       console.log(this.loadComponent);
       this.loadComponent = true;
       console.log(this.loadComponent);
    }

    OnSubmit(form: NgForm) {
        debugger
        //submit the site and save the site id in Loo
        this.loo.looLatitude = this.lat;
        this.loo.looLongitude = this.lng;
        this.loo.generalRating = 0;
        this.loo.looUserId = this.user;
        this.loo.siteId=  localStorage.getItem('siteid');
        this.looService.checkin(this.loo).subscribe();
        localStorage.removeItem('siteid');
        this.router.navigate(['/review']);
      }
}
