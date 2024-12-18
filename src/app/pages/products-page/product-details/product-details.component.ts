import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/core/models/category/category.model';
import { ProductDTO } from 'src/app/core/models/product/product.dto';
import { Product } from 'src/app/core/models/product/product.model';
import { CategoryService } from 'src/app/core/services/category.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  urlSlug: string | null = '';
  productForm!: FormGroup;
  color: string = '#696cff';
  size: string[] = ['S', 'M', 'L', 'XL', '2XL'];
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];
  isOpenCateDropdown: boolean = false;
  categorySelected: Category = new Category();
  categories: Category[] = [];
  productId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private productSrv: ProductService,
    private fb: FormBuilder,
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
    this.route.paramMap.subscribe(params => {
      this.urlSlug = params.get('urlSlug');
      const urlItems = this.urlSlug?.split('-');
      if (urlItems) {
        const productId = Number(urlItems[urlItems?.length - 1]);
        this.productId = productId;

        this.fetchProductDetails(productId);
      }
    });
    this.fetchCategory();
  }

  updateImage(): void {
    const files = this.variants.at(0).get('photoFiles')?.value;
    if (!files || files.length === 0) {
      console.error('No files selected');
      return;
    }
    const formData = new FormData();
    files.forEach((file: any) => {
      formData.append('files', file);
    });

    this.variants.value.map((item: any) => {
      this.productSrv.updatePhoto(item.variantId, formData).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: () => {
          this.toastr.error('Update failed', 'Success');
        },
        complete: () => {
          this.toastr.success('Update successfully', 'Success');
          this.fetchProductDetails(this.productId);
        }
      });
    });
  }

  fetchProductDetails(id: number): void {
    this.productSrv.getProduct(id).subscribe({
      next: (res: Product) => {
        this.productForm.get('productName')?.setValue(res.productName);
        this.productForm.get('price')?.setValue(res.price);
        this.productForm.get('description')?.setValue(res.description);
        this.productForm.get('categoryId')?.setValue(res.category.categoryId);
        this.categorySelected = res.category;
        res.variants.map(item => {
          console.log(item);

          const variantGroup = this.fb.group({
            variantId: [item.variantId],
            variantColor: [item.variantColor, Validators.required],
            variantHex: [item.variantHex],
            listSize: this.fb.array([item.sizeStockQuantity.s, item.sizeStockQuantity.l, item.sizeStockQuantity.m, item.sizeStockQuantity.xl, item.sizeStockQuantity.xl], Validators.required),
            photos: this.fb.array(item.photos ?? []),
            photoFiles: this.fb.array([])
          });
          // console.log(variantGroup.value);

          this.variants.push(variantGroup);
        });
      }
    });
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
        // this.selectedFiles.push(file);
        (this.variants.at(variantIndex).get('photoFiles') as FormArray).push(this.fb.control(file));
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target?.result) {
            // (this.variants.at(variantIndex).get('photos') as FormArray).push({
            //   imgUrl: this.fb.control(e.target.result as string),
            //   photoId: 0,
            //   position: 0,
            // });
            (this.variants.at(variantIndex).get('photos') as FormArray).push(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      });
    }
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
      photos: this.fb.array([]),
      photoFiles: this.fb.array([])
    });

    this.variants.push(variantGroup);
  }

  removeVariant(index: number): void {
    this.variants.removeAt(index);
  }

  getVariantImage(variantIndex: number): string[] {
    return this.variants.at(variantIndex).get('photos')?.value;
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
    const listPhoto = this.variants.at(variantIndex).get('photos') as FormArray;
    const listPhotoFile = this.variants.at(variantIndex).get('photoFiles') as FormArray;
    listPhotoFile.removeAt(photoIndex);
    listPhoto.removeAt(photoIndex);
  }
}
