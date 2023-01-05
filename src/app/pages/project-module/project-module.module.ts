import { ProjectComponent } from './project/project.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectModuleRoutingModule } from './project-module-routing.module';



@NgModule({
  declarations: [
    ProjectComponent

  ],
  imports: [
    CommonModule,
    ProjectModuleRoutingModule,
  ]
})
export class ProjectModuleModule { }
