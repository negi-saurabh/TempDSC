import { Component, OnInit, Input } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { LOC } from '../mock-locations'

@Component({
  selector: 'app-find-loo',
  templateUrl: './find-loo.component.html',
  styleUrls: ['./find-loo.component.css']
})
export class FindLooComponent implements OnInit {
  lat: number;
  lng: number;
  locations = LOC;
  constructor() { }

  ngOnInit() {
    this.getUserLocation()
  }

  private getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(Position =>{
          this.lat = Position.coords.latitude;
          this.lng = Position.coords.longitude;
      });
    }
  }

  getLocationOnConsole(event){
    console.log(event);
  }

}
