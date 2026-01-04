import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./components/user/user.routes').then(m => m.AuthRoutes)
  },
  {
    path: 'articles',
    loadChildren: () => import('./components/article/article.routes').then(m => m.ArticleRoutes)
  },
];
