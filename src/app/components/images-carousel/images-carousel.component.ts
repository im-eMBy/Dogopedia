import { Component, Input } from '@angular/core';

@Component({
  selector: 'images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.scss'],
})
export class ImagesCarouselComponent {
  @Input() images: string[] = [];
  private currentImage: number = 0;
  get pathTransformExp(): string {
    return 'translateX(-' + 400 * this.currentImage + 'px)';
  }

  constructor() {}

  setCurrentImage(value: number) {
    this.currentImage = value;
  }
}
