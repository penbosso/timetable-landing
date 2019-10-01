export class Course {
  _id: string;
  __v: number;
  constructor(
    public code?: string,
    public title?: string,
    public description?: string,
    public level?: string,
    public department?: string,
    public user?: string
  ) { }
}
