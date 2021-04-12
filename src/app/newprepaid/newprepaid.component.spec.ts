import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprepaidComponent } from './newprepaid.component';

describe('NewprepaidComponent', () => {
  let component: NewprepaidComponent;
  let fixture: ComponentFixture<NewprepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewprepaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewprepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
