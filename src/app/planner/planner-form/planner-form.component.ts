import {Component, OnInit, signal } from '@angular/core';
import { PlannerService } from '../planner.service';
import { FormsModule, NgForm } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { Plan } from '../../utils/models/Plan.model';
import { TaskType } from '../../utils/models/TaskType.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-planner-form',
  imports: [
    FormsModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatSlideToggleModule,
    MatDatepickerModule,
    MatTimepickerModule,
    MatButtonModule,
    MatChipsModule],
  providers:[
    provideNativeDateAdapter()
  ],
  templateUrl: './planner-form.component.html',
  styleUrl: './planner-form.component.scss'
})
export class PlannerFormComponent implements OnInit {
  notify=signal<boolean>(false);
  showNotifyCustom=signal(false);
  isCompleted=signal(false);
  taskTypes=signal<TaskType[]>([]);
  quickTime=signal<10|15|30|0>(0);
  isLoaded=signal<boolean>(false);

  constructor(private plannerService:PlannerService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.plannerService.getTaskTypes().subscribe((res)=>{
      this.taskTypes.set(res);
      this.isLoaded.set(false);
    })
  }

  onSubmit(form:NgForm){
    const formControl=form.control;
    const plannedStartDate:Date=formControl.get('plannedStartDate')?.value;
    const plannedEndDate:Date=formControl.get('plannedEndDate')?.value;
    const taskNameId=formControl.get('taskName')?.value;
    const taskName=this.taskTypes().find((task)=>task.id==taskNameId);
    var notifyDate:Date;
    if(!this.notify()){
      notifyDate=new Date(plannedStartDate);
    }
    else{
      if(this.quickTime()!=0){
        notifyDate=new Date(plannedStartDate);
        notifyDate.setMinutes(notifyDate.getMinutes()-this.quickTime());
      }
      else{
        notifyDate=formControl.get('notifyDate')?.value
      }
    }
    const plan:Plan={
      name:formControl.get('name')?.value,
      userId:"1000",
      taskName:taskName!,
      location:formControl.get('location')?.value,
      task:formControl.get('task')?.value,
      createdDate:new Date(),
      updatedDate:new Date(),
      plannedStartDate:plannedStartDate,
      plannedEndDate:plannedEndDate,
      notify:this.notify(),
      notifyDate:notifyDate,
      isCompleted:false,
    }
    console.log(plan)
    this.plannerService.addPlan(plan).subscribe({
      next:(res)=>{
        this.toastr.success("Plan Added");
      },
      error:(error)=>{
        console.log(error);
        this.toastr.error("Adding Plan Failed!");
      }
    });
    form.resetForm();
  }

  enableNotify(event:any){
    console.log(event);
  }

  showCustom(){
    this.showNotifyCustom.set(true);
    this.quickTime.set(0);
  }

  hideCustom(){
    this.showNotifyCustom.set(false);
  }

  setQuickTime(min:0|10|15|30){
    this.quickTime.set(min);
  }
}
