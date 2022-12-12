import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent {
  productForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService
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
    this.customerService.addProduct(dataToSend);
  }
}
