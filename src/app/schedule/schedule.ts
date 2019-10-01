import { Course } from './course';


export class Schedule {
  _id: string;
  __v: number;
  date_created;
  constructor(
    public venue?: string,
    public lecturer?: string,
    public group?: string,
    public day?: string,
    public start_time?: string,
    public end_time?: string,
    public course?: Course
  ) {}

}
