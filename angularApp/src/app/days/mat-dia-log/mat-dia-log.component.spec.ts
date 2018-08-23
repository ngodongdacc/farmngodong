import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDiaLogComponent } from './mat-dia-log.component';

describe('MatDiaLogComponent', () => {
  let component: MatDiaLogComponent;
  let fixture: ComponentFixture<MatDiaLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDiaLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDiaLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
