import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ISchedule } from './schedule';
import { ScheduleService } from './schedule.services';

@Component({
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.css']
})

export class ScheduleDetailComponent implements OnInit {
  pageTitle: string = 'Schedule Detail';
  errorMessage: string;
  schedule: ISchedule;
  similarSchedules: ISchedule[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private scheduleService: ScheduleService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    //Find schedule and filter related course from schedules
    this.scheduleService.getSchedules().subscribe(
      schedules => {
        this.similarSchedules = schedules;
        this.schedule = this.findById(id, this.similarSchedules);
        this.similarSchedules = this.filterByCourseId(this.schedule.course._id);
      },
      error => this.errorMessage = <any>error
    );
  }

  filterByCourseId(courseId: string): ISchedule[] {
    return this.similarSchedules.filter((schedule: ISchedule) => schedule.course._id.indexOf(courseId) !== -1);
  }

  findById(id: string, schedules: ISchedule[]): ISchedule {
    return schedules.find((schedule: ISchedule) => schedule._id === id );
  }

  onBack(): void {
    this.router.navigate(['/schedules']);
  }
}
