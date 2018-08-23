import { Component, OnInit,Inject } from '@angular/core';
import {  MAT_DIALOG_DATA,MatDialogRef} from "@angular/material";

// model
import { Days} from "../daysService/days.model"

// service
import { DaysService} from "../daysService/days.service"
import { TraisService } from "../../trais/traisService/trais.service"

import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_name';
import { Trais } from '../../trais/traisService/trais.model';
@Component({
  selector: 'app-mat-dia-log',
  templateUrl: './mat-dia-log.component.html',
  styleUrls: ['./mat-dia-log.component.css']
})
export class MatDiaLogComponent implements OnInit {
  dayModal: Days;
  trai: Trais;
constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MatDiaLogComponent>,
    public daysService: DaysService,
    public traisService: TraisService,
   ){ 
   
  
    if(data.data._id)
    {
      this.dayModal = data.data;
      this.refreshDaysTrai( this.dayModal);
    }else{
      this.dayModal = {
        _id: '',
        tenTrai: data.data.tenTrai,
        tenDay: '',
        moTa: '',
        ghiChu: ''
      }
      this.refreshDaysTrai( this.dayModal);
    }
    
}

  ngOnInit() {
  }
  refreshTrai(){
    this.traisService.getTrais().subscribe( (res)=>{
      this.traisService.trais = res as Trais[];
    });
  }
  refreshDaysTrai(trai: any){
    this.daysService.getDayTrais(trai).subscribe( (res)=>{
      console.log(trai.tenTrai);
      this.daysService.days = res as Days[];
    });
  }

  onSubmit(form: NgForm){
    this.daysService.postDays(form.value).subscribe( (day) => { 
    })
    this.dialogRef.close(form.value);
  }
}
