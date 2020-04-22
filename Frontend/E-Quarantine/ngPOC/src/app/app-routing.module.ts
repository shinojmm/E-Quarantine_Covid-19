import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { CoronaMapComponent } from './pages/corona-map/corona-map.component';
import { GetHelpComponent } from './pages/get-help/get-help.component';
import { ConsultComponent } from './pages/consult/consult.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { DailyupdateComponent } from './pages/dailyupdate/dailyupdate/dailyupdate.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'questions', component: QuestionsComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'map', component: CoronaMapComponent },
      { path: 'get-help', component: GetHelpComponent },
      { path: 'consult', component: ConsultComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'update', component: DailyupdateComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
