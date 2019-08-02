import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
   isShow:boolean;
   @Input()
   title: String="Panel";

  constructor() {
    this.isShow =true;

  }

  ngOnInit() {
  }

  isActive(){
    if(this.isShow==true){
      this.isShow=false;
    }else{
      this.isShow=true;
    }
  }

}
