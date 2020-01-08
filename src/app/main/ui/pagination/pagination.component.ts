import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Output()
  onLoad: EventEmitter<any> = new EventEmitter();
  currentPage: number;
  pageSize :number;
  constructor() { }

  ngOnInit() {
    this.currentPage = 1;
    this.pageSize =20;
  }

  clickPageLink($event) {
     this.currentPage = $event.target.text;
  }

   clickNext() {
      this.currentPage = this.currentPage + 1;
      this.onLoad.emit(this.currentPage);
   }

   clickPrevious() {
     this.currentPage = this.currentPage - 1;
   }

   clickFirstPage() {
     this.currentPage = 1;
   }

   clickLastPage() {
     this.currentPage = 3;
   }

  goPage() {
    this.onLoad.emit(this.currentPage);
  }
}
