import { Component } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleItem } from '../article-item/article-item';
import { ArticleQuantityChange } from '../../models/article-quantity-change';

@Component({
  selector: 'app-article-list',
  imports: [ArticleItem],
  templateUrl: './article-list.html',
  styleUrl: './article-list.scss',
})
export class ArticleList {
  articles: Article[] = [
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

  updateQuantity(change: ArticleQuantityChange): void {
    const article = this.articles.find(article => article.id === change.article.id);
    if (article) {
      article.quantityInCart = change.quantity;
    }
  }
}
