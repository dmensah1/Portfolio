import { Component, OnInit } from '@angular/core';
import data from '../../../assets/Data.json';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit{
  projectId: string;
  projects: any;
  projectImgs;
  projectSkills;

  constructor(private route: ActivatedRoute, config: NgbCarouselConfig) {
    if (this.route.snapshot.params['id']) { // might need to change these to blogId
      this.projectId = this.route.snapshot.paramMap.get('id');
    }

    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    console.log(this.projectId);
    this.projects = JSON.parse(JSON.stringify(data.projects));
    this.projects = this.projects.filter(project => project.id == this.projectId);
    this.projectImgs = this.projects[0].pictures;
    this.projectSkills = this.projects[0].skills;
    //console.log(this.projectSkills);
  }
}
