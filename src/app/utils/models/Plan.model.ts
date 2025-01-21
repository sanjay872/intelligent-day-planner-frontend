import { TaskType } from "./TaskType.model";

export interface Plan{
    id?:string|undefined,
    userId:string,
    name:string,
    location:string,
    taskName:TaskType,
    createdDate:Date,
    updatedDate:Date,
    plannedDate:Date,
    plannedStartTime:Date,
    plannedEndTime:Date,
    task:string,
    notify:boolean,
    notifyDate:Date,
    isCompleted:boolean,
}