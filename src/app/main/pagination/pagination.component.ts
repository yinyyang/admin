import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('test debugger');
  }

  clickPageLink($event) {
    console.log($event);
  }


}
