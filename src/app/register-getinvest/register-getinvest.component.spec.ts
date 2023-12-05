import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGetinvestComponent } from './register-getinvest.component';

describe('RegisterGetinvestComponent', () => {
  let component: RegisterGetinvestComponent;
  let fixture: ComponentFixture<RegisterGetinvestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterGetinvestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGetinvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
