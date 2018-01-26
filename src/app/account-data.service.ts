import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Course} from './course';
import {Account} from './account';
import {CourseItem} from './course-item';
import {Blerp} from './blerp';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


/*

This class is the data source for account data.

*/

@Injectable()
export class AccountDataService {


  a: CourseItem = {
    title: 'Assignment 1',
    weighting: 50,
    possibleMark: 100,
    minimumMark: 0,
    neededMark: 40,
    markRecieved: 60
  };
  b: CourseItem = {
    title: 'Final Exam',
    weighting: 50,
    possibleMark: 100,
    minimumMark: 40,
    neededMark: 40,
    markRecieved: null
  };

  course1: Course = {id:0, title: 'Web Engineering',code: 'SENG2050',currentPercent: 80,currentGrade: 'Distinction', percentMarked:70, finished: false, courseItems:[this.a,this.b]};
  course2: Course = {id:1, title: 'Internet stuff',code: 'COMP2050',currentPercent: 65,currentGrade: 'High Distinction', percentMarked:40, finished: false, courseItems:null};
  course3: Course = {id:2, title: 'Maths',code: 'MATH1110',currentPercent: 65,currentGrade: 'High Distinction', percentMarked:100, finished: true, courseItems:null};


  account: Account = {
    username: 'user',
    fullname: 'Test Student',
    unitsCompleted: 100,
    GPA: 5.1,
    institutionName: 'University of Newcastle',
    courses: [this.course1,this.course2,this.course3]

  };

  constructor(private http: HttpClient) { }

   result: string;
   data: any[];

  testRequest(){


    /*this.http.get('http://localhost:80/GradeCalculatorAPI/test.php').subscribe(this.data => {
      this.result = this.data['results'];
    }); */

    //  return this.result;

    //  return this.http.get<string[]>('http://localhost:80/GradeCalculatorAPI/test.php');
  }

  getAccount(): Observable<Account> {

    return of(this.account);
  }

  getCourses(): Observable<Course[]> {

    return of(this.account.courses);
  }

  getCourseAtIndex(index): Observable<Course> {

    return of(this.account.courses[index]);
  }

  getCourseAtIndexItems(index):Observable<CourseItem[]> {

    return of(this.account.courses[index].courseItems);
  }

  addCourseItem(parentCourse): void {

    let item: CourseItem = {

      title: 'New Assessment Item',
      weighting: 0,
      possibleMark: 0,
      minimumMark: null,
      neededMark: null,
      markRecieved: null

    }

    parentCourse.courseItems.push(item);



  }

  deleteCourseItem(item,course): void {
    // Pop the item from the courseItems array
    var index = course.courseItems.indexOf(item, 0);
    if (index > -1) {
      course.courseItems.splice(index, 1);
    }
  }

  copyCourseItem(item,course): void {

    let newItem: CourseItem = {

      title: item.title,
      weighting: item.weighting,
      possibleMark: item.possibleMark,
      minimumMark: item.minimumMark,
      neededMark: null, // Note, this is not copied.
      markRecieved: null // Note, this is not copied.

    }

    course.courseItems.push(newItem);

    course.courseItems.sort(this.courseItemComparison);

  }



  courseItemComparison(a,b) {
    if (a.weighting > b.weighting) {
      return -1;
    }
    if (a.weighting < b.weighting) {
      return 1;
    }
    return 0;
  }

}
