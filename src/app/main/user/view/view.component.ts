import { Component, OnInit , Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

    id: any;
    user:any
    isEdit: boolean = false;
  constructor(private  activateRoute : ActivatedRoute, private userService:UserService) {
    activateRoute.params.subscribe(
      params=>{
        console.log(params);
        userService.getOneUser(params.id).subscribe(res => {
          console.log(res.response);
          if (res.status === 200) {
            this.user =  res.response;
          }

        });


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
