import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../site';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
	@Input() site: Site;
	
  constructor() { }

  ngOnInit() {
  }

}
