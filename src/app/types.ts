export type BudgetValues = {
  [key: string]: number | null;
};

export type BudgetOption = {
  value: number | null;
  labelText: string;
  min: number;
  max: number | null;
};

export interface BudgetOptions {
  [key: string]: BudgetOption;
};