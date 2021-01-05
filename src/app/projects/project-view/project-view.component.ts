import { Component, OnInit } from '@angular/core';
import data from '../../../assets/data.json';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit{
  projectId: string;
  projects: any;
  projectImgs;
  projectSkills;
  faAngleLeft = faAngleLeft;

  constructor(private route: ActivatedRoute, config: NgbCarouselConfig, private _location: Location) {
    if (this.route.snapshot.params['id']) { // might need to change these to blogId
      this.projectId = this.route.snapshot.paramMap.get('id');
    }

    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    this.projects = JSON.parse(JSON.stringify(data.projects));
    this.projects = this.projects.filter(project => project.id == this.projectId);
    this.projectImgs = this.projects[0].pictures;
    this.projectSkills = this.projects[0].skills;
  }

  backClicked() {
    this._location.back();
  }
}
