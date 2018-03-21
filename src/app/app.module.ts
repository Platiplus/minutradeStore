import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutes } from "./app.routes";
import { LoginComponent } from './views/login/login.component';
import { CatalogComponent } from './views/catalog/catalog.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { HttpClientJsonpModule } from '@angular/common/http';
import { AuthGuard } from './services/auth-guard.service';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MetaModule } from '@ngx-meta/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogComponent,
    ProductDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'minutrade-store'}),
    HttpClientModule,
    AppRoutes,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientJsonpModule,
    ShareButtonsModule.forRoot(),
    MetaModule.forRoot()
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
