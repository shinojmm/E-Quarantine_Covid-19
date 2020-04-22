import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoronaMapComponent } from './pages/corona-map/corona-map.component';
import { GetHelpComponent } from './pages/get-help/get-help.component';
import { ConsultComponent } from './pages/consult/consult.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { DailyupdateComponent } from './pages/dailyupdate/dailyupdate/dailyupdate.component';
import { HttpClientModule } from '@angular/common/http';
import { CloudantServiceService } from './cloudant-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    QuestionsComponent,
    CoronaMapComponent,
    GetHelpComponent,
    ConsultComponent,
    ProgressComponent,
    DailyupdateComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CloudantServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
