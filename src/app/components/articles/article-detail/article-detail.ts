import { Component, OnInit } from '@angular/core';
import { Article } from '../../../models/article.model';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../../services/article-service/article-service';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { DefaultImagePipe } from '../../../pipes/default-image.pipe';

@Component({
  selector: 'app-article-detail',
  imports: [CommonModule, CurrencyPipe, DefaultImagePipe, RouterLink],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.scss',
})
export class ArticleDetail implements OnInit {
  article: Article | null = null;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    // Obtenim l'ID de l'article des de l'URL
    const articleID = this.route.snapshot.paramMap.get('id');

    if (articleID) {
      // Cridem al servei per obtenir els detalls de l'article i convertim l'ID a número
      this.articleService.getArticleById(+articleID).subscribe({
        next: (data) => {
          this.article = data;
          this.errorMessage = null;
        },
        error: (err) => {
          this.errorMessage = 'No se han podido cargar los detalles del artículo.';
        }
      });
    } else {
      this.errorMessage = 'No se han podido cargar los detalles del artículo.';
    }
  }
}
