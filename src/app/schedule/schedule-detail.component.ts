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
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe( params => {
      const id = params.get('id');
      //Find schedule and filter related course from schedules
      this.scheduleService.getSimilarSchedules(id).subscribe(
        ({instantCourse, similarCourses}) => {
          this.similarSchedules = similarCourses;
          this.schedule = instantCourse;
        },
        error => this.errorMessage = <any>error
      );
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['/schedules']);
  }
}
