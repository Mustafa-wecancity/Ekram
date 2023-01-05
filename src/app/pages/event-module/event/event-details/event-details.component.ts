import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute){

  }
  ngOnInit(): void {
    const id = this._ActivatedRoute.snapshot.params['id'];

    this.getProjectDetails(id)
  }

  private getProjectDetails(id:number){
    
  }

}
