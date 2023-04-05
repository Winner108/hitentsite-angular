import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticInnerContentComponent } from './static-inner-content.component';

describe('StaticInnerContentComponent', () => {
  let component: StaticInnerContentComponent;
  let fixture: ComponentFixture<StaticInnerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticInnerContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticInnerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
