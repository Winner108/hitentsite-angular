import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAndAccountDetailComponent } from './personal-and-account-detail.component';

describe('PersonalAndAccountDetailComponent', () => {
  let component: PersonalAndAccountDetailComponent;
  let fixture: ComponentFixture<PersonalAndAccountDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalAndAccountDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAndAccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
