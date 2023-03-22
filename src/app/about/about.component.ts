import { Component, ElementRef, ViewChild } from '@angular/core';
import { ObservableService } from '../service/observable.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../../scss/2-components/_about.scss']
})
export class AboutComponent {

  public title = 'Our Title';

  @ViewChild('inputValue') inputValue!: ElementRef;

  constructor(private service: ObservableService) {
    this.service.observable.subscribe(data => this.title = data);
  }

  changeMission() {
    this.service.updateObservable();
  }

  changeTitle() {
    this.service.setObservable(this.inputValue.nativeElement.value);
  }

}
