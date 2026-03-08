import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { coreProviders } from '@torneo/core/core.providers';

export const appConfig: ApplicationConfig = {
    providers: [provideBrowserGlobalErrorListeners(), ...coreProviders],
};
