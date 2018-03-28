import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ProjectsService } from '../projects.service';
import { Project } from '../project.model';
import { DataStorageService } from '../../shared/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-projects-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects: Project[];
  editMode = true;
  isAllowed = false;
  constructor(private projectsService: ProjectsService,
  			      private dataStorageService: DataStorageService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) { }
  ngOnInit() {
    this.projects = this.projectsService.getProjects();
    this.isAllowed = this.authService.isAuthunticated();
  }
  onStoreData() {
  	this.dataStorageService.storeProjects().subscribe(
  		(response: Response)=> {
  			console.log(response)
  		}
  		)
  }
  onFetchData() {
    this.dataStorageService.getProjects()
  }
  addProject() {
    this.router.navigate(['../new'], {relativeTo: this.route})
  }

}
