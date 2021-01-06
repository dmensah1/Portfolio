import { Component } from "@angular/core";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-landing',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css']
})
export class LandingComponent {
    faAngleRight = faAngleRight;

}