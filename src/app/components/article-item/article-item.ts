import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Article } from '../../models/article.model';
import { ArticleQuantityChange } from '../../models/article-quantity-change-model';

@Component({
  selector: 'app-article-item',
  imports: [NgClass],
  templateUrl: './article-item.html',
  styleUrl: './article-item.scss',
})
export class ArticleItem {
  @Input() articleQuantityChange!: ArticleQuantityChange;

  incrementQuantity(): void {
    this.articleQuantityChange.article.quantityInCart++;
  }

  decrementQuantity(): void {
    if (this.articleQuantityChange.article.quantityInCart > 0) {
      this.articleQuantityChange.article.quantityInCart--;
    }
  }
}
