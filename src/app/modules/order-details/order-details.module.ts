import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './order-details.component';
import { OrderDetailsRoutingModule } from './order-details-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ButtonModule } from 'src/app/components/button/button.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [OrderDetailsComponent],
  imports: [
    OrderDetailsRoutingModule,
    CommonModule,
    MatCardModule,
    MatListModule,
    ButtonModule,
    MatSnackBarModule,
  ],
  exports: [OrderDetailsComponent],
})
export class OrderDetailsModule {}
