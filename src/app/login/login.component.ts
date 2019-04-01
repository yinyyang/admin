import {Component, OnInit, ViewChild} from '@angular/core';
import {ajax} from 'rxjs/ajax';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // isValid: boolean;
   loginForm: FormGroup;

  model: any = {};


  constructor() {

  }

  ngOnInit() {
    // this.isValid = true;
  }


  doSubmit() {
    // this.isValid = false;
    console.log(this.model.username == null);
  }


  doRemember() {
    console.log(this.model.remember);
  }
}
