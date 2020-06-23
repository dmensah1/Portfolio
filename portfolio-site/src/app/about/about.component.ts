import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  images = [];

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;

    this.images[0] = '/assets/project-imgs/western1.jpg';
    this.images[1] = '/assets/project-imgs/halifax.jpg';

  }
}
