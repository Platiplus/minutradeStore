import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from "./app.routes";
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AuthGuard } from './services/auth-guard.service';
import { ProductDetailsComponent } from './views/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
