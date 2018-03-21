import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './services/auth-guard.service'

import { LoginComponent } from "./views/login/login.component";
import { CatalogComponent } from "./views/catalog/catalog.component";
import { ProductDetailsComponent } from "./views/product-details/product-details.component"
import { MetaGuard } from '@ngx-meta/core';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'catalog',
        canActivate:[AuthGuard],
        component: CatalogComponent
        
    },
    {
        path: 'catalog/:id',
        canActivate: [MetaGuard],
        component: ProductDetailsComponent
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
 