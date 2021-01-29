import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'donate-component',
  templateUrl: './donate-component.page.html',
  styleUrls: ['./donate-component.page.scss'],
})

export class DonateComponentPage implements OnChanges {
 
  @Input() data: any;

  @Output() onItemClick = new EventEmitter();
  @Output() onExplore = new EventEmitter();
  @Output() onShare = new EventEmitter();

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onItemClickFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit(item);
  }

  onShareFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onShare.emit(item);
  }

  onExploreFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onExplore.emit(item);
  }
}
