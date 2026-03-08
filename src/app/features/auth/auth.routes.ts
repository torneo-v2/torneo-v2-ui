import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
    {
        path: 'login',
        loadComponent: () =>
            import('@torneo/features/auth/login/login.component').then((m) => m.LoginComponent),
    },
    {
        path: 'register',
        loadComponent: () =>
            import('@torneo/features/auth/register/register.component').then(
                (m) => m.RegisterComponent,
            ),
    },
];
