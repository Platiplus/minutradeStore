import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './services/auth-guard.service'

import { LoginComponent } from "./views/login/login.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { ProductDetailsComponent } from "./views/product-details/product-details.component"

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
        
    },
    {
        path: 'dashboard/:id',
        canActivate: [AuthGuard],
        component: ProductDetailsComponent
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
 