import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }      from './dashboard/dashboard.component';
import { CourseComponent }      from './course/course.component';
import { AccountComponent }      from './account/account.component';
import { SetupComponent }      from './setup/setup.component';
import { SupportComponent }      from './support/support.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'course/:title', component: CourseComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'account', component: AccountComponent },
  { path: 'support', component: SupportComponent }




];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
