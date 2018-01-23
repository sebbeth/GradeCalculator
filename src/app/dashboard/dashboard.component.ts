import { Component, OnInit } from '@angular/core';
import {Course} from '../course';
import { CourseSummaryComponent }      from '/course-summary/course-summary.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  course: Course = {
    id: 4;
    title: 'first';
    currentPercent: 0.72;
    currentGrade: 'High Distinction';
    percentMarked: 0.5;
  };

  constructor() { }

  ngOnInit() {
  }

}
