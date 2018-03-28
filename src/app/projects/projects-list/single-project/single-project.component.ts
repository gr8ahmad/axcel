import { Component, Input } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { Project } from "../../project.model";
@Component({
    selector: 'single-project',
    templateUrl: './single-project.component.html',
    styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent {
@Input() project: Project;
@Input() index: number;

    constructor(private router: Router, 
    			private route: ActivatedRoute) {}

  onSelect() {
  	this.router.navigate(['../' + this.index], {relativeTo: this.route})
  }
}