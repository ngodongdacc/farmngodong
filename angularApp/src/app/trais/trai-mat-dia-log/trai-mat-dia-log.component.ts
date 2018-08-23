import { Component, OnInit,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  MAT_DIALOG_DATA,MatDialogRef} from "@angular/material";

import { TraisService } from '../traisService/trais.service';

import { Trais} from '../traisService/trais.model'

@Component({
  selector: 'app-trai-mat-dia-log',
  templateUrl: './trai-mat-dia-log.component.html',
  styleUrls: ['./trai-mat-dia-log.component.css']
})
export class TraiMatDiaLogComponent implements OnInit {
  traiModal: object;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TraiMatDiaLogComponent>,
    private traisService: TraisService,
   ) {  
    this.refreshTrai();
     if(data.data){
      this.traiModal = data.data;
     // console.log(this.traiModal);
     }else{
       this.traiModal = {
         _id : '',
         tenTrai: '',
         moTa: '',
         ghichu: '',
       }
     }
    
  }

  ngOnInit() {
  }

  refreshTrai(){
    this.traisService.getTrais().subscribe( (res)=>{
      this.traisService.trais = res as Trais[];
    });
  }
 

  onSubmit(form: NgForm){
    if(form.value._id){ 
      this.traisService.putTrais(form.value).subscribe( (res)=>{ 
        this.refreshTrai();
      })
    }else{ 
      this.traisService.postTrais(form.value).subscribe( (res)=>{ 
        this.refreshTrai();
      })
    }
    
    this.dialogRef.close(form.value);
  }
}
