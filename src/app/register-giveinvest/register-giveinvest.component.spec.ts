import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGiveinvestComponent } from './register-giveinvest.component';

describe('RegisterGiveinvestComponent', () => {
  let component: RegisterGiveinvestComponent;
  let fixture: ComponentFixture<RegisterGiveinvestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterGiveinvestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGiveinvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
