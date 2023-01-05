import { ProjectImage } from './../../../shared/Models/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/shared/API-Service/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/Models/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  public projectCompletio: any
  public project: any
  public projectImage: ProjectImage[] = []
  constructor(private ProjectService: ProjectService, private _ActivatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    const id = +this._ActivatedRoute.snapshot.params['id'];

    this.getProjects(id)
  }
  getProjects(id: number) {
    this.ProjectService.getByIdtProject(id).subscribe(project => {
      this.project = project.data;

    })
    this.ProjectService.getProjectCompletio(id).subscribe(project => {
      this.projectCompletio = project.data;
    })
    this.ProjectService.getProjectImage(id).subscribe(project => {
      this.projectImage = project.data;
    })
  }

}
