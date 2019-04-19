import {Component, Directive, ElementRef, HostListener, Input, Output, EventEmitter} from '@angular/core';
import {tap} from 'rxjs/internal/operators';

@Directive({
  selector: '[appTableshow]'
})
export class TableshowDirective {

  @Input()
  tableId: string;

  isShow: boolean;


  constructor(private el: ElementRef) {
    this.isShow = true;
  }

  @HostListener('click') onClick() {
    this.hide();
  }

  private hide() {
    if (this.isShow === true) {

      document.getElementById(this.tableId).style.display = 'none';
      this.isShow = false;
      this.el.nativeElement.getElementsByTagName('i').item(0).setAttribute('class', 'glyphicon glyphicon-menu-up');
    } else {
      document.getElementById(this.tableId).removeAttribute('style');
      this.isShow = true;
      this.el.nativeElement.getElementsByTagName('i').item(0).setAttribute('class', 'glyphicon glyphicon-menu-down');
    }
  }
}
