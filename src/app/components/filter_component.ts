import { Component, Output, ViewChild, ElementRef, AfterViewInit, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'filter',
  template: "<input #todoFilter placeholder='Filter todos'/>",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements AfterViewInit {
  @Output() filterValue = new EventEmitter<string>();

  @ViewChild('todoFilter') todoFilter: ElementRef;

  ngAfterViewInit() {
    Rx.Observable.fromEvent(this.todoFilter.nativeElement, 'keyup')
                 .debounceTime(200)
                 .subscribe((event: KeyboardEvent) => {
                   let value: string = (<HTMLInputElement>event.target).value;
                   this.filterValue.emit(value);
                 });
  }
}
