import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Category, CategoryDTO } from 'src/app/core/models/category/category.model';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-form-new-category',
  templateUrl: './form-new-category.component.html',
  styleUrls: ['./form-new-category.component.scss']
})
export class FormNewCategoryComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() isOpenChange = new EventEmitter();
  @Output() isAddCateSuccess = new EventEmitter<boolean>(false);

  isOpenCateDropdown: boolean = false;
  cateForm!: FormGroup;
  categories: Category[] = [];
  parentCateSelected = new Category();
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.fetchCategory();
  }

  initForm(): void {
    this.cateForm = this.fb.group({
      categoryName: ['', Validators.required],
    });
  }

  closeDrawer(): void {
    this.isOpen = false;
    this.isOpenChange.emit(false);
    this.isAddCateSuccess.emit(false);
  }

  selectCategoryParent(parent: Category): void {
    this.parentCateSelected = parent;
    this.isOpenCateDropdown = !this.isOpenCateDropdown;
  }

  fetchCategory(): void {
    this.categoryService.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
    });
  }

  addCategory(): void {
    if (this.cateForm.valid) {
      const cateDTO: CategoryDTO = {
        categoryName: this.cateForm.get('categoryName')?.value,
        parent: this.parentCateSelected.categoryId !== 0 ? this.parentCateSelected.categoryId : null,
      };

      this.categoryService.createCategory(cateDTO).subscribe({
        next: (res: any) => {
          if (res.categoryId) {
            this.toastr.success('The category has been created successfully!', 'Success');
            console.log(res);
          }
        },
        complete: () => {
          this.isAddCateSuccess.emit(true);
          this.fetchCategory();
        }
      });
    }
  }
}
