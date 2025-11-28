import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-item',
  imports: [NgClass],
  templateUrl: './article-item.html',
  styleUrl: './article-item.scss',
})
export class ArticleItem {

  article: Article = {
    name: 'Adidas Samba OG',
    imageUrl: '/assets/images/adidas-samba-og.jpg',
    price: 120,
    isOnSale: true,
    quantityInCart: 1
  };

  incrementQuantity(): void {
    this.article.quantityInCart++;
  }

  decrementQuantity(): void {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }
}
