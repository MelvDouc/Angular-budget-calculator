import { Component, OnInit } from '@angular/core';
import { DateService } from "src/app/services/date.service";

@Component({
  selector: 'app-date-display',
  templateUrl: './date-display.component.html',
  styleUrls: ['./date-display.component.css']
})
export class DateDisplayComponent implements OnInit {
  public French_date!: string;

  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.French_date = this.dateService.getFrenchDate();
  }

}
