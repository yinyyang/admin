import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit , AfterViewInit {

  @ViewChild('pagination')
  paginationRef: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log('test debugger');
  }

  clickPageLink() {
    console.log(this.paginationRef);
  }

  ngAfterViewInit() {
    console.log(this.paginationRef.nativeElement);
  }


}
