import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './pages/players/players.component';
import { HomepageComponent } from './pages/homepage/homepage.component'

export const router: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomepageComponent
    },
    {
        path: 'players',
        component: PlayersComponent
    },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);