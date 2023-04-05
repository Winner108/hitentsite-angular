import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusActivitiesComponent } from './bonus-activities.component';

describe('BonusActivitiesComponent', () => {
  let component: BonusActivitiesComponent;
  let fixture: ComponentFixture<BonusActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
