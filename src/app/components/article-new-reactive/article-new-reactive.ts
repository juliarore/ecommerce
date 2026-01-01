import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NameArticleValidator } from '../../validators/name-article-validator';
import { ArticleService } from '../../services/article-service/article-service';


@Component({
  selector: 'app-article-new-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './article-new-reactive.html',
  styleUrl: '../article-new-template/article-new-template.scss',
})
export class ArticleNewReactive {
  articleForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.articleForm = this.fb.group({
      name: ['', [Validators.required, NameArticleValidator]],
      price: [0, [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required, Validators.pattern("^https?:\/\/([a-zA-Z0-9]+\.)?[a-zA-Z0-9]+\.[a-zA-Z]{2,3}(\/[a-zA-Z0-9._-]+)*\.(jpg|jpeg|png|gif)$")]],
      isOnSale: [false]
    });
  }

  // Getters per accedir als controls del formulari
  get name() {
    return this.articleForm.get('name');
  }

  get price() {
    return this.articleForm.get('price');
  }

  get imageUrl() {
    return this.articleForm.get('imageUrl');
  }

  get isOnSale() {
    return this.articleForm.get('isOnSale');
  }


  onSubmit() {
    this.formSubmitted = true;

    if (this.articleForm.valid) {
      // Cridem al servei per crear el nou article
      this.articleService.create(this.articleForm.value).subscribe(() => {
        this.articleForm.reset();
        this.formSubmitted = false;
      });
    }
  }
}
