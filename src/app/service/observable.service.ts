import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  public observable = new BehaviorSubject('Our Mission');

  constructor() { }

  updateObservable() {
    this.observable.next('Your Mission');
  }

  setObservable(ref: ElementRef) {
    this.observable.next(JSON.stringify(ref));
  }

}
