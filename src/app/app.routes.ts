import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoursesComponent } from './components/courses/courses.component';
import { Courses1Component } from './components/courses-1/courses-1.component';
import { Courses2Component } from './components/courses-2/courses-2.component';
import { McqComponent } from './components/mcq/mcq.component';
import { Courses3Component } from './components/courses-3/courses-3.component';
import { Courses4Component } from './components/courses-4/courses-4.component';
import { Courses5Component } from './components/courses-5/courses-5.component';
import { Mcq1Component } from './components/mcq-1/mcq-1.component';
import { Mcq2Component } from './components/mcq-2/mcq-2.component';
import { Mcq3Component } from './components/mcq-3/mcq-3.component';
import { Mcq4Component } from './components/mcq-4/mcq-4.component';
import { Mcq5Component } from './components/mcq-5/mcq-5.component';
import { PassComponent } from './components/pass/pass.component';
import { FailComponent } from './components/fail/fail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './components/user/user.component';
import { SlidesComponent } from './components/slides/slides.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'courses', component: CoursesComponent},
    { path: 'courses-1',component:Courses1Component},
    { path: 'courses-2',component:Courses2Component},
    { path: 'courses-3',component:Courses3Component},
    { path: 'courses-4',component:Courses4Component},
    { path: 'courses-5',component:Courses5Component},
    { path: 'mcq',component:McqComponent},
    { path: 'mcq-1',component:Mcq1Component},
    { path: 'mcq-2',component:Mcq2Component},
    { path: 'mcq-3',component:Mcq3Component},
    { path: 'mcq-4',component:Mcq4Component},
    { path: 'mcq-5',component:Mcq5Component},
    { path: 'pass',component:PassComponent},
    { path: 'fail',component:FailComponent},
    { path: 'profile',component:ProfileComponent},
    { path: 'user',component:UserComponent},
    { path: 'slides',component:SlidesComponent}
  ];
