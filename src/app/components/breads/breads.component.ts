import { Component, Output, EventEmitter } from '@angular/core';
import { BreadData } from 'src/app/model/BreadData';
import { BreadsService } from 'src/app/services/breads.service';

@Component({
  selector: 'breads',
  templateUrl: './breads.component.html',
  styleUrls: ['./breads.component.scss'],
  providers: [BreadsService],
})
export class BreadsComponent {
  subBreads: string[] | undefined;
  currentBread: string | undefined;
  @Output() selectedBread = new EventEmitter<BreadData>();
  constructor(public breadsService: BreadsService) {}

  handleClickedBread(value: string) {
    this.currentBread = value;
    const subBreadsList = this.breadsService.getSubbreads(value);
    if (subBreadsList.length > 1) {
      this.subBreads = subBreadsList;
      return;
    }
    this.subBreads = undefined;
    this.selectedBread.emit({ bread: value, subBread: null });
  }
  handleClickedSubBread(value: string) {
    this.selectedBread.emit({
      bread: this.currentBread || '',
      subBread: value,
    });
  }
}
