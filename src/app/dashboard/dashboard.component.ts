import { Component, OnInit } from '@angular/core';
import {Account} from '../account';
import {Course} from '../course';

import { CourseSummaryComponent } from './course-summary/course-summary.component';

import { AccountDataService } from '../account-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  account: Account;

  courses: Course[];


  constructor(private accountData: AccountDataService) { }

  ngOnInit() {
    this.getAccount();
    this.getCourses();
  }

  getAccount(): void {
    this.accountData.getAccount()
        .subscribe(account => this.account = account);
  }

  getCourses(): void {
    this.accountData.getCourses()
        .subscribe(courses => this.courses = courses);
  }

}
