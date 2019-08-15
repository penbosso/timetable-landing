import { ICourse } from './course';

export interface ISchedule {
  _id: string;
  venue: string;
  lecturer: string;
  group: string;
  day: string;
  start_time: string;
  end_time: string;
  date_created: string;
  __v: number;
  course: ICourse;
}
