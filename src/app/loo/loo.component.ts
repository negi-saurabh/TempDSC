import { Component, OnInit } from '@angular/core';
import { Site } from '../site';
import { SITES } from '../mock-site';

@Component({
  selector: 'app-loo',
  templateUrl: './loo.component.html',
  styleUrls: ['./loo.component.css']
})
export class LooComponent implements OnInit {
	sites = SITES;
	selectedLoo: Site;
	
	onSelect(site: Site): void {
		this.selectedLoo = site;
	}

  constructor() { }

  ngOnInit() {
  }

}
