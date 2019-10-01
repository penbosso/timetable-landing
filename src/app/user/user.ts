export class User {
  constructor(public lastName ='',
    public otherName ='',
    public email = '',
    public permissionLevel ='',
    public password?: string
    ) { }
}
