import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { BudgetOption, BudgetOptions, BudgetValues } from "../types";
import { DateService } from "./date.service";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private options: BudgetOptions = {};
  public budget = new Subject<number | null>();

  constructor(private dateService: DateService) {
    this.setDefaultOptions();
  }

  private get DEFAULT_OPTIONS(): BudgetOptions {
    return {
      funds: {
        value: null,
        labelText: "Fonds disponibles",
        min: 0,
        max: null
      },
      monthDay: {
        value: this.dateService.getMonthDay(),
        labelText: "Jour du mois",
        min: 1,
        max: null
      },
      monthLength: {
        value: this.dateService.getMonthLength(),
        labelText: "Nombre de jours ce mois-ci",
        min: 28,
        max: 31
      },
      nextIncomeDay: {
        value: null,
        labelText: "Jour du prochain revenu",
        min: 1,
        max: 31
      }
    } as BudgetOptions;
  }

  public getOption(key: keyof BudgetOptions): BudgetOption {
    return this.options[key];
  }

  public getOptions(): BudgetOptions {
    return this.options;
  }

  public setOption(key: keyof BudgetOptions, value: number | null): void {
    this.options[key].value = value;
    this.notifyOfBudget();
  }

  public setDefaultOptions(): void {
    this.options = { ...this.DEFAULT_OPTIONS };
  }

  private getValues(): BudgetValues {
    return Object.entries(this.options).reduce((acc, [key, option]) => {
      return { ...acc, [key]: option.value };
    }, {} as BudgetValues);
  }

  private calculateBudget(): number | null {
    const values = this.getValues();

    for (const key in values)
      if (values[key] === null)
        return null;

    const { funds, monthDay, monthLength, nextIncomeDay } = values;
    const budget = funds / (monthLength - monthDay + nextIncomeDay);

    if (isNaN(budget) || !isFinite(budget))
      return null;
    return budget;
  }

  private notifyOfBudget(): void {
    this.budget.next(this.calculateBudget());
  }
}
