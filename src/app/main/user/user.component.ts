import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ViewComponent} from './view/view.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  users: any;
  constructor(private userService: UserService, private modalService: NgbModal) {
    userService.getUsers().subscribe(res => {
      console.log(res.response);
      if (res.status === 200) {
        this.users =  res.response;
      }

    });
    console.log(this.users);


  }

  ngOnInit() {

  }

  getPage(e){
    console.log('用户页面加载数据中...');
    console.log('当前页:'+e);
  }

  view(user) {
    console.log(user);
    const viewUserRef = this.modalService.open(ViewComponent);
    viewUserRef.componentInstance.user = user;
  }
}
