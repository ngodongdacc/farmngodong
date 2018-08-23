import { Component, OnInit , Input} from '@angular/core';
import { VatNuoisService } from '../service/vatNuoisService/vat-nuois.service';

import { MatDialog,MatDialogConfig} from '@angular/material';

import { VatNuoiDiaLogComponent } from './vat-nuoi-dia-log/vat-nuoi-dia-log.component'

import { Vatnuois } from '../service/vatNuoisService/vatnuois.model';
import { Chuongs } from '../chuongs/chuongsService/chuongs.model'
import { ChuongsService } from '../chuongs/chuongsService/chuongs.service';

@Component({
  selector: 'app-vat-nuois',
  templateUrl: './vat-nuois.component.html',
  styleUrls: ['./vat-nuois.component.css'],
  providers: [VatNuoisService],
})
export class VatNuoisComponent implements OnInit {
 @Input() chuongs: Chuongs;
 //vatNuois: Vatnuois[];
  

//   chuong = {
//     _id: "",
//     tenChuong: "chuồng 5",
//     tenDay: "dãy 1",
//     moTa: "",
//     tenTrai: "Trại 1",
    
// }
  constructor(
    private vatNuoisService: VatNuoisService,
    private diaLog: MatDialog,
  ) { }

  ngOnInit() {
    //this.refreshVatNuois();
    this.refreshVC(this.chuongs);
  }

  // open Dialog thêm vật nuôi
  openDiaLog(chuongs: Chuongs){ 
    var matDialogConfig = new MatDialogConfig();
    matDialogConfig.data  = { 
      _id: '',
      maVatNuoi: '',
      ngaySinh: '',
      ngayNhapChuong: '',
      gioiTinh: '',

      tenTrai: chuongs.tenTrai,
      tenDay: chuongs.tenDay,
      tenChuong: chuongs.tenChuong,

      phamGiong: '',
      loai: '',
      sucKhoe: '',
      ghiChu: '',

      //update
      me: '',
      tinhCha: '',
      giaMua: '',
      xuatXu: '',
  
    };
    let modalRef = this.diaLog.open(VatNuoiDiaLogComponent, { 
      data: matDialogConfig,
      width: '60em',
    });
    modalRef.afterClosed().subscribe( (vatnuoi) => { 
      if(vatnuoi){
        if(vatnuoi.gioiTinh == 'Cái'){ 
          vatnuoi.gioiTinh = false;
        }else { 
          vatnuoi.gioiTinh = true;
        }
        this.addVatNuois(vatnuoi);
      }
     
    })

  }
  // lấy dữ liệu trong từng chuông
  refreshVC(chuong: any){ 
    this.vatNuoisService.getVNChuong(chuong).subscribe( (res) => { 
      this.vatNuoisService.vatNuois = res as Vatnuois[];
    })
  }

  // lấy dữ liệu tất cả vật nuôi
  refreshVatNuois(){
    this.vatNuoisService.getVatNuois().subscribe( (res) =>{ 
    this.vatNuoisService.vatNuois = res as Vatnuois[];
  });
  }

  // thêm vật nuôi
  addVatNuois(vatnuois: Vatnuois){ 
    this.vatNuoisService.postvatNuois(vatnuois).subscribe( (vatnuoi) => { 
      this.refreshVC(this.chuongs);
    })
  }

  // xóa 1 vật nuôi
  removeVatNuoi(vatnuois: Vatnuois){
    if(confirm('bạn có chắc chắn muốn xóa vật nuôi không ??') == true)
    this.vatNuoisService.deleteVatNuois(vatnuois).subscribe( (vatnuoi) => { 
      this.refreshVC(this.chuongs);
    });
  }

}
