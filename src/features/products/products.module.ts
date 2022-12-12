import { ShardModule } from './../../shard/shard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [ProductsListComponent, AddProductComponent, ProductDetailsComponent],
  imports: [CommonModule, ProductsRoutingModule, ShardModule],
})
export class ProductsModule {}
