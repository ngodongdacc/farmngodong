import { Injectable, EventEmitter,OnDestroy ,OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Subject,BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';

import { Trais } from './trais.model'

//import {} from '../../days/daysService/days.service'

@Injectable({
  providedIn: 'root'
})
export class TraisService {
  dataStr = new EventEmitter();
  seclectedTrais = Trais;
  trais: Trais[];
  trai:  Trais;
  traii: {
    _id: '',
    tenTrai: '',
    moTa: '',
    ghiChu: ''
  }
  subject: Subject<any> = new Subject<any>();
  observable: Observable<any> = this.subject.asObservable();



  readonly  baseURL ='http://localhost:4000/trais';

  constructor( private http: HttpClient ) { }

  
  sendMessage(data: object) {
     this.subject.next({ text: data });
  }
  getMessage(): Observable<object> {
    console.log(this.subject.asObservable());
    return this.subject.asObservable();
   
}


  getTrais(){
    return this.http.get(this.baseURL);
  }

  postTrais(trai: Trais){
    return this.http.post(this.baseURL, trai);
  }
  putTrais(trai: Trais){
    return this.http.put(this.baseURL+`/${trai._id}`, trai);
  }
  removeTrais(trai: Trais){
    return this.http.delete(this.baseURL+`/${trai._id}`);
  }
}
