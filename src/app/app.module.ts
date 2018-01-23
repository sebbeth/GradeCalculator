import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { CourseComponent } from './course/course.component';
import { SetupComponent } from './setup/setup.component';
import { AccountComponent } from './account/account.component';
import { SupportComponent } from './support/support.component';
import { LandingComponent } from './landing/landing.component';
import { CourseSummaryComponent } from './dashboard/course-summary/course-summary.component';
import { AccountDataService } from './account-data.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CourseComponent,
    SetupComponent,
    AccountComponent,
    SupportComponent,
    LandingComponent,
    CourseSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [AccountDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
