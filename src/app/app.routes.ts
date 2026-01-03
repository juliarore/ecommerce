import { Routes } from '@angular/router';
import { ArticleList } from './components/article-list/article-list';
import { ArticleDetail } from './components/article-detail/article-detail';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { ArticleNewReactive } from './components/article-new-reactive/article-new-reactive';
import { ArticleNewTemplate } from './components/article-new-template/article-new-template';
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
