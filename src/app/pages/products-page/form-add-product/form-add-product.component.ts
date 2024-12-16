import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/core/models/category/category.model';
import { ProductDTO } from 'src/app/core/models/product/product.dto';
import { CategoryService } from 'src/app/core/services/category.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-form-add-product',
  templateUrl: './form-add-product.component.html',
  styleUrls: ['./form-add-product.component.scss']
})
export class FormAddProductComponent implements OnInit {
  productForm!: FormGroup;
  color: string = '#696cff';
  size: string[] = ['S', 'M', 'L', 'XL', '2XL'];
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];
  isOpenCateDropdown: boolean = false;
  categorySelected: Category = new Category();
  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private productSrv: ProductService,
    private categorySrv: CategoryService,
    private toastr: ToastrService
  ) {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      price: [100000, [Validators.required, Validators.min(0)]],
      categoryId: [0, Validators.required],
      variants: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.addVariant();
    this.fetchCategory();
  }

  fetchCategory(): void {
    this.categorySrv.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
    });
  }

  selectCategory(category: Category): void {
    this.categorySelected = category;
    this.isOpenCateDropdown = false;
    this.productForm.get('categoryId')?.setValue(category.categoryId);
  }

  onFileSelected(event: Event, variantIndex: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      Array.from(input.files).forEach((file) => {
        this.selectedFiles.push(file);

        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target?.result) {
            // this.imagePreviews.push(e.target.result as string);
            (this.variants.at(variantIndex).get('photo') as FormArray).push(this.fb.control(e.target.result as string));
          }
        };
        reader.readAsDataURL(file);
      });
    }
  }

  fetchProducts(): void {
    // this.productSrv
  }

  addNewProduct(): void {
    if (this.productForm.valid) {
      const productDTO = new ProductDTO();
      productDTO.categoryId = this.productForm.get('categoryId')?.value;
      productDTO.description = this.productForm.get('description')?.value;
      productDTO.price = this.productForm.get('price')?.value;
      productDTO.productName = this.productForm.get('productName')?.value;
      productDTO.variants = this.productForm.get('variants')?.value;

      this.productSrv.createProduct(productDTO).subscribe({
        next: (res: any) => {
          this.toastr.success('The product has been created successfully!', 'Success');
          console.log(res);
        }
      });
    }
  }

  get variants(): FormArray {
    return this.productForm.get('variants') as FormArray;
  }

  addVariant(): void {
    const variantGroup = this.fb.group({
      variantColor: ['', Validators.required],
      variantHex: ['#696cff'],
      listSize: this.fb.array([100, 100, 100, 100, 100], Validators.required),
      photo: this.fb.array([])
    });

    this.variants.push(variantGroup);
  }

  removeVariant(index: number): void {
    this.variants.removeAt(index);
  }

  getVariantImage(variantIndex: number): string[] {
    return this.variants.at(variantIndex).get('photo')?.value;
  }

  getListSize(variantIndex: number): FormArray {
    return this.variants.at(variantIndex).get('listSize') as FormArray;
  }

  getVariantHex(variantIndex: number): string {
    return this.variants.at(variantIndex).get('variantHex')?.value;
  }

  getVariantColor(variantIndex: number): string {
    return this.variants.at(variantIndex).get('variantColor')?.value;
  }

  setVariantHex(variantIndex: number, color: string) {
    this.variants.at(variantIndex).get('variantHex')?.setValue(color);
  }

  addSizeToVariant(variantIndex: number): void {
    const listSizeArray = this.getListSize(variantIndex);
    listSizeArray.push(this.fb.control(0, Validators.required));
  }

  removeSizeFromVariant(variantIndex: number, sizeIndex: number): void {
    const listSizeArray = this.getListSize(variantIndex);
    listSizeArray.removeAt(sizeIndex);
  }

  removeVariantImage(variantIndex: number, photoIndex: number) {
    const listPhoto = this.variants.at(variantIndex).get('photo') as FormArray;
    listPhoto.removeAt(photoIndex);
  }
}

