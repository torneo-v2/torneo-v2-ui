import { EnvironmentProviders, Provider, importProvidersFrom } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';
import { routes } from '@torneo/app.routes';
import { TranslateModule } from '@ngx-translate/core';
import { TorneoTitleStrategy } from '@torneo/core/services/title.strategy';

export const coreProviders: (Provider | EnvironmentProviders)[] = [
    provideRouter(routes),
    importProvidersFrom(TranslateModule.forRoot()),
    {
        provide: TitleStrategy,
        useClass: TorneoTitleStrategy,
    },
];
