import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloanComponent } from './ploan.component';

describe('PloanComponent', () => {
  let component: PloanComponent;
  let fixture: ComponentFixture<PloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
