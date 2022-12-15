import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [NavComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    NavComponent,
  ],
})
export class ShardModule {}
