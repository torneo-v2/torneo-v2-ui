import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('@torneo/features/landing/landing.routes').then((m) => m.landingRoutes),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('@torneo/features/dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES),
    },
];
