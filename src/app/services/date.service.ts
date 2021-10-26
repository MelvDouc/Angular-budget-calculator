import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private today: Date;

  constructor() {
    this.today = new Date();
  }

  public getMonthDay(): number {
    return this.today.getDate();
  }

  public getMonthLength(): number {
    return new Date(this.today.getFullYear(), this.today.getMonth(), 0).getDate();
  }

  public getFrenchDate(): string {
    return new Intl.DateTimeFormat("fr-Fr", { dateStyle: "full" }).format(this.today);
  }
}
