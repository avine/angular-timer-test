import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  countConstructor = 0;
  countInit = 0;

  @Input() innerValue = '';

  constructor() {
    setInterval(() => {
      this.countConstructor++;
      console.log('Counter Constructor: ', this.countConstructor);
    }, 1000);
  }

  ngOnInit() {
    setInterval(() => {
      this.countInit++;
      console.log('Counter Init', this.countInit);
    }, 1000);
  }

  action() {
  }
}
