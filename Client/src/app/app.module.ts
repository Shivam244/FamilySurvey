import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormServiceService } from './form-service.service';
// import { Form } from './form';
import { SurveyComponent } from './survey/survey.component';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ListComponent } from './list/list.component';
import {AgGridModule} from 'ag-grid-angular';
import { BtnEditComponent } from './btn-edit/btn-edit.component';
// import { MembersComponent } from './members/members.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    SurveyComponent,
    ListComponent,
    BtnEditComponent,
    // MembersComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AgGridModule
    
  ],
  providers: [FormServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
