import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpostpaidComponent } from './newpostpaid.component';

describe('NewpostpaidComponent', () => {
  let component: NewpostpaidComponent;
  let fixture: ComponentFixture<NewpostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpostpaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
