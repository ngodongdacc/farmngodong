import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogConfig } from '@angular/material';

// service
import { TraisService } from '../../trais/traisService/trais.service';
import { Trais } from '../../trais/traisService/trais.model';

// component
import { TraiMatDiaLogComponent} from '../../trais/trai-mat-dia-log/trai-mat-dia-log.component';


@Component({
  selector: 'app-vat-nuoi-dia-log',
  templateUrl: './vat-nuoi-dia-log.component.html',
  styleUrls: ['./vat-nuoi-dia-log.component.css']
})
export class VatNuoiDiaLogComponent implements OnInit {

  vatNuoiModal: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<VatNuoiDiaLogComponent>,
    private traisService: TraisService,
    private dialog: MatDialog,
  ) { 
    this.vatNuoiModal = data.data;
    this.refreshtrai();
  }

  ngOnInit() {
  }

  openDiaLog(){ 
    var trai = { 
      _id : '',
      tenTrai: '',
      moTa: '',
      ghiChu: '',
    }
    this.dialog.open(TraiMatDiaLogComponent, { 
      data: trai,
      width: '30em',
    });
  }

  refreshtrai() { 
    this.traisService.getTrais().subscribe((res) => { 
      this.traisService.trais = res as Trais[]; 
    })
  } 

  onSubmit(form: NgForm){ 
    this.matDialogRef.close(form.value);
  }
}
