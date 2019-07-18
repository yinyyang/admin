import { Injectable } from '@angular/core';
import {ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContentbarService {

  private _sendMessage: ReplaySubject<any> = new ReplaySubject<any>(1);
  constructor() { }

  getMessage(): ReplaySubject<any> {
    return this._sendMessage;
  }

    sendMessage(value: any){
    this._sendMessage.next(value)
  }
}
