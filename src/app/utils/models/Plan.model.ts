import { TaskType } from "./TaskType.model";

export interface Plan{
    id?:string|undefined,
    userId:string,
    name:string,
    location:string,
    taskName:TaskType,
    createdDate:Date,
    updatedDate:Date,
    plannedStartDate:Date,
    plannedEndDate:Date,
    task:string,
    notify:boolean,
    notifyDate:Date,
    isCompleted:boolean,
}