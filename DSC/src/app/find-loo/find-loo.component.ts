import { Component, OnInit, Input } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { LOC } from '../mock-locations'
import { LooService } from '../loo.service';
import { Loo } from '../loo';
import { Location } from '../location';

@Component({
  selector: 'app-find-loo',
  templateUrl: './find-loo.component.html',
  styleUrls: ['./find-loo.component.css']
})
export class FindLooComponent implements OnInit {
  lat: number;
  lng: number;
  locations = LOC;
  looLocations: Loo[];
  loo: Loo;

  allLoc: Location[];
  constructor(private looService: LooService){}

  ngOnInit() {
    this.getUserLocation()
    this.getNearbyLoos();
    this.looService.listNeedsRefresh.subscribe(needsRefresh=>{
       if(needsRefresh)
        this.getNearbyLoos();
    });
  }

  private getUserLocation(){
      if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(Position =>{
          this.lat = Position.coords.latitude;
          this.lng = Position.coords.longitude;
      });
    }
  }

  getNearbyLoos() : void{
    this.looService.getNearbyLoos()
    .subscribe(loos =>{
      this.looLocations = loos;
      debugger
      this.loo = loos[0];
    });
  }

  getLocationOnConsole(event){
    console.log(event);
  }
}
