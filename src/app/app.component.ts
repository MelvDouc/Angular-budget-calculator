import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Calcul de budget journalier";
  public isLightTheme = false;

  public toggleTheme(e: any) {
    this.isLightTheme = e === "light";
  }
}
