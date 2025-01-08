export interface Plan{
    id:string,
    userId:string,
    name:string,
    location:string,
    createdDate:Date,
    updatedDate:Date,
    plannedDate:Date,
    task:string,
    notify:boolean,
    notifyDate:Date,
    isCompleted:boolean,
}