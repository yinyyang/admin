import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appTabbableshow]'
})
export class TabbableshowDirective {
  //
  @Input()
  tabbablesId: string;

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    this.active();
  }

  private active(){
    console.log(this.el.nativeElement);
    this.el.nativeElement.parentElement.getElementsByTagName("li").filter()
    this.el.nativeElement.setAttribute('class','active');
    // document.getElementById(this.tabbablesId)
  }

}
