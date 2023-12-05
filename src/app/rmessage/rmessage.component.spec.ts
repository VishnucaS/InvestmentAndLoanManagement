import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmessageComponent } from './rmessage.component';

describe('RmessageComponent', () => {
  let component: RmessageComponent;
  let fixture: ComponentFixture<RmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
