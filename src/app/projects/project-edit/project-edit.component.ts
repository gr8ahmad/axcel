import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { Project } from '../project.model';
import { DataStorageService } from '../../shared/data-storage.service';
@Component({
	selector: 'project-edit',
	templateUrl: './project-edit.component.html',
	styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit{
	projectForm: FormGroup;
	id:number;
	editMode = false;
	constructor(private route: ActivatedRoute,
				private projectsService: ProjectsService,
				private router: Router,
				private dataStorageService: DataStorageService) {}
	ngOnInit() {
		this.route.params.subscribe(
			(params: Params)=> {
				this.id = +params['id'];
				this.editMode = params['id'] != null;
				console.log(this.id);
				console.log(this.editMode)
				this.initForm()
			}
			)
}
private initForm() {
	let projectName = '';
	let porjectIamgePath = '';
	let projectDescription = '';
	if(this.editMode) {
	const project = this.projectsService.getProject(this.id);
	projectName = project.name;
	porjectIamgePath = project.imagePath;
	projectDescription = project.description;
	}

		this.projectForm = new FormGroup({
			name: new FormControl(projectName, Validators.required),
			imagePath: new FormControl(porjectIamgePath, Validators.required),
			description: new FormControl(projectDescription, Validators.required)
		})

	}
	onSave() {
		if(this.editMode) {
			this.projectsService.updateProject(this.id, this.projectForm.value);
			this.dataStorageService.storeProjects().subscribe(
				(response=> console.log(response))
				)
			this.router.navigate(['/projects/projects-list']);
		}
		else {
			this.projectsService.addProject(this.projectForm.value);
			this.dataStorageService.storeProjects().subscribe(
				(response=> console.log(response))
				)
			this.router.navigate(['/projects/projects-list'])
		}
	}
}