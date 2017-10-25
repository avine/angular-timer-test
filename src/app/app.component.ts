import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countConstructor = 0;
  countInit = 0;

  outerValue = '.';

  constructor() {
    setInterval(() => this.countConstructor++, 1000);
  }

  ngOnInit() {
    setInterval(() => this.countInit++, 1000);
  }

  action() {
    this.outerValue += '.';
  }
}
