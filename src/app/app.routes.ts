import { Routes } from '@angular/router';
import { ArticleList } from './components/articles/article-list/article-list';
import { ArticleDetail } from './components/articles/article-detail/article-detail';
import { Login } from './components/auth/login/login';
import { Register } from './components/auth/register/register';
import { ArticleNewReactive } from './components/articles/article-new-reactive/article-new-reactive';
import { ArticleNewTemplate } from './components/articles/article-new-template/article-new-template';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'articles', component: ArticleList },
  { path: 'article/:id', component: ArticleDetail },
  { path: 'article-new-reactive', component: ArticleNewReactive, canActivate: [authGuard] },
  { path: 'article-new-template', component: ArticleNewTemplate, canActivate: [authGuard] },
];
