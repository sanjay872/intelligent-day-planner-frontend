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

  constructor(private plannerService:PlannerService) { }

  ngOnInit(): void {
    
  }

  onSubmit(form:NgForm){
    const formControl=form.control;
    const plannedDate=formControl.get('plannedDate')?.value;
    const plannedTime=formControl.get('plannedTime')?.value;
    console.log(plannedDate)
    console.log(plannedTime)
    const plan:Plan={
      id:'',
      name:formControl.get('name')?.value,
      userId:String(Math.random()*10),
      location:formControl.get('location')?.value,
      task:formControl.get('task')?.value,
      createdDate:new Date(),
      updatedDate:new Date(),
      plannedDate:new Date(),
      notify:false,
      notifyDate:new Date(),
      isCompleted:false,
    }
    console.log(plan)
    // this.plannerService.addPlan(plan);
  }

  enableNotify(event:any){
    console.log(event);
  }
}
