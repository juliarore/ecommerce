import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticleForm } from '../../models/article-form-model';

@Component({
  selector: 'app-article-new-template',
  imports: [FormsModule, CommonModule],
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

  onSubmit(form: NgForm) {
    this.formSubmitted = true;

    if (form.valid) {
      console.log(this.article);
    }
  }
}
