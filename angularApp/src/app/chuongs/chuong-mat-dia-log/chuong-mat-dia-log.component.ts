import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { NgForm} from '@angular/forms'

import { ChuongsService} from '../chuongsService/chuongs.service'
@Component({
  selector: 'app-chuong-mat-dia-log',
  templateUrl: './chuong-mat-dia-log.component.html',
  styleUrls: ['./chuong-mat-dia-log.component.css']
})
export class ChuongMatDiaLogComponent implements OnInit {

  chuongModal: any;

  
  constructor(
    @Inject (MAT_DIALOG_DATA) public data : any,
    public chuongsService: ChuongsService,
    public dialogRef: MatDialogRef<ChuongMatDiaLogComponent>
  ) { }

  ngOnInit() {
    this.chuongModal =this.data.data;
  }

  onSubmit(form: NgForm){
    this.dialogRef.close(form.value);
  }

}
