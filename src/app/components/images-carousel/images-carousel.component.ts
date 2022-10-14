import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.scss'],
})
export class ImagesCarouselComponent implements OnChanges {
  @Input() images: string[] = [];
  @ViewChild('imageContainer') imageContainer:
    | ElementRef<HTMLDivElement>
    | undefined;
  currentImage: number = 0;

  get pathTransformExp(): string {
    const imageContainerWidth = this.imageContainer
      ? this.imageContainer.nativeElement.scrollWidth
      : 400;
    return 'translateX(-' + imageContainerWidth * this.currentImage + 'px)';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['images']) return;
    this.setCurrentImage(0);
  }

  setCurrentImage(value: number) {
    this.currentImage = value;
  }

  handleLeftButtonClick() {
    this.setCurrentImage(
      this.currentImage === 0 ? this.images.length - 1 : --this.currentImage
    );
  }

  handleRightButtonClick() {
    this.setCurrentImage(
      this.currentImage === this.images.length - 1 ? 0 : ++this.currentImage
    );
  }

  handleResize() {
    this.setCurrentImage(0);
  }
}
