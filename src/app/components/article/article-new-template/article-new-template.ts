import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ArticleForm } from '../../../models/article-form-model';
import { ArticleService } from '../../../services/article-service/article-service';

@Component({
  selector: 'app-article-new-template',
  imports: [FormsModule],
  templateUrl: './article-new-template.html',
  styleUrl: './article-new-template.scss',
})
export class ArticleNewTemplate {
  article: ArticleForm = {
    name: '',
    price: 0,
    imageUrl: '',
    isOnSale: false
  };
  formSubmitted = false;

  constructor(private articleService: ArticleService) {}

  onSubmit(form: NgForm) {
    this.formSubmitted = true;

    if (form.valid) {
      // Cridem al servei per crear el nou article
      this.articleService.create(this.article).subscribe(() => {
        form.reset();
        this.formSubmitted = false;
      });
    }
  }
}
