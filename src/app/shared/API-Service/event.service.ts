
import { environment as env } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { GenericResponse } from '../Models/generic-response';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { Event } from '../Models/event';
@Injectable({
  providedIn: 'root'
})
export class EventService {


  constructor(private http: HttpClient) {

  }

public  getEvent(): Observable<GenericResponse<Event>> {
    return this.http.get<GenericResponse<Event>>(
      `${env.Server_URL}Event/Get`,

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
