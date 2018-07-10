import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/services/auth.guard';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { HomeComponent } from './core/dashboard/home/home.component';
import { ProgrammesComponent } from './core/dashboard/programmes/programmes.component';
import { AdminComponent } from './core/dashboard/admin/admin.component';
import { JobRoleMappingComponent } from './core/dashboard/admin/job-role-mapping/job-role-mapping.component';
import { ProgrammeDataComponent } from './core/dashboard/admin/programme-data/programme-data.component';

const routes: Routes = [
    { path: '' , redirectTo: 'login' , pathMatch: 'full' },
    { path: '' , component: LoginComponent },
    { path: 'dashboard' , component: DashboardComponent , canActivate: [ AuthGuard ] , children: [
      { path: '' , redirectTo: 'home' , pathMatch: 'full' },
      { path: 'home' , component: HomeComponent },
      { path: 'programmes' , component: ProgrammesComponent },
      { path: 'admin' , component: AdminComponent , children: [
        { path: '' , redirectTo: 'job-role' , pathMatch: 'full'},
        { path: 'job-role' , component: JobRoleMappingComponent , pathMatch: 'full' },
        { path: 'programme-data' , component: ProgrammeDataComponent  }
      ]},
    ]}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
