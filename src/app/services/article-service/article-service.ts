import { Injectable } from '@angular/core';
import { Article } from '../../models/article.model';
import { Observable, of, throwError } from 'rxjs';
import { ArticleForm } from '../../models/article-form-model';
import { ARTICLES_DATA } from '../../data/articles.data';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = [...ARTICLES_DATA];

  constructor() {}

  getArticles(query?: string): Observable<Article[]> {
    if (query) {
      const filteredArticles = this.articles.filter(
        article => article.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
      return of(filteredArticles);
    }
    return of(this.articles);
  }

  getArticleById(articleID: number): Observable<Article> {
    const foundArticle = this.articles.find(article => article.id === articleID);
    if (foundArticle) {
      return of(foundArticle);
    }
    return throwError(() => new Error(`Article with id ${articleID} not found!`));
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable<Article> {
    const foundArticle = this.articles.find(article => article.id === articleID);
    if (foundArticle) {
      foundArticle.quantityInCart += changeInQuantity;
      return of(foundArticle);
    }
    return throwError(() => new Error(`Article with id ${articleID} not found.`));
  }

  create(article: ArticleForm): Observable<Article> {
    const newArticle: Article = {
      ...article,
      id: this.articles.length + 1,
      quantityInCart: 0
    };
    this.articles.push(newArticle);
    return of(newArticle);
  }
}
