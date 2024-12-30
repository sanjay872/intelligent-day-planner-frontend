import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlannerComponent } from './planner/planner.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {
     path: '',
     component: HomeComponent,   
    },
    {
        path:'auth',
        children:[
            {
                path:'login',
                component: LoginComponent,
            },
            {
                path:'register',
                component: RegisterComponent,
            }
        ]
    },
    {
        path:'profile',
        component:ProfileComponent,
    },
    {
        path:'dashboard',
        component:DashboardComponent,
    },
    {
        path:'planner',
        component:PlannerComponent,
    },
    {
        path:'**',
        redirectTo: '',
    }
];
