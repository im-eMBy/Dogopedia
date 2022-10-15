import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesCarouselComponent } from './images-carousel.component';

describe('ImagesCarouselComponent', () => {
  let component: ImagesCarouselComponent;
  let fixture: ComponentFixture<ImagesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagesCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImagesCarouselComponent);
    component = fixture.componentInstance;
    component.images = ['test1', 'test2', 'test3'];
    component.currentImage = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create image for every url passed', () => {
    const imageElements = fixture.nativeElement.querySelectorAll(
      '.carousel__image-container'
    );
    expect(imageElements.length).toEqual(component.images.length);
  });
  it('should update current image on right button click', () => {
    component.handleRightButtonClick();
    expect(component.currentImage).toEqual(2);
  });
  it('should update current image on left button click', () => {
    component.handleLeftButtonClick();
    expect(component.currentImage).toEqual(0);
  });
});
