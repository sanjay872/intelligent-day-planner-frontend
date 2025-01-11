import { HttpClient } from "@angular/common/http";
import {Plan} from '../utils/models/Plan.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PlannerService {
  plan: Plan[] = [];
  constructor(private http:HttpClient) { }

  getPlans(userId:number) {
    return this.http.get<Plan[]>('http://localhost:8080/plan/user/'+userId);
  }

  getPlan(id:number) {
   return this.http.get<Plan[]>('http://localhost:8080/plan'+id);
  }

  addPlan(plan:Plan){
    return this.http.post('http://localhost:8080/plan',plan);
  }

}