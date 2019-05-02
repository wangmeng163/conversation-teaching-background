import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  isCollapsed = false;
  isLoading = false;

  constructor() { }

  ngOnInit() {
    this.isLoading = false;
  }

}
