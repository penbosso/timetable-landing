export class User {
  constructor(public lastName ='',
    public otherName ='',
    public email = '',
    public permissionLevel?: string,
    public password?: string
    ) { }
}
