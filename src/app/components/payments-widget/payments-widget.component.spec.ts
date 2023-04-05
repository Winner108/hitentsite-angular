import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsWidgetComponent } from './payments-widget.component';

describe('PaymentsWidgetComponent', () => {
  let component: PaymentsWidgetComponent;
  let fixture: ComponentFixture<PaymentsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
