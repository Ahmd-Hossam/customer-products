import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products$ = new BehaviorSubject<Product[]>([
    {
      code: '#565+5600',
      arName: 'محفظة',
      enName: 'Wallet',
    },
    {
      code: '#632155',
      arName: 'ساعة',
      enName: 'Watch',
    },
    {
      code: '#123657',
      arName: 'قلم',
      enName: 'Pen',
    },
  ]);
  constructor() {}

  addProduct(product: Product) {
    this.products$.next([...this.products$.getValue(), product]);
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }
}
