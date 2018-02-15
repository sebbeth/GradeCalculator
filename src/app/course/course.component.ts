import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  percentMarked: string;

  constructor(
    private route: ActivatedRoute,
    private accountData: AccountDataService,
    private location: Location,
  private router: Router) {



  }

  ngAfterViewChecked() {


//    this.getAccountFromAPI();

  }

  ngOnInit() {

    console.log(this.router.url);
    this.getCourse();
    this.getItems();
    this.percentMarked = String(this.course.percentMarked) + '%';


  }

  updateCourseDetails() {
    
  }

  deleteCourse() {

    this.accountData.deleteCourse(this.course);
    this.router.navigate(['/dashboard']);
  }

  getCourse() {

    let courseTitleParam = this.router.url.replace('/course/','');
    this.accountData.getCourseWithCode(courseTitleParam)
       .subscribe(course => this.course = course);
 }

  getItems() {
    console.log(this.course.id);
    this.accountData.getCourseItemsForId(this.course.id)
        .subscribe(courseItems => this.courseItems = courseItems);
  }

  addItem() {
    this.accountData.addCourseItem(this.course);
  }



}
