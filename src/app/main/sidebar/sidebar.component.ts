import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ContentbarService} from "./contentbar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   menuList:any;
   selected:any;
   @Output()
   menuTitle: EventEmitter<any> = new EventEmitter();
  constructor(private contentbarService:ContentbarService) {
    this.menuList = [
      {
        "name": "DashBoard",
        "subMenu": [{"name":"User Management","url":"/main/user"},{"name":"Role Management","url":"/main/role"}]
      },
      {
        "name": "Javascript",
        "subMenu": ["Jquery", "Ajax"]
      },
      {
        "name": "Bootstrap",
        "subMenu": ["BootStrap 2", "BootStrap 3"]
      }
     ]

  }

  ngOnInit() {
  }

  select(item){

    this.selected = (this.selected === item ? null : item);
  }
  isActive(item){

    return this.selected === item;
  }

  setContentbarTitle(item){
    console.log(item);
   this.contentbarService.sendMessage(item);
  }
}
