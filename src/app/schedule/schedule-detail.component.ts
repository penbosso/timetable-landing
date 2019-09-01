import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Schedule } from './schedule';
import { ScheduleService } from './schedule.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.css']
})

export class ScheduleDetailComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Schedule Detail';
  errorMessage: string;
  schedule: Schedule;
  similarSchedules: Schedule[] = [];
  private sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe( params => {
      const id = params.get('id');
      //Find schedule and filter related course from schedules
      this.scheduleService.getSchedules().subscribe(
        schedules => {
          this.similarSchedules = schedules;
          this.schedule = this.findById(id, this.similarSchedules);
          this.similarSchedules = this.filterByCourseId(this.schedule.course._id);
        },
        error => this.errorMessage = <any>error
      );
    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  filterByCourseId(courseId: string): Schedule[] {
    return this.similarSchedules.filter((schedule: Schedule) => schedule.course._id.indexOf(courseId) !== -1);
  }

  findById(id: string, schedules: Schedule[]): Schedule {
    return schedules.find((schedule: Schedule) => schedule._id === id );
  }

  onBack(): void {
    this.router.navigate(['/schedules']);
  }
}
