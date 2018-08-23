import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuongMatDiaLogComponent } from './chuong-mat-dia-log.component';

describe('ChuongMatDiaLogComponent', () => {
  let component: ChuongMatDiaLogComponent;
  let fixture: ComponentFixture<ChuongMatDiaLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuongMatDiaLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuongMatDiaLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
