import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ButtonModule } from 'src/app/components/button/button.module';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './products-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HeaderModule } from 'src/app/components/header/header.module';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    ButtonModule,
    MatDividerModule,
    RouterModule,
    ProductsRoutingModule,
    MatPaginatorModule,
    HeaderModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
  ],
  exports: [ProductsComponent],
})
export class ProductsModule {}
