import { EventDetailsComponent } from './event/event-details/event-details.component';
import { EventComponent } from './event/event.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component:EventComponent
  },
  {path:"details/:id",
  component:EventDetailsComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventModuleRoutingModule { }
