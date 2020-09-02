import { Component, OnInit } from '@angular/core';
import data from '../../../assets/Data.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit{
  projectId: string;
  projects: any;

  constructor(private route: ActivatedRoute) {
    if (this.route.snapshot.params['id']) { // might need to change these to blogId
      this.projectId = this.route.snapshot.paramMap.get('id');
    }
  }

  ngOnInit() {
   // console.log(this.projectId);
    this.projects = JSON.parse(JSON.stringify(data.projects));
    this.projects = this.projects.filter(project => project.id == this.projectId);
  }
}
