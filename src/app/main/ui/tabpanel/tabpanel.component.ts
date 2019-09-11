import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabpanel',
  templateUrl: './tabpanel.component.html',
  styleUrls: ['./tabpanel.component.css']
})
export class TabpanelComponent implements OnInit {
  selected:any='tab1';
  constructor() { }

  ngOnInit() {
  }

  select(item){
    this.selected = (this.selected === item ? null : item);
  }
  isActive(item){
    return this.selected === item;
  }
}
