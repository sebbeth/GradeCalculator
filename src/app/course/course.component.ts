import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from '../course';
import { CourseItem } from '../course-item';
import { AccountDataService } from '../account-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: Course;
  courseItems: CourseItem[];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private accountData: AccountDataService) {



  }

  ngAfterViewChecked() {
    const title = +this.route.snapshot.paramMap.get('title');
    this.getItems(0);
    this.getCourse(title);

    this.getAccountFromAPI();

  }

  ngOnInit() {

  }

  getCourse(code) {
    this.accountData.getCourseWithCode(code)
        .subscribe(course => this.course = course);
  }

  getItems(index) {
    this.accountData.getCourseAtIndexItems(index)
        .subscribe(courseItems => this.courseItems = courseItems);
  }

  addItem() {
    this.accountData.addCourseItem(this.course);
  }

  /*
  getAccountFromAPI

  Function that performs API request and fills account object with result.
  */
  getAccountFromAPI(): void {
      this.http.get(this.accountData.apiRootURL + '/account/?user=seb').subscribe(data => {
         this.accountData.constructAccount(data); // Result of request stored in AccountData account object.
      });
  }




}
