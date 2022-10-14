import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ButtonsListComponent } from './components/buttons-list/buttons-list.component';
import { BreadsComponent } from './components/breads/breads.component';
import { BreadInfoComponent } from './components/bread-info/bread-info.component';
import { ImagesCarouselComponent } from './components/images-carousel/images-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsListComponent,
    BreadsComponent,
    BreadInfoComponent,
    ImagesCarouselComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
