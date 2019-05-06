import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users-and-posts';

  routeLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router){
  	this.routeLinks = [
  	{
  		label:'Users',
  		link:'./users',
  		index:0,
  	},{
  		label:'Posts',
  		link:'./posts',
  		index: 1,
  	}];
  }

  ngOnInit(){
  	this.router.events.subscribe((res) => {
  		this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
  	});
  }

  getActiveClass(indexOfRouteLink){
	let tabsclass = 'mat-tab-link';
		if(this.activeLinkIndex == indexOfRouteLink){
			tabsclass = 'mat-tab-link mat-tab-label-active';
		}
		return tabsclass;
  }
}
