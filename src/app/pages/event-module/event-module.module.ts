import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventModuleRoutingModule } from './event-module-routing.module';
import { EventComponent } from './event/event.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';


@NgModule({
  declarations: [
    EventComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    EventModuleRoutingModule
  ]
})
export class EventModuleModule { }
