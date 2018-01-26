import { Component, OnInit, Input } from '@angular/core';
import { CourseItem } from '../../course-item';
import { Course } from '../../course';
import { AccountDataService } from '../../account-data.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input() courseItem: CourseItem;
  @Input() course: Course;

  editItem: boolean;

  constructor(private accountData: AccountDataService) {
    this.editItem = false;
 }

 ngOnInit() {
   this.editItem = false;
 }

  openEditItem() {
    this.editItem = true;
  }

  closeEditItem() {
    this.editItem = false;

  }

  deleteItem() {
    this.accountData.deleteCourseItem(this.courseItem,this.course);
  }

  copyItem() {
    this.accountData.copyCourseItem(this.courseItem,this.course);

  }


}
