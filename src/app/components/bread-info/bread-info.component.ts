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

  constructor(private breadImageService: BreadImagesService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['breadData']) {
      if (!this.breadData) return;

      this.subscription = this.breadImageService
        .getBreadImages(this.breadData)
        .subscribe((data: ImagesResponse) => {
          this.imageUrls = data.message;
        });
    }
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
