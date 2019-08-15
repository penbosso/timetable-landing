import {Component} from '@angular/core';
import { ISchedule } from './schedule';

@Component({
  selector: 'pm-schedules',
  templateUrl: './schedule-list.html'
})
export class ScheduleListComponent {
  pageTitle: string = 'Class Schedule List';
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredSchedules = this.listFilter ? this.performFilterByLevel(this.listFilter) : this.schedules;
  }

  filteredSchedules: ISchedule[];

  schedules: ISchedule[] = [
    {
    _id: "5d2d5a4a2ac1a4387ce09a84",
    venue: "Software Lab",
    lecturer: "Nii Addotey",
    group: "A",
    day: "Monday",
    start_time: "11:30",
    end_time: "12:20",
    course: {
    _id: "5d2d5a462ac1a4387ce09a78",
    code: "CSCD 111",
    title: "Computer Science",
    description: "description Introduction to Computer Science",
    level: "level 100",
    department: "Computer Science",
    user: "5d2d5a462ac1a4387ce09a77",
    __v: 0
    },
    date_created: "2019-07-16T05:02:02.054Z",
    __v: 0
    },
    {
    _id: "5d2d5a4a2ac1a4387ce09a89",
    venue: "KAB",
    lecturer: "Edem Kuma",
    group: "",
    day: "Monday",
    start_time: "08:30",
    end_time: "09:20",
    course: {
    _id: "5d2d5a462ac1a4387ce09a79",
    code: "CSIT 101",
    title: "Infomation Technology",
    description: "description of Introduction to Infomation Technology",
    level: "level 100",
    department: "Infomation Technology",
    user: "5d2d5a452ac1a4387ce09a76",
    __v: 0
    },
    date_created: "2019-07-16T05:02:02.056Z",
    __v: 0
    },
    {
    _id: "5d2d5a4a2ac1a4387ce09a8e",
    venue: "JQB 9",
    lecturer: "Prof S.K Mane",
    group: "",
    day: "Thursday",
    start_time: "07:30",
    end_time: "09:20",
    course: {
    _id: "5d2d5a462ac1a4387ce09a7b",
    code: "CSIT 201",
    title: "Networking",
    description: "description of Introduction to computer network communications",
    level: "level 200",
    department: "Infomation Technology",
    user: "5d2d5a452ac1a4387ce09a76",
    __v: 0
    },
    date_created: "2019-07-16T05:02:02.058Z",
    __v: 0
    },
    {
    _id: "5d2d5a4a2ac1a4387ce09a93",
    venue: "JQB 9",
    lecturer: "Evans P. Boa",
    group: "",
    day: "Tuesday",
    start_time: "13:30",
    end_time: "15:20",
    course: {
    _id: "5d2d5a462ac1a4387ce09a7f",
    code: "CSIT 315",
    title: "Database Managment Systems",
    description: "description of Introduction toDatabase Managment Systems",
    level: "level 300",
    department: "Infomation Technology",
    user: "5d2d5a452ac1a4387ce09a76",
    __v: 0
    },
    date_created: "2019-07-16T05:02:02.060Z",
    __v: 0
    },
    {
    _id: "5d2d5a4a2ac1a4387ce09a98",
    venue: "Chinise Lab",
    lecturer: "Prof S.K Mane",
    group: "",
    day: "Tuesday",
    start_time: "13:30",
    end_time: "15:20",
    course: {
    _id: "5d2d5a462ac1a4387ce09a81",
    code: "CSIT 301",
    title: "Networking II",
    description: "description of Introduction to computer network communications II",
    level: "level 300",
    department: "Infomation Technology",
    user: "5d2d5a452ac1a4387ce09a76",
    __v: 0
    },
    date_created: "2019-07-16T05:02:02.062Z",
    __v: 0
    },
    {
    _id: "5d2d5a4a2ac1a4387ce09a85",
    venue: "Software Lab",
    lecturer: "Nii Addotey",
    group: "B",
    day: "Tuesday",
    start_time: "08:30",
    end_time: "09:20",
    course: {
    _id: "5d2d5a462ac1a4387ce09a78",
    code: "CSCD 111",
    title: "Computer Science",
    description: "description Introduction to Computer Science",
    level: "level 100",
    department: "Computer Science",
    user: "5d2d5a462ac1a4387ce09a77",
    __v: 0
    },
    date_created: "2019-07-16T05:02:02.055Z",
    __v: 0
    },
    {
    _id: "5d2d5a4a2ac1a4387ce09a8b",
    venue: "JQB 9",
    lecturer: "Dr. Pius Koah",
    group: "",
    day: "Friday",
    start_time: "17:30",
    end_time: "16:20",
    course: {
    _id: "5d2d5a462ac1a4387ce09a7c",
    code: "CSCD 211",
    title: "Programing II",
    description: "description Introduction to Java programming",
    level: "level 200",
    department: "Computer Science",
    user: "5d2d5a462ac1a4387ce09a77",
    __v: 0
    },
    date_created: "2019-07-16T05:02:02.057Z",
    __v: 0
    },
    {
    _id: "5d2d5a4a2ac1a4387ce09a90",
    venue: "N 2",
    lecturer: "Mr Kalus Adei",
    group: "B",
    day: "Monday",
    start_time: "13:30",
    end_time: "15:20",
    course: {
    _id: "5d2d5a462ac1a4387ce09a7d",
    code: "CSIT 213",
    title: "Web Technology",
    description: "description of Introduction to Web Technology",
    level: "level 200",
    department: "Infomation Technology",
    user: "5d2d5a452ac1a4387ce09a76",
    __v: 0
    },
    date_created: "2019-07-16T05:02:02.059Z",
    __v: 0
    },
    {
    _id: "5d2d5a4a2ac1a4387ce09a95",
    venue: "Korean Lab",
    lecturer: "Oman Kuh",
    group: "",
    day: "Thursday",
    start_time: "14:30",
    end_time: "15:20",
    course: {
    _id: "5d2d5a462ac1a4387ce09a80",
    code: "CSCD 317",
    title: "Digital Systems",
    description: "description ;-Information Systems",
    level: "level 300",
    department: "Computer Science",
    user: "5d2d5a462ac1a4387ce09a77",
    __v: 0
    },
    date_created: "2019-07-16T05:02:02.061Z",
    __v: 0
    },
    {
    _id: "5d2d5a4a2ac1a4387ce09a9a",
    venue: "JQB 12",
    lecturer: "Penbon Luma",
    group: "",
    day: "Friday",
    start_time: "07:30",
    end_time: "09:20",
    course: {
    _id: "5d2d5a462ac1a4387ce09a83",
    code: "CSIT 313",
    title: "Web Technology II",
    description: "description of Introduction to Web Technology II",
    level: "level 300",
    department: "Infomation Technology",
    user: "5d2d5a452ac1a4387ce09a76",
    __v: 0
    },
    date_created: "2019-07-16T05:02:02.063Z",
    __v: 0
    },
    {
    _id: "5d2d5a4a2ac1a4387ce09a86",
    venue: "JQB 23",
    lecturer: "Nii Addotey",
    group: "",
    day: "Friday",
    start_time: "07:30",
    end_time: "09:20",
    course: {
    _id: "5d2d5a462ac1a4387ce09a78",
    code: "CSCD 111",
    title: "Computer Science",
    description: "description Introduction to Computer Science",
    level: "level 100",
    department: "Computer Science",
    user: "5d2d5a462ac1a4387ce09a77",
    __v: 0
    },
    date_created: "2019-07-16T05:02:02.055Z",
    __v: 0
    },
    {
    _id: "5d2d5a4a2ac1a4387ce09a8d",
    venue: "NNB 2",
    lecturer: "Prof S.K Mane",
    group: "",
    day: "Tuesday",
    start_time: "13:30",
    end_time: "14:20",
    course: {
    _id: "5d2d5a462ac1a4387ce09a7b",
    code: "CSIT 201",
    title: "Networking",
    description: "description of Introduction to computer network communications",
    level: "level 200",
    department: "Infomation Technology",
    user: "5d2d5a452ac1a4387ce09a76",
    __v: 0
    },
    date_created: "2019-07-16T05:02:02.058Z",
    __v: 0
    }
    ];

  constructor() {
    this.filteredSchedules = this.schedules;
    this.listFilter = '';
  }

  performFilterByLevel(filterBy: string): ISchedule[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.schedules.filter((schedule: ISchedule) =>
        schedule.course.code.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  }
