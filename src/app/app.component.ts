import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countConstructor = 0;
  countInit = 0;

  rootValue = '.';

  constructor() {
    setInterval(() => {
      this.countConstructor++;
      console.log('Root Constructor: ', this.countConstructor);
    }, 1000);
  }

  ngOnInit() {
    setInterval(() => {
      this.countInit++;
      console.log('Root Init', this.countInit);
    }, 1000);
  }

  action() {
    this.rootValue += '.';
  }
}
