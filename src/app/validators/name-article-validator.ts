import { AbstractControl, ValidationErrors } from '@angular/forms';

export function NameArticleValidator(control: AbstractControl): ValidationErrors | null {

  // No validem si el camp està buit
  if (!control.value) return null;

  const forbiddenNames = ['prova', 'test', 'mock', 'fake'];

  const value = control.value.trim().toLowerCase();

  // Si el nom està dins la llista forbiddenNames, retornem un error. Si no, retornem null (vàlid)
  return forbiddenNames.includes(value) ? { forbiddenName: true } : null;
}
