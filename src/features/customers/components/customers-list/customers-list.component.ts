import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../interfaces/Customer.interface';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
})
export class CustomersListComponent implements OnInit {
  displayedColumns: string[] = ['arName', 'enName', 'action'];
  products: Customer[] = [];
  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }
  addNewProduct() {
    this.dialog.open(AddCustomerComponent, {
      width: '600px',
    });
  }

  getProducts() {
    this.customerService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  //view details
  viewDetails(item: Customer) {
    this.dialog.open(CustomerDetailsComponent, { data: item, width: '500px' });
  }
}
