import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from '../../interfaces/Customer.interface';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent {
  customerData: Customer;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
    this.customerData = data;
  }
}
