import { ApiForImage } from './../../../shared/Models/appSetting';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/API-Service/event.service';
import { Event } from 'src/app/shared/Models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit, OnDestroy {
  public events: Event[] = [];
  private subscription = new Subscription();
  public urlImg =ApiForImage

  constructor(private _EventService: EventService) {

   }
   ngOnInit(): void {
         this.getEvent()
   }
  public getEvent() {
    this._EventService.getEvent().subscribe(event => {
      this.events = event.data
    })
    this._EventService.setScriptJs()
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}

