import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.css']
})
export class ResetButtonComponent implements OnInit {
  @Input() text: string = "Réinitialiser";
  @Output() onReset = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick() {
    this.onReset.emit();
  }
}
