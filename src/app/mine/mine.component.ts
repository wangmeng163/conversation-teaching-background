import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  isCollapsed = false;
  isLoading = false;

  user = {
    id: 'wx_k253dx235hjk71ff',
    name: '郑文天',
    sex: '男',
    organization: '复旦大学软件学院',
    description: '任教于复旦大学软件学院，讲师，主要教授《WEB基础》'
  };

  constructor() { }

  ngOnInit() {
    this.isLoading = false;
  }

}
