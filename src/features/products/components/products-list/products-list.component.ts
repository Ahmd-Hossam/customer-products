import { Product } from './../../interfaces/product';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ['code', 'arName', 'enName', 'action'];
  products: Product[] = [];
  constructor(
    private productService: ProductsService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }
  addNewProduct() {
    this.dialog.open(AddProductComponent, {
      width: '600px',
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  //view details
  viewDetails(item: Product) {
    this.dialog.open(ProductDetailsComponent, { data: item, width: '500px' });
  }
}
