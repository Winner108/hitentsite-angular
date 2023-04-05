import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitSettingsComponent } from './limit-settings.component';

describe('LimitSettingsComponent', () => {
  let component: LimitSettingsComponent;
  let fixture: ComponentFixture<LimitSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
