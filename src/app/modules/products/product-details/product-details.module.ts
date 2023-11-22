import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ButtonModule } from 'src/app/components/button/button.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    ButtonModule,
    MatSnackBarModule,
    RouterModule,
  ],
  exports: [ProductDetailsComponent],
})
export class ProductDetailsModule {}
