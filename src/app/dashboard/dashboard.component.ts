import { Component, OnInit } from '@angular/core';
import {Account} from '../Account';
import { CourseSummaryComponent } from './course-summary/course-summary.component';

import { AccountDataService } from '../account-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  account: Account;

  constructor(private accountData: AccountDataService) { }

  ngOnInit() {
    this.getAccount();
  }

  getAccount(): void {
    this.accountData.getAccount()
        .subscribe(account => this.account = account);
  }

}
