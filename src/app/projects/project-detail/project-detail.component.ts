import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ProjectsService } from '../projects.service'
import { Project } from '../project.model';
import { AuthService } from '../../auth/auth.service' 
@Component ({
    selector: 'project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit{
id: number;
project: Project;
isAllowed = false;
constructor(private route: ActivatedRoute,
			private projectsService: ProjectsService,
            private router: Router,
            private authService: AuthService) {}
ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params.subscribe(
    	(params: Params)=> {
    		this.id = +params['id'];
    		this.project = this.projectsService.getProject(this.id);
    	}
    	)
    this.isAllowed = this.authService.isAuthunticated();
    console.log(this.isAllowed);
}
onEditProject() {
    this.router.navigate(['edit'], {relativeTo: this.route})
}
onDeleteProject() {
    this.projectsService.deleteProject(this.id);
    this.router.navigate(['/projects/projects-list'])
}
}