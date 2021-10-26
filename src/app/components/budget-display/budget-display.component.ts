import { Component, OnInit } from '@angular/core';
import { BudgetService } from "src/app/services/budget.service";

@Component({
  selector: 'app-budget-display',
  templateUrl: './budget-display.component.html',
  styleUrls: ['./budget-display.component.css']
})
export class BudgetDisplayComponent implements OnInit {
  private rawBudget: number = 0;

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.budgetService.budget.subscribe(value => {
      this.rawBudget = (value === null) ? 0 : value;
    });
  }

  public get budget(): string {
    return this.rawBudget.toFixed(2);
  }
}
