
import { environment as env } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { GenericResponse } from '../Models/generic-response';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {

  }

public  getNews(): Observable<GenericResponse<any>> {
    return this.http.get<GenericResponse<any>>(
      `${env.Server_URL}News/Get`,

    );
  }

private  myScriptElement: any=""

public  setScriptJs(){

    document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "./../assets/js/oxpins.js";
    document.body.appendChild(this.myScriptElement)
  }


}
