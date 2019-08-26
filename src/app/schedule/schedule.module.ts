import { FormsModule } from '@angular/forms';
import { ScheduleDetailComponent } from './schedule-detail.component';
import { ScheduleListComponent } from './schedule-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ScheduleListComponent,
    ScheduleDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'schedules', component: ScheduleListComponent },
      { path: 'schedules/:id', component: ScheduleDetailComponent },
    ])
  ]
})
export class ScheduleModule { }
