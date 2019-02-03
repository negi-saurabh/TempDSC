import { Component, OnInit, Input } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { LOC } from '../mock-locations'
import { LooService } from '../loo.service';
import { Loo } from '../loo';
import { Location } from '../location';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

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
  icon: object;
  private user;
  private token;
  generalRating : number;
  marLat: number;
  marLng: number;

  allLoc: Location[];
  constructor(private looService: LooService,private router:Router){}

  ngOnInit() {
    this.getUserLocation()
    this.getNearbyLoos();
    this.looService.listNeedsRefresh.subscribe(needsRefresh=>{
       if(needsRefresh)
        this.getNearbyLoos();
    });
    this.icon = {
              url: '../../assets/images/loo2.png',
              scaledSize: {
                width: 40,
                height: 40
              }
            }
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

      this.loo = loos[0];
    });
  }

  getLocationOnConsole(event){
    console.log(event);
  }

  markerClicked(loc, i) {
    debugger
    console.log('clicked');
    console.log(loc);
    this.marLat=loc.looLatitude;
    this.marLng=loc.looLongitude;
    this.generalRating = loc.generalRating;
    //localStorage.removeItem('purpose');
    //localStorage.setItem('purpose',"RL");
    localStorage.setItem('markerLat',this.marLat.toString());
    localStorage.setItem('markerLong',this.marLng.toString());
    this.router.navigate(['/review']);
    }


    onMouseOver(infoWindow, gm) {
        debugger
        if (gm.lastOpen != null) {
            gm.lastOpen.close();
        }

        gm.lastOpen = infoWindow;

        infoWindow.open();
    }
}
