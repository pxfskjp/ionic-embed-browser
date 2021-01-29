import { Directive, ContentChildren, QueryList, ElementRef, AfterViewInit, Input, Renderer2 } from '@angular/core';
import { IonItem, IonCol } from '@ionic/angular';


@Directive({
  selector: '[appAnimateItems]'
})
export class AnimateItemsDirective implements AfterViewInit {
  @Input() className: string;

  private observer: IntersectionObserver;

  @ContentChildren(IonCol, {read: ElementRef}) itemsColumn: QueryList<ElementRef>;
  @ContentChildren(IonItem, {read: ElementRef}) items: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(){
    let options = {
      threshold: 0.5
    };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry: any) => {
        if(entry.isIntersecting){
          this.renderer.addClass(entry.target, this.className);
        }
        // else {
        //   this.renderer.removeClass(entry.target, this.className);
        // }
      })
    }, options);

    this.items.forEach((item, index, arr) =>{
      setTimeout(() =>{
        this.observer.observe(item.nativeElement);
      }, index* 200);
    });

    this.itemsColumn.forEach((item, index, arr) =>{
      setTimeout(() =>{
        this.observer.observe(item.nativeElement);
      }, index* 200);
    });

  };
}
