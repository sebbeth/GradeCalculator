import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { Router } from '@angular/router';
//import { ActivatedRoute } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


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
import { CourseItemComponent } from './course/course-item/course-item.component';
import { NgCircleProgressModule } from 'ng-circle-progress'; // From https://github.com/bootsoon/ng-circle-progress

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CourseComponent,
    SetupComponent,
    AccountComponent,
    SupportComponent,
    LandingComponent,
    CourseSummaryComponent,
    CourseItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),

    // Specify ng-circle-progress as an import
   NgCircleProgressModule.forRoot({
     // set defaults here
     radius: 100,
     outerStrokeWidth: 16,
     innerStrokeWidth: 8,
     outerStrokeColor: "#78C000",
     innerStrokeColor: "#C7E596",
     animationDuration: 300,
     showSubtitle: false
   })
  ],
  providers: [AccountDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
