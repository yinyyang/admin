import { Component, OnInit , Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

    id: any;
    user:any
    isEdit: boolean = false;
  constructor(private  activateRoute : ActivatedRoute) {
    activateRoute.params.subscribe(
      params=>{
        console.log(params);
        this.id = params.id;

      }

    )

  }

  ngOnInit() {
  }

  edit() {
  this.isEdit = true;
  }

  modify(){
    this.isEdit =false;
  }
}
