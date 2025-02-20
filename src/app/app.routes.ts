import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent,
        children: [
          {
            path: 'Home',
            loadChildren: () =>
              import('./modules/home/home.module').then(m => m.HomeModule)
          },
        ]
    }
];
