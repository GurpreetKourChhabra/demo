import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app.routing';
import { ChartModule } from 'angular-highcharts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


// Services
import { AuthGuard } from './core/services/auth.guard';
import { AppService } from './core/services/app.service';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { HomeComponent } from './core/dashboard/home/home.component';
import { ProgrammesComponent } from './core/dashboard/programmes/programmes.component';
import { AdminComponent } from './core/dashboard/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { JobRoleMappingComponent } from './core/dashboard/admin/job-role-mapping/job-role-mapping.component';
import { ProgrammeDataComponent } from './core/dashboard/admin/programme-data/programme-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    ProgrammesComponent,
    AdminComponent,
    JobRoleMappingComponent,
    ProgrammeDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [ AuthGuard , AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
