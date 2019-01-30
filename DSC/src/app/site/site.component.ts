import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../site';
import { Types } from '../typesOfSite'
import { SiteService } from '../site.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
	@Input() site: Site;
  types: Types[];
  looSite: Site;

  constructor(private siteService: SiteService,private router:Router) { }

  ngOnInit() {
    //Declaring the possible sites of the loo
    this.types=[
      {type:"Public-Loo"},
      {type:"Bar"},
      {type:"Restaurant"},
      {type:"Hotel"},
      {type:"Office"},
      {type:"University"}]

    this.looSite = new Site();
  }

  OnSubmit(form: NgForm) {
    debugger
    //submit the site and save the site id in Loo
    // this.siteService.registerSite(form.value).subscribe();
    this.router.navigate(['/review']);
  }

}
