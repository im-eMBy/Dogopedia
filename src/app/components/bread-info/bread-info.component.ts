import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { BreadData } from 'src/app/model/BreadData';
import {
  BreadImagesService,
  ImagesResponse,
} from 'src/app/services/bread-images.service';

@Component({
  selector: 'bread-info',
  templateUrl: './bread-info.component.html',
  styleUrls: ['./bread-info.component.scss'],
  providers: [BreadImagesService],
})
export class BreadInfoComponent implements OnChanges, OnDestroy {
  @Input() breadData: BreadData | undefined;
  imageUrls: string[] = [];
  subscription: Subscription | undefined;
  get title(): string {
    if (!this.breadData) return '';
    const bread = this.firstLetterUpper(this.breadData.bread);
    const subBread =
      ' ' +
      (this.breadData.subBread
        ? this.firstLetterUpper(this.breadData.subBread)
        : '');
    return bread + subBread;
  }
  get link() {
    if (!this.breadData) return '';
    return (
      'https://en.wikipedia.org/wiki/' +
      this.breadData.bread +
      (this.breadData.subBread ? `_${this.breadData.subBread}` : '')
    );
  }

  constructor(private breadImageService: BreadImagesService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['breadData'] || !this.breadData) return;

    this.subscription = this.breadImageService
      .getBreadImages(this.breadData)
      .subscribe((data: ImagesResponse) => {
        this.imageUrls = data.message;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  firstLetterUpper(value: string) {
    return value[0].toUpperCase() + value.substring(1);
  }
}
