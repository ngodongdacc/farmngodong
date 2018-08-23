import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Chuongs} from './chuongs.model';
import { Days} from '../../days/daysService/days.model';
@Injectable({
  providedIn: 'root'
})
export class ChuongsService {
  selectedchuong = Chuongs;
  chuongs : Chuongs[];
  constructor( private http: HttpClient) { }
  readonly baseURL = 'http://localhost:4000/chuongs';

  // -- lấy chuồng trong từng dãy --
  getChuongs(days: Days){
    return this.http.get(this.baseURL+`/day/${days.tenDay}/trai/${days.tenTrai}`);
  }
 
  postChuongs(chuongs: Chuongs){ 
    return this.http.post(this.baseURL,chuongs);
  }

  // cập nhật chuồng
  putChuongs(chuongs: Chuongs){ 
    return this.http.put(this.baseURL+`/${chuongs._id}`, chuongs);
  }
  // xóa chuồng
  removeChuongs(chuongs: Chuongs){ 
    return this.http.delete(this.baseURL+`/${chuongs._id}`);
  }
}
