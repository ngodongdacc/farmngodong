import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MaterialModule } from '@angular/material';
// { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// ---- module ---
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes} from '@angular/router';
import { MatCardModule, MatDialogModule, MatToolbarModule, MatIconModule } from '@angular/material';

// ---- service ------
import { TraisService} from './trais/traisService/trais.service';
import { DaysService} from './days/daysService/days.service';
//import { VatNuoisService} from './vatNuoisService/vat-nuois.service';
// ---- bootstrap ------
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//----- component ----
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { TraisComponent } from './trais/trais.component';
import { DaysComponent } from './days/days.component';
import { MatDiaLogComponent } from './days/mat-dia-log/mat-dia-log.component';
import { TraiMatDiaLogComponent } from './trais/trai-mat-dia-log/trai-mat-dia-log.component';
import { ChuongsComponent } from './chuongs/chuongs.component';
import { ChuongMatDiaLogComponent } from './chuongs/chuong-mat-dia-log/chuong-mat-dia-log.component';
import { VatNuoisComponent } from './vat-nuois/vat-nuois.component';
import { VatNuoiDiaLogComponent } from './vat-nuois/vat-nuoi-dia-log/vat-nuoi-dia-log.component'; 

const routes: Routes =[
  {
    path: 'employee', component: EmployeeComponent
  }
]

@NgModule({
  declarations: [
   AppComponent,
   EmployeeComponent,
   TraisComponent,
   DaysComponent,
   MatDiaLogComponent,
   TraiMatDiaLogComponent,
   ChuongsComponent,
   ChuongMatDiaLogComponent,
   VatNuoisComponent,
   VatNuoiDiaLogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  //  BsDropdownModule.forRoot(),
    NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    MatDialogModule,
    
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule
//MaterialModule
   
  ],
  providers: [TraisService],
  bootstrap: [AppComponent],
  entryComponents: [
   MatDiaLogComponent,
   TraiMatDiaLogComponent,
   ChuongMatDiaLogComponent,
   VatNuoiDiaLogComponent
  ]
})
export class AppModule { 
 
}
