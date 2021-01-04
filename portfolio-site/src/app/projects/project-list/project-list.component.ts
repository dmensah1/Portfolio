import { Component, OnInit } from '@angular/core';
import data from '../../../assets/Data.json';

@Component({
  selector: 'app-projects',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit{

  projects: any;
  filters: any = [];
  selectedFilter: any;

  ngOnInit() {
    this.projects = JSON.parse(JSON.stringify(data.projects));

    this.projects.forEach(project => {
        project.skills.forEach(skill => {
          let duplicateSkill = false;

          this.filters.forEach(filter => {
            if (filter == skill) {
              duplicateSkill = true;
            }
          });

          if (!duplicateSkill) {
            this.filters.push(skill);
          }
        });
    });
  }

  filterPicked(filter) {
    this.projects = JSON.parse(JSON.stringify(data.projects));
    
    if (filter == 'See All' || !filter) {
      return;
    } 
    else {
      this.projects = this.getFilteredProjects(filter);
    }
  }

  getFilteredProjects(filter) {
    let filteredProjects = [];

    this.projects.forEach(project => {
      if (project.skills.includes(filter)) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }

  goToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
