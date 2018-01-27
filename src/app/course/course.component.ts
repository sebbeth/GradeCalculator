import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from '../course';
import { CourseItem } from '../course-item';
import { AccountDataService } from '../account-data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: Course;
  courseItems: CourseItem[];

  constructor(
    private route: ActivatedRoute,
    private accountData: AccountDataService) {

    const title = +this.route.snapshot.paramMap.get('title');
   this.getCourse(0);
   this.getItems(0);

  }

  getCourse(index) {
    this.accountData.getCourseAtIndex(index)
        .subscribe(course => this.course = course);
  }

  getItems(index) {
    this.accountData.getCourseAtIndexItems(index)
        .subscribe(courseItems => this.courseItems = courseItems);
  }

  addItem() {
    this.accountData.addCourseItem(this.course);
  }

  ngOnInit() {

    //this.accountData.update();
  }




}
