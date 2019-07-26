import {Directive, ElementRef, HostListener, Input, NgZone} from '@angular/core';
import {SidebarComponent} from "../layout/sidebar/sidebar.component";

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {
  sidebarComponent: SidebarComponent;

  @Input()
  itemParam:any;
  @Input('appResize')
  set setSidebarComponent(sidebarComponent){
    this.sidebarComponent=sidebarComponent;
  }
  constructor(private ngZone: NgZone) {

  }
  @HostListener('window:resize', ['$event'])
  onResize(event){
    //ngZone.run will help to run change detection
    this.ngZone.run(() => {
      console.log("Width: " + window.innerWidth);
      console.log("Height: " + window.innerHeight);
      if(window.innerWidth<576){
        console.log("item:"+this.itemParam);
        console.log("selected:"+this.sidebarComponent.selected);
          this.sidebarComponent.select(this.itemParam);
          console.log("after");
        console.log("item:"+this.itemParam);
        console.log("selected:"+this.sidebarComponent.selected);
      }
    });
  }


}
