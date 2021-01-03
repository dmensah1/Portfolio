import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import data from '../../../assets/data.json';

@Component({
    selector: 'app-project-preview',
    templateUrl: './project-preview.component.html',
    styleUrls: ['./project-preview.component.css']
})
export class ProjectPreviewComponent implements OnInit {

    projects: any;

    constructor(private router: Router) {}

    ngOnInit() {
      this.projects = JSON.parse(JSON.stringify(data.projects));

      this.projects = this.projects.slice(0, 3);
      console.log(this.projects);
    }

    projectSelected(project) {
      this.router.navigate(['/project', project.id]);
    }

}