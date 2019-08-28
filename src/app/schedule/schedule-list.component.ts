import { ScheduleService } from './schedule.services';
import {Component, OnInit} from '@angular/core';
import { Schedule } from './schedule';

@Component({
  templateUrl: './schedule-list.html'
})
export class ScheduleListComponent implements OnInit{
  pageTitle: string = 'Class Schedule List';
  _listFilter: string;
  errorMessage: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredSchedules = this.listFilter ? this.performFilterByLevel(this.listFilter) : this.schedules;
  }

  filteredSchedules: Schedule[];
  schedules: Schedule[] = [];


  constructor(private scheduleService: ScheduleService) {

  }

  performFilterByLevel(filterBy: string): Schedule[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.schedules.filter((schedule: Schedule) =>
        schedule.course.code.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.scheduleService.getSchedules().subscribe(
      schedules => {
        this.schedules = schedules;
        this.filteredSchedules = this.schedules;
      },
      error => this.errorMessage = <any>error
    );
  }
}


