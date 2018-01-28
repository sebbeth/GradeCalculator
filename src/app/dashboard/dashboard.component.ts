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
  showCompleted: boolean;
  courses: Course[];


  constructor(private http: HttpClient, private accountData: AccountDataService) { }

  ngOnInit() {
    this.showCompleted = false; //TODO make this work


    this.getAccountFromAPI();



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



    /*
    getAccountFromAPI

    Function that performs API request and fills account object with result.
    */
    getAccountFromAPI(): void {
        this.http.get(this.accountData.apiRootURL + '/account/?user=seb').subscribe(data => {
          this.account = this.accountData.constructAccount(data); // Result of request stored in AccountData account object.
        });
    }


}
