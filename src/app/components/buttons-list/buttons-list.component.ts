import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ButtonsListItem {
  label: string;
  value: string;
}

@Component({
  selector: 'buttons-list',
  templateUrl: './buttons-list.component.html',
  styleUrls: ['./buttons-list.component.scss'],
})
export class ButtonsListComponent {
  @Input() items: ButtonsListItem[] = [];
  @Output() clickedItem = new EventEmitter<string>();
  constructor() {}

  listItemTrackBy(index: number, item: ButtonsListItem) {
    return item.value + index;
  }

  handleClick(value: string) {
    this.clickedItem.emit(value);
  }
}
