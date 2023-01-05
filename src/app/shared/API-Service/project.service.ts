import { Project, ProjectImage } from './../Models/project';
import { environment as env } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { GenericResponse } from '../Models/generic-response';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {

  }

  public getProject(): Observable<GenericResponse<Project[]>> {
    return this.http.get<GenericResponse<Project[]>>(
      `${env.Server_URL}Project/Get`,

    );
  }
  public getByIdtProject(id: number): Observable<GenericResponse<Project>> {
    return this.http.get<GenericResponse<Project>>(
      `${env.Server_URL}Project/GetById?Id=${id}`,

    );
  }
public getProjectCompletio(id: number): Observable<GenericResponse<any>> {
    return this.http.get<GenericResponse<any>>(
      `${env.Server_URL}ProjectCompletion/Get?projectId=${id}`,

    );
  }
  public getProjectImage(id: number): Observable<GenericResponse<ProjectImage[]>> {
    return this.http.get<GenericResponse<ProjectImage[]>>(
      `${env.Server_URL}ProjectImage/Get?projectId=${id}`,

    );
  }

  private myScriptElement: any = ""

  public setScriptJs() {

    document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "./../assets/js/oxpins.js";
    document.body.appendChild(this.myScriptElement)
  }


}
