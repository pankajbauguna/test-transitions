import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
