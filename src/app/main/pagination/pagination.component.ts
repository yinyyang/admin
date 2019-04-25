import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  currentPage: number;
  constructor() { }

  ngOnInit() {
    this.currentPage = 1;
  }

  clickPageLink($event) {
     this.currentPage = $event.target.text;
  }

   clickNext() {
      this.currentPage = this.currentPage + 1;
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
    console.log(this.currentPage);
  }
}
