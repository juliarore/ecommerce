import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleItem } from '../article-item/article-item';
import { ArticleQuantityChange } from '../../models/article-quantity-change';
import { ArticleService } from '../../services/article-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-list',
  imports: [CommonModule, ArticleItem],
  templateUrl: './article-list.html',
  styleUrl: './article-list.scss',
})
export class ArticleList implements OnInit {

  public articles$!: Observable<Article[]>;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles$ = this.articleService.getArticles();
  }

  updateQuantity(change: ArticleQuantityChange): void {
    // const article = this.articles.find(article => article.id === change.article.id);
    // if (article) {
    //   article.quantityInCart = change.quantity;
    // }
  }
}
