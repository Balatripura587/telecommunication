import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaybillsComponent } from './paybills.component';

describe('PaybillsComponent', () => {
  let component: PaybillsComponent;
  let fixture: ComponentFixture<PaybillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaybillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaybillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
