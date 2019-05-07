import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() user: any;
  constructor() { }

  ngOnInit() {
  }

}
