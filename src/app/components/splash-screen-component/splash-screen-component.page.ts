import { Component, Output, EventEmitter, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'splash-screen-component',
  templateUrl: './splash-screen-component.page.html',
  styleUrls: ['./splash-screen-component.page.scss'],
})
export class SplashScreenComponentPage implements OnChanges, OnDestroy {
  @Input() data: any;
  @Output() onRedirect = new EventEmitter();
  @Output() onSkip = new EventEmitter();
  
  timer: any;

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    clearInterval(this.timer);
    this.data = changes['data'].currentValue;
    this.executeEvents();
  }
  
  executeEvents(): void {
    const duration = (this.data && this.data.duration) ? this.data.duration : 10000;
    let self = this;
    this.timer = setTimeout(function() {
      self.onRedirect.emit();
    }, duration);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
