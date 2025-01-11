import { ChangeDetectionStrategy, Component} from '@angular/core';
import { PlannerFormComponent } from "./planner-form/planner-form.component";
import { ScheduleComponent } from "./schedule/schedule.component";

@Component({
  selector: 'app-planner',
  imports: [PlannerFormComponent, ScheduleComponent],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlannerComponent{
 
}
