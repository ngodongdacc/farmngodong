import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiMatDiaLogComponent } from './trai-mat-dia-log.component';

describe('TraiMatDiaLogComponent', () => {
  let component: TraiMatDiaLogComponent;
  let fixture: ComponentFixture<TraiMatDiaLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraiMatDiaLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiMatDiaLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
