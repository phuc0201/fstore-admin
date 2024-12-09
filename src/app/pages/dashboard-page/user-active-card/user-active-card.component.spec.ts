import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActiveCardComponent } from './user-active-card.component';

describe('UserActiveCardComponent', () => {
  let component: UserActiveCardComponent;
  let fixture: ComponentFixture<UserActiveCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserActiveCardComponent]
    });
    fixture = TestBed.createComponent(UserActiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
