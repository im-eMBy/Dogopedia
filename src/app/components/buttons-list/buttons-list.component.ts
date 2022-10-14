import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'buttons-list',
  templateUrl: './buttons-list.component.html',
  styleUrls: ['./buttons-list.component.scss'],
})
export class ButtonsListComponent {
  @Input() items: string[] = [];
  @Output() clickedItem = new EventEmitter<string>();
  constructor() {}

  handleClick(value: string) {
    this.clickedItem.emit(value);
  }
}
