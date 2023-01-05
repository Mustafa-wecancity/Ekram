import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchModuleRoutingModule } from './branch-module-routing.module';
import { BranchComponent } from './branch/branch.component';


@NgModule({
  declarations: [
    BranchComponent
  ],
  imports: [
    CommonModule,
    BranchModuleRoutingModule
  ]
})
export class BranchModuleModule { }
