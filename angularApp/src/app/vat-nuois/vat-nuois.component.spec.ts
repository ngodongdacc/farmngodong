import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatNuoisComponent } from './vat-nuois.component';

describe('VatNuoisComponent', () => {
  let component: VatNuoisComponent;
  let fixture: ComponentFixture<VatNuoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatNuoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatNuoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
