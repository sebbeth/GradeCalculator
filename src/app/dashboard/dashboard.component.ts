import { Component, OnInit } from '@angular/core';
import {Account} from '../account';
import {Course} from '../course';
import {Blerp} from '../blerp';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CourseSummaryComponent } from './course-summary/course-summary.component';

import { AccountDataService } from '../account-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  account: Account;

  array: Blerp[];
  testVal: string;

  courses: Course[];


  constructor(private http: HttpClient, private accountData: AccountDataService) { }

  ngOnInit() {
    this.getAccount();
    this.getCourses();
    this.testV();
  }


  testV(): void {

      this.http.get('http://localhost:80/GradeCalculatorAPI/test.php').subscribe(data => {
        this.testVal = data['results'];
      });
      //this.testVal = this.accountData.testRequest();
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
