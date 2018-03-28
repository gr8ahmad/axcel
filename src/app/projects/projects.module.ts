import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms'
import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectsListComponent } from "./projects-list/project-list.component";
import { ProjectsComponent } from "./projects.component";
import { SingleProjectComponent } from "./projects-list/single-project/single-project.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { DemoMaterialModule } from '../material/material.module';
@NgModule({
    declarations: [
        ProjectsListComponent,
        ProjectsComponent,
        SingleProjectComponent,
        ProjectDetailComponent,
        ProjectEditComponent
    ],
    imports: [
        CommonModule, 
        ProjectsRoutingModule,
        DemoMaterialModule,
        ReactiveFormsModule
    ],

})
export class ProjectsModule {
}