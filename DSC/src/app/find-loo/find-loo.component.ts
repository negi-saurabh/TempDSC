import { Component, OnInit, Input } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-find-loo',
  templateUrl: './find-loo.component.html',
  styleUrls: ['./find-loo.component.css']
})
export class FindLooComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getCurrentLocation(event){
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
  lat: number = 52.3338;
  lng: number = 4.8657;
}
