import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { BreadData } from 'src/app/model/BreadData';
import { SubBreadsMap } from 'src/app/model/SubBreadsMap';
import { BreadsService, BreadsResponse } from 'src/app/services/breads.service';
import { ButtonsListItem } from '../buttons-list/buttons-list.component';

@Component({
  selector: 'breads',
  templateUrl: './breads.component.html',
  styleUrls: ['./breads.component.scss'],
  providers: [BreadsService],
})
export class BreadsComponent implements OnInit, OnDestroy {
  breads: string[] | undefined;
  subBreads: string[] | undefined;
  currentBread: string | undefined;
  subBreadsMap: SubBreadsMap | undefined;
  breadsSubscription: Subscription | undefined;
  @Output() selectedBread = new EventEmitter<BreadData>();

  get breadsList(): ButtonsListItem[] {
    if (!this.breads) return [];
    return this.breads.map((bread) => {
      const subBreadsCount = this.getSubBreadsCount(bread);
      return {
        label: bread + (subBreadsCount > 1 ? ` (${subBreadsCount})` : ''),
        value: bread,
      };
    });
  }
  get subBreadsList(): ButtonsListItem[] {
    if (!this.subBreads) return [];
    return this.subBreads.map((bread) => ({
      label: bread,
      value: bread,
    }));
  }

  constructor(public breadsService: BreadsService) {}

  ngOnInit(): void {
    this.breadsSubscription = this.breadsService
      .getBreadsApiData()
      .subscribe((data: BreadsResponse) => {
        this.breads = Object.keys(data.message);
        this.subBreadsMap = data.message;
      });
  }

  ngOnDestroy(): void {
    this.breadsSubscription?.unsubscribe();
  }

  getSubBreadsCount(bread: string) {
    if (!this.subBreadsMap) return 0;
    return this.subBreadsMap[bread].length;
  }

  handleClickedBread(value: string) {
    this.currentBread = value;
    const subBreadsList = this.subBreadsMap ? this.subBreadsMap[value] : [];
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
