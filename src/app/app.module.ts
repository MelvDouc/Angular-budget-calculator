import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DateDisplayComponent } from './components/date-display/date-display.component';
import { CalculatorFormComponent } from './components/calculator-form/calculator-form.component';
import { FormGroupComponent } from './components/calculator-form/form-group/form-group.component';
import { ResetButtonComponent } from './components/reset-button/reset-button.component';
import { BudgetDisplayComponent } from './components/budget-display/budget-display.component';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    DateDisplayComponent,
    CalculatorFormComponent,
    FormGroupComponent,
    ResetButtonComponent,
    BudgetDisplayComponent,
    ThemeSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
