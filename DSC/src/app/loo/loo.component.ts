import { Component, OnInit } from '@angular/core';
import { Site } from '../site';
import { SITES } from '../mock-site';
import { Loo } from '../loo';
import { LooUser } from '../looUser';

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

	onSelect(site: Site): void {
		this.selectedLoo = site;
	}

  constructor() { }
  private getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(Position =>{
          this.lat = Position.coords.latitude;
          this.lng = Position.coords.longitude;
      });
    }
  }

  ngOnInit() {
    this.looUser = new LooUser();
    this.getUserLocation();
  }

  private loadComponent = false;
  loadMyChildComponent(){
       console.log(this.loadComponent);
       this.loadComponent = true;
       console.log(this.loadComponent);
    }
}
