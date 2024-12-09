import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVisitorCardComponent } from './new-visitor-card.component';

describe('NewVisitorCardComponent', () => {
  let component: NewVisitorCardComponent;
  let fixture: ComponentFixture<NewVisitorCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewVisitorCardComponent]
    });
    fixture = TestBed.createComponent(NewVisitorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
