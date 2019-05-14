import { Component, OnInit , Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() user: any;
  constructor(private modal: NgbActiveModal) { }

  ngOnInit() {
  }

}
