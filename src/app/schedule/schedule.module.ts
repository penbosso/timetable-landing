import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleDetailComponent } from './schedule-detail.component';
import { ScheduleListComponent } from './schedule-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule.component';



@NgModule({
  declarations: [
    ScheduleListComponent,
    ScheduleDetailComponent,
    ScheduleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'schedule', component: ScheduleComponent },
      {path: 'schedules', component: ScheduleListComponent },
      { path: 'schedules/:id', component: ScheduleDetailComponent },
    ])
  ]
})
export class ScheduleModule { }
