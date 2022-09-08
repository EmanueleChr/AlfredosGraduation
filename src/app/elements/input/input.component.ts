import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers : [
    {
      provide : NG_VALUE_ACCESSOR,
      useExisting : forwardRef(() => InputComponent),
      multi : true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() label = 'Come ti chiami?'
  @Input() placeholder = ''
  @Input() typingLabel = true
  
  onchange = (val : any) => {}
  ontouch = () => {}

  _val : any = null
  set value (newVal : any) {
    if (newVal === this._val) return

    this._val = newVal

    this.onchange(newVal)
  }

  constructor() { }

  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onchange = fn
  }
  registerOnTouched(fn: any): void {
    this.ontouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  ngOnInit(): void {
  }



}
