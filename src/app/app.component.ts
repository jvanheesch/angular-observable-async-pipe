import {Component, OnInit} from '@angular/core';
import {FormeleOpvolgingService} from "./formele-opvolging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public formeleOpvolgingStatus: boolean | null = null;

  constructor(private formeleOpvolgingService: FormeleOpvolgingService) {
  }

  ngOnInit(): void {
    this.formeleOpvolgingService.getFormeleOpvolging()
      .subscribe(s => this.formeleOpvolgingStatus = s.status);
  }

  toggleFormeleOpvolging(): void {
    let nieuweStatus = !this.formeleOpvolgingStatus;
    this.formeleOpvolgingService.wijzigFormeleOpvolging(nieuweStatus)
      .subscribe();
  }
}
