import { Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';

export const ArticleRoutes: Routes = [
  {
    path: 'list',
    loadComponent: () =>
      import('./article-list/article-list').then((m) => m.ArticleList),
  },
  {
    path: 'new-article',
    loadComponent: () =>
      import('./article-new-reactive/article-new-reactive').then(
        (m) => m.ArticleNewReactive
      ),
    canActivate: [authGuard],
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./article-detail/article-detail').then((m) => m.ArticleDetail),
  },
];
