import { Component, OnInit } from '@angular/core';
import { PlannerService } from '../planner.service';

@Component({
  selector: 'app-schedule',
  imports: [],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent  implements OnInit{
  timeAM=[12,1,2,3,4,5,6,7,8,9,10,11,12];
  timePM=[1,2,3,4,5,6,7,8,9,10,11];

  constructor(private plannerService:PlannerService){}

  ngOnInit(): void {
    
  }
}
