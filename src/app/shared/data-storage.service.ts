import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Project } from '../projects/project.model'
import 'rxjs/Rx';
import { ProjectsService } from '../projects/projects.service';
@Injectable()
export class DataStorageService {
		constructor(private http: Http,
					private projectsService: ProjectsService) {}
	storeProjects() {
	return	this.http.put('https://portfolio-db-b3c6e.firebaseio.com/data.json', this.projectsService.getProjects());
	}
	getProjects() {
	return this.http.get('https://portfolio-db-b3c6e.firebaseio.com/data.json')
	// .map((response: Response)=> {
	// 		const projects: Project[] = response.json();
	// 		return projects;
	// 	})
	.subscribe((response: Response)=> {
			const projects: Project[] = response.json();
			this.projectsService.setProjects(projects);
			console.log(projects)
		})
	}
}