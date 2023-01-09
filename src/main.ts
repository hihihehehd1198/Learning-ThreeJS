import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';

import { AppModule } from './app/app.module';
import { CalendarComponent } from './app/pages/calendar/calendar.component';
import { CircleComponent } from './app/scene/circle/circle.component';
import { LineComponent } from './app/scene/line/line.component';
import { RotateBackgroundComponent } from './app/scene/rotate-background/rotate-background.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// bootstrapApplication(LineComponent)
bootstrapApplication(CalendarComponent)

// bootstrapApplication(RotateBackgroundComponent)