import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.build();
  }

  build() {
    this.productForm = this.fb.group({
      code: [null],
      arName: [null],
      enName: [null],
    });
  }

  onSubmit() {
    let dataToSend = this.productForm.value;
    this.productsService.addProduct(dataToSend);
  }
}
