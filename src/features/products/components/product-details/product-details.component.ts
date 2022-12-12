import { Product } from './../../interfaces/product';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  productData: Product;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
    this.productData = data;
  }
}
