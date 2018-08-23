import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

// components
import { ChuongMatDiaLogComponent} from './chuong-mat-dia-log/chuong-mat-dia-log.component'

// services
import {  ChuongsService } from './chuongsService/chuongs.service';
import { EmployeeService} from '../employeeService/employee.service'


// models
import { Chuongs } from './chuongsService/chuongs.model';
import {Days} from '../days/daysService/days.model';

@Component({
  selector: 'app-chuongs',
  templateUrl: './chuongs.component.html',
  styleUrls: ['./chuongs.component.css'],
  providers: [ChuongsService],
})
export class ChuongsComponent implements OnInit {
  @Input() days : Days;
  chuongs: Chuongs[];

  selecedChuong = {
    _id: '',
    tenChuong: '',
    tenTrai: '',
    tenDay: '',
    moTa: '',
  }

  constructor( 
    private chuongsService: ChuongsService ,
    private dialog: MatDialog,
    
  ) { 
   
  }

  ngOnInit() {

   // console.log(this.days);
    this.reshere(this.days);
  }

  openDiaLog(chuong: Chuongs){ 
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.data = chuong;
    matDialogConfig.data.tenDay = this.days.tenDay;
    matDialogConfig.data.tenTrai = this.days.tenTrai;
    let dialogRef =   this.dialog.open(ChuongMatDiaLogComponent, {
      data: matDialogConfig,
      width: '30em',
    });
    dialogRef.afterClosed().subscribe( (res) => { 
      //console.log(res);
      this.addChuongs(res);
    })

  }

  // thêm và cập nhật chuồng
  addChuongs(chuong: Chuongs){
    if(chuong._id == ""){ // thêm chuồng
      this.chuongsService.postChuongs(chuong).subscribe((chuong) =>{ 
        this.reshere(this.days);
      });
    }else { // cập nhật
      this.chuongsService.putChuongs(chuong).subscribe( (res) => { 
        this.reshere(this.days);
      });
    }
  }


  // lấy chuồng trong từng dãy
  reshere(days: Days){
    this.chuongsService.getChuongs(days).subscribe( (res) => {
     // console.log(res);
      this.chuongsService.chuongs = res as Chuongs[]; 
    });
  }

  // xóa chuồng
  deleteChuong(chuongs: Chuongs){ 
    if(confirm('bạn chắc chắn muốn xóa chuồng không ?') == true)
    this.chuongsService.removeChuongs(chuongs).subscribe( (res) => { 
      this.reshere(this.days);
    })
  }

}
