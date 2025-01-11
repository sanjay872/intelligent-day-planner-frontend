import { Component, OnInit } from '@angular/core';
import { PlannerService } from '../planner.service';
import { FormsModule, NgForm } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatButtonModule} from '@angular/material/button';
import { Plan } from '../../utils/models/Plan.model';
import { TaskType } from '../../utils/models/TaskType.model';

@Component({
  selector: 'app-planner-form',
  imports: [
    FormsModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatSlideToggleModule,
    MatDatepickerModule,
    MatTimepickerModule,
    MatButtonModule],
  providers:[
    provideNativeDateAdapter()
  ],
  templateUrl: './planner-form.component.html',
  styleUrl: './planner-form.component.scss'
})
export class PlannerFormComponent implements OnInit {
  notify:boolean=false;
  isCompleted:boolean=false;
  taskTypes:TaskType[]=[];

  constructor(private plannerService:PlannerService) { }

  ngOnInit(): void {
    this.plannerService.getTaskTypes().subscribe((res)=>{
      this.taskTypes=res;
      console.log(this.taskTypes)
    })
  }

  onSubmit(form:NgForm){
    const formControl=form.control;
    const plannedStartDate:Date=formControl.get('plannedStartDate')?.value;
    const plannedEndDate:Date=formControl.get('plannedEndDate')?.value;
    var notifyDate:Date=formControl.get('notifyDate')?.value;
    if(!this.notify){
      notifyDate=new Date(plannedStartDate);
      notifyDate.setMinutes(notifyDate.getMinutes()-10);
    }
    const plan:Plan={
      name:formControl.get('name')?.value,
      userId:"1000",
      taskName:'COOKING',
      location:formControl.get('location')?.value,
      task:formControl.get('task')?.value,
      createdDate:new Date(),
      updatedDate:new Date(),
      plannedStartDate:plannedStartDate,
      plannedEndDate:plannedEndDate,
      notify:this.notify,
      notifyDate:notifyDate,
      isCompleted:false,
    }
    console.log(plan)
    this.plannerService.addPlan(plan).subscribe((res)=>{
      console.log(res);
    });
  }

  enableNotify(event:any){
    console.log(event);
  }
}
