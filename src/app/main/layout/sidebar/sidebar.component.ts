import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ContentbarService} from "./contentbar.service";
import {SidebarService} from "./sidebar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   menuList:any;
   selected:any;
  constructor(private contentbarService:ContentbarService,private sidebarService:SidebarService) {
    sidebarService.getMenu().subscribe(res => {
      console.log(res.response);
      if (res.status === 200) {
        this.menuList = res.response;
      }

    });
  }
  ngOnInit() {
  }

  select(item){
    this.selected = (this.selected === item ? null : item);
  }
  isActive(item){
    return this.selected === item;
  }

  //first level title
  setContentbarTitleLeve_1(item){
      let message={title:item.name};
    this.contentbarService.sendMessage(message);
  }
//second level title
  setContentbarTitleLeve_2(item){
    if(window.innerWidth<900) {
      this.selected = (this.selected === item ? null : item);
    }
    let message={sub_title:item.name,url:item.url};
   this.contentbarService.sendMessage(message);
  }
}
