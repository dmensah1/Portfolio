import { Component, OnInit } from '@angular/core';
import data from '../../../assets/Data.json';

@Component({
  selector: 'app-projects',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit{

  projects: any;
  searchWord: string;

  ngOnInit() {
    this.projects = JSON.parse(JSON.stringify(data.projects));
  }

  goToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
