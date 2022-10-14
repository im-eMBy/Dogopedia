import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadInfoComponent } from './bread-info.component';

describe('DogImagesComponent', () => {
  let component: BreadInfoComponent;
  let fixture: ComponentFixture<BreadInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
