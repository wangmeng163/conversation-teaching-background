import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-course',
  templateUrl: './course-student.component.html',
  styleUrls: ['./course-student.component.css']
})
export class CourseStudentComponent implements OnInit {
  id: number;
  isLoading = false;
  isCollapsed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  course = {
    id: 1,
    name: '计算机图形学',
    description: '计算机图形学(Computer Graphics，简称CG)是一种使用数学算法' +
      '将二维或三维图形转化为计算机显示器的栅格形式的科学。简单地说，计算机图形学的' +
      '主要研究内容就是研究如何在计算机中表示图形、以及利用计算机进行图形的计算、' +
      '处理和显示的相关原理与算法。',
    select_num: 34
  };

  students = [
    {
      id: 1,
      name: '邓鸿畴'
    },
    {
      id: 2,
      name: '况後斌斌'
    }, {
      id: 3,
      name: '端木宏扬'
    }, {
      id: 4,
      name: '臧宏富'
    }, {
      id: 5,
      name: '师鹏运'
    }, {
      id: 6,
      name: '闵昊然'
    }, {
      id: 7,
      name: '段干嘉誉'
    }, {
      id: 8,
      name: '桓康平'
    }, {
      id: 9,
      name: '伊嘉志'
    }, {
      id: 10,
      name: '董星波'
    }, {
      id: 11,
      name: '李帅西'
    },
  ];

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  linkToStudent(id: number) {
    this.router.navigateByUrl('/course/' + this.course.id + '/student/' + id);
  }
}
