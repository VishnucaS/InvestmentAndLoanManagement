import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPloanComponent } from './register-ploan.component';

describe('RegisterPloanComponent', () => {
  let component: RegisterPloanComponent;
  let fixture: ComponentFixture<RegisterPloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
