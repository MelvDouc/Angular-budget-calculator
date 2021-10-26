import { Component, OnInit } from '@angular/core';
import { BudgetService } from "src/app/services/budget.service";
import { BudgetOptions } from "src/app/types";

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.css']
})
export class CalculatorFormComponent implements OnInit {
  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void { }

  public get budgetOptions(): BudgetOptions {
    return this.budgetService.getOptions();
  }

  public get optionKeys(): string[] {
    return Object.keys(this.budgetOptions);
  }

  public setOption(value: any, key: keyof BudgetOptions): void {
    this.budgetService.setOption(key, value);
  };

  public handleClick(): void {
    this.budgetService.setDefaultOptions();
  }
}
