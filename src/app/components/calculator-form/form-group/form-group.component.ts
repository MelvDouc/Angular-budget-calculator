import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  @Input() id!: string;
  @Input() labelText!: string;
  @Input() min!: number;
  @Input() max!: number | null;
  @Input() value!: number | null;
  @Output() keyupHandler = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  private getValue(event: any): number | null {
    const { target } = event;
    if (!target)
      return null;

    const { value } = target;
    if (value === "" || value === undefined || value === null)
      return null;

    const float = parseFloat(value);
    if (isNaN(value))
      return null;
    
    return float;
  }

  public onKeyup(event: any) {
    const value = this.getValue(event);
    this.keyupHandler.emit(value);
  }

}
