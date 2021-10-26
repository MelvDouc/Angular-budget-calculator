import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.css']
})
export class ThemeSelectorComponent implements OnInit {
  @Output() changeHandler = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(e: any) {
    this.changeHandler.emit(e.target.value);
  }

}
