import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSloanComponent } from './register-sloan.component';

describe('RegisterSloanComponent', () => {
  let component: RegisterSloanComponent;
  let fixture: ComponentFixture<RegisterSloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
