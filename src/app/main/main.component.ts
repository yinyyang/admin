import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isShow: boolean;

  constructor() { }

  ngOnInit() {
    this.isShow = true;
  }

  isShowBar() {
    if (this.isShow === false) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
}
