import { Course } from './course';


export class Schedule {
  _id: string;
  venue: string;
  lecturer: string;
  group: string;
  day: string;
  start_time: string;
  end_time: string;
  date_created: string;
  __v: number;
  course: Course;
}
