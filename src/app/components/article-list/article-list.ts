import { Component } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleQuantityChange } from '../../models/article-quantity-change-model';
import { ArticleItem } from '../article-item/article-item';

@Component({
  selector: 'app-article-list',
  imports: [ArticleItem],
  templateUrl: './article-list.html',
  styleUrl: './article-list.scss',
})
export class ArticleList {
  articleQuantityChanges: ArticleQuantityChange[] = [
    {
      article: {
        name: 'Adidas Samba OG',
        imageUrl: '/assets/images/adidas-samba-og.jpg',
        price: 120,
        isOnSale: true,
        quantityInCart: 0
      },
      quantity: 0
    },
    {
      article: {
        name: 'Adidas Forum Low',
        imageUrl: '/assets/images/adidas-forum-low.jpg',
        price: 78,
        isOnSale: false,
        quantityInCart: 0
      },
      quantity: 0
    },
    {
      article: {
        name: 'Adidas Gazelle',
        imageUrl: '/assets/images/adidas-gazelle.jpg',
        price: 100,
        isOnSale: true,
        quantityInCart: 0
      },
      quantity: 0
    }
  ];
}
