import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { Article } from '../../models/article.model';
import { ArticleQuantityChange } from '../../models/article-quantity-change';

@Component({
  selector: 'app-article-item',
  imports: [NgClass],
  templateUrl: './article-item.html',
  styleUrl: './article-item.scss',
})
export class ArticleItem {
  @Input() article!: Article;
  @Output() quantityChange = new EventEmitter<ArticleQuantityChange>();

  incrementQuantity(): void {
    const change: ArticleQuantityChange = {
      article: this.article,
      quantity: this.article.quantityInCart + 1
    };
    this.quantityChange.emit(change);
  }

  decrementQuantity(): void {
    const change: ArticleQuantityChange = {
      article: this.article,
      quantity: this.article.quantityInCart - 1
    };
    this.quantityChange.emit(change);
  }
}
