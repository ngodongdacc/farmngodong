import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatNuoiDiaLogComponent } from './vat-nuoi-dia-log.component';

describe('VatNuoiDiaLogComponent', () => {
  let component: VatNuoiDiaLogComponent;
  let fixture: ComponentFixture<VatNuoiDiaLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatNuoiDiaLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatNuoiDiaLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
