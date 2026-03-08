import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '@torneo/app.config';
import { AppComponent } from '@torneo/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
