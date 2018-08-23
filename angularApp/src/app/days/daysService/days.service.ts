import { Injectable } from '@angular/core';

import { Days } from './days.model';
import { Chuongs } from '../../chuongs/chuongsService/chuongs.model'

import { Trais } from '../../trais/traisService/trais.model';
//import { Trais } from '../../trais/traisService/trais.model';
import { HttpClient } from '@angular/common/http';
import { observable} from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DaysService {
  selectedDay = Days;
  days : Days[];
  day = {
    _id: '',
    tenTrai: "",
    tenDay: '',
    moTa: '',
    ghiChu: ''
  }

  readonly baseURL = 'http://localhost:4000/days';
  constructor( private http: HttpClient ) { }
  
  getDayTrais(trais: any){
    return this.http.get(this.baseURL+`/trais/${trais.tenTrai}`);
  } 


  getDays(){
    return this.http.get(this.baseURL);
  } 

  postChuong(chuongs: Chuongs){ 
    this.http.post(this.baseURL,chuongs);
  }

  postDays(days: Days){
    return this.http.post(this.baseURL+`/${days.tenTrai}`,days);
  }

  putDays(days: Days){
    return this.http.put(this.baseURL+`/${days._id}`,days)
  }
  deleteDay(days: Days){
    return this.http.delete(this.baseURL+`/${days._id}`)
  }

}
