import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Options } from '../../../node_modules/@types/selenium-webdriver/chrome';
import { DatePipe } from '../../../node_modules/@angular/common';

// bootstrap
import {MatDialog,MatDialogConfig } from '@angular/material';
import { NgForm } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TraisService} from '../trais/traisService/trais.service';
import { DaysService } from '../days/daysService/days.service';
import { VatNuoisService } from '../vat-nuois/vatNuoisService/vat-nuois.service'

import { TraiMatDiaLogComponent } from './trai-mat-dia-log/trai-mat-dia-log.component';
import { MatDiaLogComponent } from '../days/mat-dia-log/mat-dia-log.component';
import { VatNuoiDiaLogComponent } from '../vat-nuois/vat-nuoi-dia-log/vat-nuoi-dia-log.component';

import { Trais} from '../trais/traisService/trais.model';
import { Days } from '../days/daysService/days.model';


@Component({
  selector: 'app-trais ',
  template: `<app-form-modal [childMessage]="parentMessage"> </app-form-modal>`,
  templateUrl: './trais.component.html',
  styleUrls: ['./trais.component.css'],
  providers: [TraisService, DaysService,VatNuoisService],
})
export class TraisComponent implements OnInit {
  
  day:Days[];

  
  constructor( 
    private traiService: TraisService,
    private dialog: MatDialog,
    private daysService: DaysService,
    private vatNuoisService: VatNuoisService,
  ){ }
 
  ngOnInit() {
    this.refreshTrai();
  }

  // thêm vật nuôi
  addVatNuois() { 
    var matDialogConfig = new MatDialogConfig();
    matDialogConfig.data  = { 
      _id: '',
      maVatNuoi: '',
      ngaySinh: '',
      ngayNhapChuong: '',
      gioiTinh: '',

      tenTrai: '',
      tenDay: '',
      tenChuong: '',

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
    let modalRef = this.dialog.open(VatNuoiDiaLogComponent, { 
      data: matDialogConfig,
      width: '60em',
    });
    // modalRef.afterClosed().subscribe( (vatnuoi) => { 
      
    //   if(vatnuoi){
    //     if(vatnuoi.gioiTinh == 'Cái'){ 
    //       vatnuoi.gioiTinh = false;
    //     }else { 
    //       vatnuoi.gioiTinh = true;
    //     }
    //     this.vatNuoisService.postvatNuois(vatnuoi).subscribe( (vatnuois)=>{
    //       this.refreshTrai();
    //     });
    //   }
    // })
  }

  // -- thêm dãy --
  addDay(trai: Trais){ 
    var matDialogConfig = new MatDialogConfig();
    var days = { 
      _id: '',
      tenDay: '',
      tenTrai: trai.tenTrai,
      moTa: '',
      ghiChu: '',
    }

    matDialogConfig.data = days;
    let dialogRef = this.dialog.open(MatDiaLogComponent, { 
      data: matDialogConfig,
      width: '30em',
    });

    // dialogRef.afterClosed().subscribe( (day) => { 
    //   this.daysService.postDays(day).subscribe( (res) =>{ 
    //     this.refreshTrai();
    //   });
    // })
  }


  // ---------- load danh sách dãy trong tưng trại ------------
  openDays(trais: Trais){
    this.daysService.getDayTrais(trais).subscribe( (res) =>{
      this.day = res as Days[];
    });
  }

  // ----------- mở dialog -----------
  openDiaLog(trai: Trais){
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
   // dialogConfig.autoFocus = true;
    dialogConfig.data = trai;
    let dialogRef = this.dialog.open(TraiMatDiaLogComponent,{
      data: dialogConfig,
      width: '30em',
     // height: '60%',
      
    });
    dialogRef.afterClosed().subscribe((result) =>{
      this.addTrai(result);
      this.refreshTrai();
    })
  }  

  // --------------- thêm và sửa Trại --------------
  addTrai(trais: Trais){
    if(trais._id =="")
    {
      this.traiService.postTrais(trais).subscribe( (res) => {
        this.refreshTrai();
      });
     
    }else{
      this.traiService.putTrais(trais).subscribe( (res) => {
        console.log(res);
        this.refreshTrai();
      });
    }
   
  }

  // lấy danh sách trại
  refreshTrai(){
    this.traiService.getTrais().subscribe( (res)=>{
      this.traiService.trais = res as Trais[];
    });
  }
  
  // xóa trại
  deleteTrai(trai: Trais){
    if(confirm('ban co muon xoa khong') == true)
    {
      this.traiService.removeTrais(trai).subscribe( (res)=> {
          console.log(res);
          this.refreshTrai();
      })
    }
    
  }
}
