import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewCategoryComponent } from './form-new-category.component';

describe('FormNewCategoryComponent', () => {
  let component: FormNewCategoryComponent;
  let fixture: ComponentFixture<FormNewCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNewCategoryComponent]
    });
    fixture = TestBed.createComponent(FormNewCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
