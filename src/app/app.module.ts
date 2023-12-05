import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { PloanComponent } from './ploan/ploan.component';
import { SloanComponent } from './sloan/sloan.component';
import { InvestingComponent } from './investing/investing.component';
import { GetinvestComponent } from './getinvest/getinvest.component';
import { RegisterPloanComponent } from './register-ploan/register-ploan.component';
import { RegisterSloanComponent } from './register-sloan/register-sloan.component';
import { RegisterGiveinvestComponent } from './register-giveinvest/register-giveinvest.component';
import { RegisterGetinvestComponent } from './register-getinvest/register-getinvest.component';
import { MessagesComponent } from './messages/messages.component';
import { RmessageComponent } from './rmessage/rmessage.component';
import { LawyerComponent } from './lawyer/lawyer.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { UserprofComponent } from './userprof/userprof.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    PloanComponent,
    SloanComponent,
    InvestingComponent,
    GetinvestComponent,
    RegisterPloanComponent,
    RegisterSloanComponent,
    RegisterGiveinvestComponent,
    RegisterGetinvestComponent,
    MessagesComponent,
    RmessageComponent,
    LawyerComponent,
    AnnouncementComponent,
    AboutComponent,
    LogoutComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    UserprofComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
