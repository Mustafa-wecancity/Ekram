import { Branch } from './../Models/branch';
import { environment as env } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { GenericResponse } from '../Models/generic-response';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class BranchService {


  constructor(private http: HttpClient) { }

public  getBranch(): Observable<GenericResponse<Branch>> {
    return this.http.get<GenericResponse<Branch>>(
      `${env.Server_URL}Branch/Get`,
    );
  }

  private myScriptElement: any = ""

public  setScriptJs() {

    document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "./../assets/js/oxpins.js";
    document.body.appendChild(this.myScriptElement)
  }

}
