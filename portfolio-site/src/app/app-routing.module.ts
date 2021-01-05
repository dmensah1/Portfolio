import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectViewComponent } from './projects/project-view/project-view.component';
import { LandingComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'Portfolio', component: LandingComponent },
  { path: 'list', component: ProjectListComponent},
  { path: 'project/:id', component: ProjectViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
