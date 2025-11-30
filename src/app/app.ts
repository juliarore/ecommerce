import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleList } from './components/article-list/article-list';
import { Navbar } from './components/navbar/navbar';
import { ArticleNewTemplate } from './components/article-new-template/article-new-template';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleList, Navbar, ArticleNewTemplate],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ecommerce');

  currentView: string = 'articulos';

  navbarChangeView(route: string) {
    this.currentView = route;
  }
}
