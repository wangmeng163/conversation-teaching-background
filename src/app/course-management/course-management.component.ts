import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent implements OnInit {
  isLoading = true;

  data = [
    {
      id: 1,
      name: '计算机图形学',
      description: '计算机图形学(Computer Graphics，简称CG)是一种使用数学算法' +
        '将二维或三维图形转化为计算机显示器的栅格形式的科学。简单地说，计算机图形学的' +
        '主要研究内容就是研究如何在计算机中表示图形、以及利用计算机进行图形的计算、' +
        '处理和显示的相关原理与算法。'
    },
    {
      id: 2,
      name: '计算机图形学',
      description: '计算机图形学(Computer Graphics，简称CG)是一种使用数学算法' +
        '将二维或三维图形转化为计算机显示器的栅格形式的科学。简单地说，计算机图形学的' +
        '主要研究内容就是研究如何在计算机中表示图形、以及利用计算机进行图形的计算、' +
        '处理和显示的相关原理与算法。'
    },
    {
      id: 3,
      name: '计算机图形学',
      description: '计算机图形学(Computer Graphics，简称CG)是一种使用数学算法' +
        '将二维或三维图形转化为计算机显示器的栅格形式的科学。简单地说，计算机图形学的' +
        '主要研究内容就是研究如何在计算机中表示图形、以及利用计算机进行图形的计算、' +
        '处理和显示的相关原理与算法。'
    },
    {
      id: 4,
      name: '计算机图形学',
      description: '计算机图形学(Computer Graphics，简称CG)是一种使用数学算法' +
        '将二维或三维图形转化为计算机显示器的栅格形式的科学。简单地说，计算机图形学的' +
        '主要研究内容就是研究如何在计算机中表示图形、以及利用计算机进行图形的计算、' +
        '处理和显示的相关原理与算法。'
    },
    {
      id: 5,
      name: '计算机图形学',
      description: '计算机图形学(Computer Graphics，简称CG)是一种使用数学算法' +
        '将二维或三维图形转化为计算机显示器的栅格形式的科学。简单地说，计算机图形学的' +
        '主要研究内容就是研究如何在计算机中表示图形、以及利用计算机进行图形的计算、' +
        '处理和显示的相关原理与算法。'
    },
    {
      id: 6,
      name: '计算机图形学',
      description: '计算机图形学(Computer Graphics，简称CG)是一种使用数学算法' +
        '将二维或三维图形转化为计算机显示器的栅格形式的科学。简单地说，计算机图形学的' +
        '主要研究内容就是研究如何在计算机中表示图形、以及利用计算机进行图形的计算、' +
        '处理和显示的相关原理与算法。'
    },
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.isLoading = false;
  }

  enterCourse(id: number) {
    this.router.navigateByUrl('/course/' + id);
  }
}
