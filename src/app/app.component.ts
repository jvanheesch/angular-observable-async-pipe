import {Component} from '@angular/core';
import {FormeleOpvolgingService} from "./formele-opvolging.service";
import {Observable} from "rxjs";
import {FormeleOpvolging} from "./formele-opvolging";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public formeleOpvolging$: Observable<FormeleOpvolging>;

  constructor(private formeleOpvolgingService: FormeleOpvolgingService) {
    this.formeleOpvolging$ = this.formeleOpvolgingService.getFormeleOpvolging();
  }

  public setFormeleOpvolging(status: boolean): void {
    this.formeleOpvolgingService.wijzigFormeleOpvolging(status)
      .subscribe();
  }
}
