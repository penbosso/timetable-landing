import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleListComponent } from './schedule/schedule-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleDetailComponent } from './schedule/schedule-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleListComponent,
    ScheduleDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'schedules', component: ScheduleListComponent },
      { path: 'schedules/:id', component: ScheduleDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch:'full' },
      { path: '**', redirectTo: 'welcome', pathMatch:'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
