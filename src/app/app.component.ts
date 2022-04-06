import {Component} from '@angular/core';
import {FormeleOpvolgingService} from "./formele-opvolging.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public formeleOpvolging$: Observable<boolean>;

  constructor(private formeleOpvolgingService: FormeleOpvolgingService) {
    this.formeleOpvolging$ = this.formeleOpvolgingService.getFormeleOpvolging();
  }

  public setFormeleOpvolging(status: boolean): void {
    this.formeleOpvolgingService.wijzigFormeleOpvolging(status)
      .subscribe();
  }
}
