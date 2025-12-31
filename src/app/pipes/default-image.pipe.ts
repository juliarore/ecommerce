import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'defaultImage',
  standalone: true
})
export class DefaultImagePipe implements PipeTransform {
  transform(imageUrl: string) {
    return imageUrl && imageUrl.trim() !== '' ? imageUrl : 'assets/images/default-image.jpg';
  }
}
