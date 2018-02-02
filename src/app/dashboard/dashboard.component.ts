import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';
import { Account } from '../account';
import { Course } from '../course';
import { CourseSummaryComponent } from './course-summary/course-summary.component';
import { AccountDataService } from '../account-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  addCourse(): void {

    this.router.navigateByUrl('/newCourse');

  }
}
