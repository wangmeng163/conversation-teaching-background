import {Component, DoCheck, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  isCollapse = false;

  constructor() {
  }

  ngDoCheck() {
    this.isCollapse = window.innerWidth < 576;
  }
}
