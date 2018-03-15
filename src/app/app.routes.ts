import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './services/auth-guard.service'

import { LoginComponent } from "./views/login/login.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
        
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
 