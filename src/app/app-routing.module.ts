import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';

import { PloanComponent } from './ploan/ploan.component';
import { SloanComponent } from './sloan/sloan.component';
import { InvestingComponent } from './investing/investing.component';
import { GetinvestComponent } from './getinvest/getinvest.component';
import { RegisterSloanComponent } from './register-sloan/register-sloan.component';
import { RegisterGiveinvestComponent } from './register-giveinvest/register-giveinvest.component';
import { RegisterGetinvestComponent } from './register-getinvest/register-getinvest.component';
import { LawyerComponent } from './lawyer/lawyer.component';
import { AboutComponent } from './about/about.component';
import { MessagesComponent } from './messages/messages.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { UserprofComponent } from './userprof/userprof.component';


const routes: Routes = [
    { path: 'home',component: HomeComponent },
    { path: 'user',component: UserComponent },
    { path: 'pm',component: PmComponent },
    { path: 'admin',component: AdminComponent },
    { path: 'auth/login',component: LoginComponent },
    { path: 'signup', component: RegisterComponent },
    { path: 'ploan', component: PloanComponent },
    { path: 'sloan', component: SloanComponent },
    { path: 'investing', component: InvestingComponent },
    { path: 'getinvest', component: GetinvestComponent},
    { path: 'lawyer', component: LawyerComponent},
    { path: 'about', component: AboutComponent},
    { path: 'messages', component: MessagesComponent},
    { path: 'announcement', component: AnnouncementComponent},
    { path: 'userprof', component: UserprofComponent},



    
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
