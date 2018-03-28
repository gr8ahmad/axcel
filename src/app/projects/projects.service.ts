import { Injectable } from "@angular/core";
import { Project } from "./project.model";
import { Subject } from 'rxjs/Subject'
@Injectable()
export class  ProjectsService {
    projectsChanged = new Subject<Project[]>();
    constructor() {}
    private projects: Project[] = [
        // new Project(
        //     'Project1',
        //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quasi minus aperiam facilis, repellat, distinctio magni optio officiis dolorem ullam unde accusantium dolores in nulla dolor fugit dolore esse enim?',
        //     'http://smjabidhasan.com/wp-content/uploads/bfi_thumb/wordpress-website-development-for-digital-marketing-agency-31uuybq8wrddkkm0b4270g.jpg'
        // ),
        // new Project(
        //     'Project2',
        //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quasi minus aperiam facilis, repellat, distinctio magni optio officiis dolorem ullam unde accusantium dolores in nulla dolor fugit dolore esse enim?',
        //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWX8cz_pb7i1enuuowU0p91OsEEjiGWB3hY-XnXpK6IFC767B6'
        // ),

        // new Project(
        //     'Project3',
        //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quasi minus aperiam facilis, repellat, distinctio magni optio officiis dolorem ullam unde accusantium dolores in nulla dolor fugit dolore esse enim?',
        //     'http://smjabidhasan.com/wp-content/uploads/bfi_thumb/wordpress-website-development-for-digital-marketing-agency-31uuybq8wrddkkm0b4270g.jpg'
        // )
    ];
    getProjects() {
        return this.projects.slice();
    }
    setProjects(projects: Project[]) {
        this.projects = projects;
        this.projectsChanged.next(this.projects.slice());
    }
    getProject(index: number) {
        return this.projects[index];
    }
    addProject(project: Project){
        this.projects.push(project);
        this.projectsChanged.next(this.projects.slice())
    }
    deleteProject(index: number) {
        this.projects.splice(index, 1);
        this.projectsChanged.next(this.projects.slice())
    }
    updateProject(index: number, newProject: Project) {
        this.projects[index] = newProject;
        this.projectsChanged.next(this.projects.slice())
    }
}