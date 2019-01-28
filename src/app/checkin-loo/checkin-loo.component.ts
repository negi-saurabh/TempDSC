import { Component, OnInit } from '@angular/core';
import { SiteService } from '../site.service';
import { Loo } from '../loo';
import { Site } from '../site';

@Component({
  selector: 'app-checkin-loo',
  templateUrl: './checkin-loo.component.html',
  styleUrls: ['./checkin-loo.component.css']
})
export class CheckinLooComponent implements OnInit {
  site : Site;

  constructor(private siteService : SiteService) { }

  ngOnInit() {
    this.site = new Site('','','',0);
  }
  onSubmit(){
    this.siteService.createSite(this.site).subscribe(data=>
      {
      this.siteService.triggerRefresh(true);
      this.site.type="";
      this.site.nameOfBuilding="";
      this.site.openHours="";
      this.site.floor=0;
      }
    );
  }
}
