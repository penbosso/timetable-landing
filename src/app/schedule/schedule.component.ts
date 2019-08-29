import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, AbstractControl} from '@angular/forms';

import { Course } from './course';
import { Schedule } from './schedule';

function validTime(c: AbstractControl): {[key: string]: boolean } | null {
  let start_time = c.get('start_time');
  let end_time = c.get('end_time');

  if (start_time.pristine ||end_time.pristine) {
    return null;
  }

  if (end_time.value < start_time.value) {
    return { 'invalid_date': true};
  }
  return null;
}

@Component({
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  courseForm: FormGroup;
  scheduleForm: FormGroup;
  course = new Course();
  schedule = new Schedule();

  constructor(public router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.courseForm = this.fb.group({
      code: '',
      title: '',
      description: '',
      level: '',
      department: ''
    });

    this.scheduleForm = this.fb.group({
      venue: '',
      lecturer: '',
      group: '',
      day: '',
      dateGroup:this.fb.group({
        start_time: '',
        end_time: ''
      }, {validator: validTime}),
      course: ''
    });
  }

  save() {
    console.log(this.courseForm);
    console.log('Saved: ' + JSON.stringify(this.courseForm.value));
  }

  authenticate() {
    console.log(this.courseForm);
    console.log('Authenticate: ' + JSON.stringify(this.courseForm.value));
  }

}
