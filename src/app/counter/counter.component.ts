import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  // Component is updated only when its @Input changes
  // or when an event occurs in its view.
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  countConstructor = 0;
  countInit = 0;

  @Input() innerValue = '';

  constructor() {
    setInterval(() => this.countConstructor++, 1000);
  }

  ngOnInit() {
    setInterval(() => {
      this.countInit++;
      console.log('Inner Counter:', this.countInit);
    }, 1000);
  }

  action() {
  }
}
