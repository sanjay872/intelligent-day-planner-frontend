import { Component, OnInit } from '@angular/core';
import { PlannerService } from '../planner.service';
import { map, pipe } from 'rxjs';
import { Plan } from '../../utils/models/Plan.model';

@Component({
  selector: 'app-schedule',
  imports: [],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent  implements OnInit{
  timeAM=[12,1,2,3,4,5,6,7,8,9,10,11,12];
  timePM=[1,2,3,4,5,6,7,8,9,10,11];

  morningPlan=[];

  constructor(private plannerService:PlannerService){}

  ngOnInit(): void {
    this.plannerService.getPlansByUserIdAndDate("1000",new Date()).pipe(map((plan:Plan[])=>
      {  
        return plan.map((plan)=>{
          const time=plan.plannedStartTime.toString().split(":");
          const hr=Number(time[0]);
          return {
            hr:hr>12?hr-12:hr, // convert to 12 hr
            min:Number(time[1]),
            isMorning:hr>12?false:true,
            plan:plan
          };
        })
      }
    )).subscribe({
      next:(res)=>{
        console.log(res);
      }
    });
  }
}
