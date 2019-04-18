import {Directive, ElementRef, HostListener, Input, Output} from '@angular/core';
import {tap} from 'rxjs/internal/operators';

@Directive({
  selector: '[appTableshow]'
})
export class TableshowDirective {
  @Input()
  @Output()
  private isShow: boolean;


  constructor(private el: ElementRef) {
  }

  @HostListener('click') onClick() {
    this.hide();
  }

  private hide() {
    if (this.isShow === true) {
      document.getElementById('userInfo').style.display = 'none';
      this.isShow = false;
      this.el.nativeElement.getElementsByTagName('i').item(0).setAttribute('class', 'glyphicon glyphicon-menu-up');
    } else {
      document.getElementById('userInfo').removeAttribute('style');
      this.isShow = true;
      this.el.nativeElement.getElementsByTagName('i').item(0).setAttribute('class', 'glyphicon glyphicon-menu-down');
    }
  }
}
