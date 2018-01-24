import { Component, OnInit, Input } from '@angular/core';
import { CourseItem } from '../../course-item';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input() courseItem: CourseItem;
  editItem: boolean;

  constructor() {
    this.editItem = false;
 }

  openEditItem() {
    this.editItem = true;
  }

  closeEditItem() {
    this.editItem = false;

  }

  ngOnInit() {
    this.editItem = false;

  }
}
