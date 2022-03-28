import {Injectable} from '@angular/core';
import {delay, map, Observable, of, ReplaySubject} from "rxjs";
import {FormeleOpvolging} from "./formele-opvolging";

@Injectable({
  providedIn: 'root'
})
export class FormeleOpvolgingService {
  private formeleOpvolgingSubject: ReplaySubject<FormeleOpvolging>;

  constructor() {
    // replace with http GET
    let o = of({status: true})
      .pipe(delay(1000));
    this.formeleOpvolgingSubject = this.cacheable(o);
  }

  public getFormeleOpvolging(): Observable<FormeleOpvolging> {
    return this.formeleOpvolgingSubject;
  }

  public wijzigFormeleOpvolging(status: boolean): Observable<void> {
    // replace with http PUT
    let o = of(null)
      .pipe(delay(1000));
    return o
      .pipe(map(status200 => this.formeleOpvolgingSubject!.next({status: status})))
  }

  private cacheable<T>(o: Observable<T>): ReplaySubject<T> {
    const replay = new ReplaySubject<T>(1);
    o.subscribe(
      x => replay.next(x),
      x => replay.error(x),
      // () => replay.complete()
    );
    return replay;
  }
}
