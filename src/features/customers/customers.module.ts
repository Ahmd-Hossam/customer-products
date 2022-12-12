import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ShardModule } from 'src/shard/shard.module';

@NgModule({
  declarations: [CustomersListComponent, AddCustomerComponent],
  imports: [CommonModule, CustomersRoutingModule, ShardModule],
})
export class CustomersModule {}
