import { Component, OnInit } from '@angular/core';
import {ContentbarService} from "../sidebar/contentbar.service";

@Component({
  selector: 'app-contentbar',
  templateUrl: './contentbar.component.html',
  styleUrls: ['./contentbar.component.css']
})
export class ContentbarComponent implements OnInit {

   title:String;
   sub_title:String;
   url:String;
  constructor(private contentbarService: ContentbarService) {
  }

  ngOnInit() {
    this.contentbarService.getMessage().subscribe((message: any) => {
      if (message.title != undefined) {
        this.title = message.title;
      }
      this.sub_title = message.sub_title;
      this.url = message.url;

    });
  }



}
