import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/shard/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../features/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'products',
    loadChildren: () =>
      import('../features/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('../features/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
