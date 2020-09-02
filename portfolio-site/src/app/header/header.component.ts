import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  sidenavWidth: any;
  
  openNav(){
		this.sidenavWidth = "220px";
	}

	closeNav(){
		this.sidenavWidth = 0;
	}

}
