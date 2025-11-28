import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-item',
  imports: [NgClass],
  templateUrl: './article-item.html',
  styleUrl: './article-item.scss',
})
export class ArticleItem {
  @Input() article!: Article;

  incrementQuantity(): void {
    this.article.quantityInCart++;
  }

  decrementQuantity(): void {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }
}
