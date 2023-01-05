import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent implements OnInit{
  title = 'pro';

  myScriptElement: any=""
  constructor(){


  }
  ngOnInit(): void {
    debugger
    document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "./../assets/js/oxpins.js";
    document.body.appendChild(this.myScriptElement)


  }
}
