import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraisComponent } from './trais.component';

describe('TraisComponent', () => {
  let component: TraisComponent;
  let fixture: ComponentFixture<TraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
