import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinvestComponent } from './getinvest.component';

describe('GetinvestComponent', () => {
  let component: GetinvestComponent;
  let fixture: ComponentFixture<GetinvestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetinvestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
