import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  sidenavWidth: any;

  constructor (private router: Router) {}
  
  openNav(){
		this.sidenavWidth = "220px";
	}

	closeNav(){
		this.sidenavWidth = 0;
  }
  
  toHome() {
    document.getElementById("home").scrollIntoView({behavior:"smooth"});
  }

  toAbout() {
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
  }

  toWork() {
    document.getElementById("work").scrollIntoView({behavior:"smooth"});
  }

  toProjects() {
    document.getElementById("projects").scrollIntoView({behavior:"smooth"});
  }

  toContact() {
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  }

}
