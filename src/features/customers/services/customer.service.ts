import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../interfaces/Customer.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  public products$ = new BehaviorSubject<Customer[]>([
    {
      arName: 'محفظة',
      enName: 'Wallet',
    },
    {
      arName: 'ساعة',
      enName: 'Watch',
    },
    {
      arName: 'قلم',
      enName: 'Pen',
    },
  ]);
  constructor() {}

  addProduct(product: Customer) {
    this.products$.next([...this.products$.getValue(), product]);
  }

  getProducts(): Observable<Customer[]> {
    return this.products$;
  }
}
