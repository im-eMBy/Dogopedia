import { Component } from '@angular/core';
import { BreadData } from './model/BreadData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentBread: BreadData | undefined;

  handleBreadSelected(value: BreadData) {
    this.currentBread = value;
  }
}
