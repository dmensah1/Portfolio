import { Component, OnInit } from "@angular/core";
import data from '../../assets/data.json';


@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit{
    experiences = [];

    ngOnInit() {
        this.experiences = JSON.parse(JSON.stringify(data.work));
    }
}