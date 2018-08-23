import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Vatnuois} from './vatnuois.model';
import { Chuongs } from '../../chuongs/chuongsService/chuongs.model'

@Injectable({
  providedIn: 'root'
})
export class VatNuoisService {

  selecedVatNuoi = Vatnuois;
  vatNuois: Vatnuois[];
  constructor(
    private http: HttpClient
  ) { }
  readonly  baseURL = 'http://localhost:4000/vatnuois';

  //lấy vật nuôi trong từng chuồng
  getVNChuong(chuongs: Chuongs){ 
    return this.http.get(this.baseURL+`/${chuongs.tenTrai}/${chuongs.tenDay}/${chuongs.tenChuong}`);
  }

  // lấy toàn bộ vật nuôi
  getVatNuois(){
    return this.http.get(this.baseURL);
  }
  // thêm vật nuôi
  postvatNuois(vatnuois: Vatnuois) { 
    return this.http.post(this.baseURL, vatnuois);
  } 

  // xóa 1 vật nuôi 
  deleteVatNuois(vatnuois: Vatnuois){ 
    return this.http.delete(this.baseURL+`/${vatnuois._id}`);
  }
}
