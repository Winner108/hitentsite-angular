import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticContentModalComponent } from './static-content-modal.component';

describe('StaticContentModalComponent', () => {
  let component: StaticContentModalComponent;
  let fixture: ComponentFixture<StaticContentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticContentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticContentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
