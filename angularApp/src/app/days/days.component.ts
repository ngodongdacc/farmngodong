import { Component, OnInit,Input } from '@angular/core';
import {MatDialog,MatDialogConfig } from '@angular/material';

// service
import { Services } from '../../../node_modules/@angular/core/src/view';
import { DaysService } from './daysService/days.service';
import { ChuongsService } from '../chuongs/chuongsService/chuongs.service'

//component
import {MatDiaLogComponent} from './mat-dia-log/mat-dia-log.component';
import { ChuongMatDiaLogComponent } from '../chuongs/chuong-mat-dia-log/chuong-mat-dia-log.component';
import {ChuongsComponent } from '../chuongs/chuongs.component';
// model
import { Trais } from '../trais/traisService/trais.model';
import { Days } from './daysService/days.model';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css'],
  providers: [DaysService]
})
export class DaysComponent implements OnInit {
  @Input() trais: Trais;
  //trai = new Trais{;
  trai =  { 
    _id: '',
    tenTrai: 'Trại 1',
    ghichu:'',
    moTa: ""
  }
  constructor(
    private daysService : DaysService,
    private dialog : MatDialog,
    private chuongsService: ChuongsService,
  //  private chuongsComponent: ChuongsComponent
  ) { }

  ngOnInit() {
   // console.log(this.trais);
    this.refreshDaysTrai(this.trais);
  }
 
  // mở dialog thêm chuồng
  openDiaLogChuong(days: Days){ 
    const dialogConfig = new MatDialogConfig();
    var chuong =  { 
      _id: '',
      tenChuong: '',
      moTa: '',
      tenTrai: days.tenTrai,
      tenDay: days.tenDay
    }
    dialogConfig.data = chuong;
    let dialogRef = this.dialog.open(ChuongMatDiaLogComponent, { 
      data: dialogConfig,
      width: '30em',
    });

    dialogRef.afterClosed().subscribe( (chuong) => { 
     // console.log(chuong);
      this.daysService.postChuong(chuong);
      console.log(chuong);
    })
  }
 
  // mở dialog của dãy
  openDiaLog(day: Days){
    const dialogConfig = new MatDialogConfig();
 
    //  dialogConfig.disableClose = true;
   // dialogConfig.autoFocus = true;

    dialogConfig.data = day;
    dialogConfig.data.tenTrai = this.trais.tenTrai;
    let dialogRef = this.dialog.open(MatDiaLogComponent,{
      data: dialogConfig,
      width: '30em',
     // height: '60%',
      
    });
   
    dialogRef.afterClosed().subscribe((result) =>{
      this.refreshDaysTrai(this.trais);
    })
  }

  refreshDaysTrai(trai: Trais){
    this.daysService.getDayTrais(trai).subscribe( (res)=>{
      this.daysService.days = res as Days[];
    });
  }

  refreshDays(){
    this.daysService.getDays().subscribe( (res) => {
      this.daysService.days = res as Days[];
    })
  }

  // thêm dãy vào trại mặc định

  // thêm dãy
  addDays(days :Days){
    if(days._id =="") { 
      this.daysService.postDays(days).subscribe( (result) =>{
        this.refreshDaysTrai(this.trais);
      })
    }else{ 
      // cập nhật dãy
      this.daysService.putDays(days).subscribe((result) =>{
        this.refreshDaysTrai(this.trais);
      })
    }
   
  }

  
  

  removeDays(days: Days){
    if(confirm('Bạn có chắc chắn muốn xóa không ?') == true)
    {
    this.daysService.deleteDay(days).subscribe( (res) =>{
      this.refreshDaysTrai(this.trais);
    });
    }
  }
  
}
