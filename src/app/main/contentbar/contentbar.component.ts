import { Component, OnInit } from '@angular/core';
import {ContentbarService} from "../sidebar/contentbar.service";

@Component({
  selector: 'app-contentbar',
  templateUrl: './contentbar.component.html',
  styleUrls: ['./contentbar.component.css']
})
export class ContentbarComponent implements OnInit {

   title:String;
   url:String;
  constructor(private contentbarService: ContentbarService) {
  }

  ngOnInit() {
    this.contentbarService.getMessage().subscribe((message: any) =>{

        console.log(message);
      console.log("contentbar");
      this.title=message.name;
      this.url=message.url;
    });
  }



}
