import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: './home-component.page.html',
  styleUrls: ['./home-component.page.scss'],
})
export class HomeComponentPage implements OnChanges {

  @Input() data : any;

  @Output() onItemClick = new EventEmitter();

  constructor() { }
  
  ngOnChanges(changes: { [proKey: string] : any }): void {
    this.data = changes['data'].currentValue;
  }

  onItemClickFunc(item) {
    if (event) {
      event.stopPropagation();
    }

    this.onItemClick.emit(item);
  }

}
