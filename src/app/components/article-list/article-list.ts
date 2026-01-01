import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleItem } from '../article-item/article-item';
import { ArticleQuantityChange } from '../../models/article-quantity-change';
import { ArticleService } from '../../services/article-service/article-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-list',
  imports: [CommonModule, ArticleItem, FormsModule],
  templateUrl: './article-list.html',
  styleUrl: './article-list.scss',
})
export class ArticleList implements OnInit {

  public articles$!: Observable<Article[]>;
  public searchTerm = '';

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articles$ = this.articleService.getArticles(this.searchTerm);
  }

  applySearch(): void {
    this.loadArticles();
  }

  updateQuantity(change: ArticleQuantityChange): void {
    const changeInQuantity = change.quantity - change.article.quantityInCart;
    this.articleService.changeQuantity(change.article.id, changeInQuantity).subscribe(() => {
      this.loadArticles();
    });
  }
}
