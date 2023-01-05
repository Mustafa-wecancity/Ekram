import { Branch } from './../../../shared/Models/branch';
import { BranchService } from './../../../shared/API-Service/branch.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit, OnDestroy {
  public branchs: Branch[] = []
  private subscription = new Subscription();

  constructor(private _BranchService: BranchService) {

  }
  ngOnInit(): void {
    this.getBranch();
  }

  private getBranch() {
    const BranchSub = this._BranchService.getBranch().subscribe(branch => {
      this.branchs = branch.data
    })

    this.subscription.add(BranchSub)
    this._BranchService.setScriptJs()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
