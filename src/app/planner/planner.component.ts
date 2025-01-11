import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PlannerService } from './planner.service';
import { Plan } from '../utils/models/Plan.model';
import { FormsModule, NgForm } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-planner',
  imports: [FormsModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatSlideToggleModule,
  MatDatepickerModule,
  MatTimepickerModule,
  MatButtonModule],
  providers:[
    provideNativeDateAdapter()
  ],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlannerComponent implements OnInit {
  plan:Plan={
    id:"",
    userId:"",
    name:"",
    location:"",
    createdDate:new Date(),
    updatedDate:new Date(),
    plannedDate:new Date(),
    task:"",
    notify:false,
    notifyDate:new Date(),
    isCompleted:false
  };

  notify:boolean=false;
  isCompleted:boolean=false;

  constructor(private plannerService:PlannerService) { }

  ngOnInit(): void {
    
  }

  onSubmit(form:NgForm){
    console.log(form);
  }

  enableNotify(event:any){
    console.log(event);
  }
}
