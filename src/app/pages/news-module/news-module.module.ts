import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsModuleRoutingModule } from './news-module-routing.module';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsModuleRoutingModule
  ]
})
export class NewsModuleModule { }
