import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircleComponent } from './scene/circle/circle.component';
import { LineComponent } from './scene/line/line.component';
import { RotateBackgroundComponent } from './scene/rotate-background/rotate-background.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FormatDatePipe } from './pages/calendar/pipes/format-date.pipe';
import { CustomStyleDirective } from './pages/calendar/directives/custom-style.directive';

@NgModule({
  declarations: [

  
    // CalendarComponent
  
    // FormatDatePipe,
    //     CustomStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],

})
export class AppModule { }
