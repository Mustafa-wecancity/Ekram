import { ApiForImage } from './../../../shared/Models/appSetting';
import { Project } from './../../../shared/Models/project';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/API-Service/project.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public projects: Project[] = []
  public url: string = ApiForImage
  constructor(private ProjectService: ProjectService) {
  }
  ngOnInit(): void {
    this.getProjects()
    this.ProjectService.setScriptJs()

  }
  getProjects() {
    this.ProjectService.getProject().subscribe((project => {
      this.projects = project.data;

      console.log(this.projects)
    }))
  }
}
