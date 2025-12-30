import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { ArticleForm } from '../models/article-form-model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articlesSubject: BehaviorSubject<Article[]>;
  private articles:Article[];

  constructor() {
    this.articles = [
      {
        id: 1,
        name: 'Adidas Samba OG',
        imageUrl: '/assets/images/adidas-samba-og.jpg',
        price: 120,
        isOnSale: true,
        quantityInCart: 0
      },
      {
        id: 2,
        name: 'Adidas Forum Low',
        imageUrl: '/assets/images/adidas-forum-low.jpg',
        price: 78,
        isOnSale: false,
        quantityInCart: 0
      },
      {
        id: 3,
        name: 'Adidas Gazelle',
        imageUrl: '/assets/images/adidas-gazelle.jpg',
        price: 100,
        isOnSale: true,
        quantityInCart: 0
      }
    ];
    this.articlesSubject = new BehaviorSubject<Article[]>(this.articles);
  }

  getArticles(): Observable<Article[]> {
    return this.articlesSubject.asObservable();
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable<Article> {
    // Busquem l'article pel seu ID
    const article = this.articles.find(article => article.id === articleID);
    if (article) {
      // Actualitzem la quantitat
      article.quantityInCart += changeInQuantity;
      // Emitim la nova llista d'articles perquè els subscritors rebin el canvi
      this.articlesSubject.next(this.articles);
      // Retornem l'article actualitzat com un observable
      return new BehaviorSubject<Article>(article).asObservable();
    } else {
      throw new Error('No se ha encontrado ningún artículo.');
    }
  }

  create(article: ArticleForm): Observable<Article> {
    // Creem un nou ID sumant 1 al màxim ID existent
    const newId: number = this.articles.length > 0 ? Math.max(...this.articles.map(a => a.id)) + 1 : 1;
    // Creem el nou article afegint l'ID i la quantitat a les dades del formulari
    const newArticle: Article = { ...article, id: newId, quantityInCart: 0 };
    // Afegim el nou article a l'array
    this.articles.push(newArticle);
    // Emitim la nova llista d'articles perquè els components s'actualitzin
    this.articlesSubject.next(this.articles);
    // Retornem el nou article com un observable
    return of(newArticle);
  }
}
