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

  showCompleted: boolean;

  courses: Course[];


  constructor(private http: HttpClient, private accountData: AccountDataService) { }

  ngOnInit() {
    this.showCompleted = false; //TODO make this work
    this.getAccount();
    this.getCourses();
  //  this.testV();
  }

  // Currently disabled,
  constructAccount(jsonObject): Account {

    this.testVal = jsonObject['username'];

    var account: Account = {
      username: jsonObject['username'],
      fullname: jsonObject['fullname'],
      unitsCompleted: jsonObject['unitsCompleted'],
      GPA: jsonObject['GPA'],
      program: jsonObject['program'],
      email: jsonObject['email'],
      institutionName: jsonObject['institutionName'],
      courses: null

    };

    return account;

  }


  // Currently disabled,
  testV(): void {

      this.http.get<Account>('http://localhost:80/GradeCalculatorAPI/account/?user=seb').subscribe(data => {
        //this.apiAccount = data;
         this.account = this.constructAccount(data);
      });
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
