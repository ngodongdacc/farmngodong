import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuongsComponent } from './chuongs.component';

describe('ChuongsComponent', () => {
  let component: ChuongsComponent;
  let fixture: ComponentFixture<ChuongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
