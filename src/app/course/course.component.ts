import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  id: number;
  isLoading = false;
  isCollapsed = false;
  course = {
    id: 1,
    name: '计算机图形学',
    description: '计算机图形学(Computer Graphics，简称CG)是一种使用数学算法' +
      '将二维或三维图形转化为计算机显示器的栅格形式的科学。简单地说，计算机图形学的' +
      '主要研究内容就是研究如何在计算机中表示图形、以及利用计算机进行图形的计算、' +
      '处理和显示的相关原理与算法。',
    select_num: 34
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}
