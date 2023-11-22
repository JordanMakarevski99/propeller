import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  value!: string;

  @Input()
  type: 'basic' | 'raised' | 'stroked' = 'basic';

  @Input()
  color: ThemePalette = undefined;

  @Input()
  disabled: boolean = false;

  @Input()
  icon!: string;

  @Output()
  btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
  constructor() {}
}
