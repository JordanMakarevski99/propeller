import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  providers: [],
  exports: [ButtonComponent],
})
export class ButtonModule {}
