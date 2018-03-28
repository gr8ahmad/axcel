import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjectsComponent } from "./projects.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { ProjectsListComponent } from "./projects-list/project-list.component";
import { SingleProjectComponent } from "./projects-list/single-project/single-project.component";
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';
const projectsRoutes: Routes = [
	{path: 'projects', component: ProjectsComponent, children: [
    {path: 'projects-list', component: ProjectsListComponent},
   	{path: 'new', component: ProjectEditComponent},
    {path: ':id', component: ProjectDetailComponent},
    {path: ':id/edit', component: ProjectEditComponent, canActivate: [AuthGuard]}
	]}
]
@NgModule({
    imports: [
        RouterModule.forChild(projectsRoutes)
    ],
    exports: [RouterModule]
})
export class ProjectsRoutingModule {

}