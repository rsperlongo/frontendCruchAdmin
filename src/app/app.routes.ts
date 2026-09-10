import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'login' },
	{ path: 'login', loadComponent: () => import('./login/login').then((component) => component.Login) },
	{ path: 'forgot-password', loadComponent: () => import('./forgot-password/forgot-password').then((component) => component.ForgotPassword) },
	{
		path: 'dashboard',
		canActivate: [authGuard],
		loadComponent: () => import('./dashboard/dashboard').then((component) => component.Dashboard),
		children: [
			{ path: '', loadComponent: () => import('./dashboard/home').then((component) => component.Home) },
			{ path: 'members', loadComponent: () => import('./members/members').then((component) => component.Members) },
		],
	},
	{ path: '**', redirectTo: 'login' },
];
