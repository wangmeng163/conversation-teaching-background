import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CourseManagementComponent} from './course-management/course-management.component';
import {MineComponent} from './mine/mine.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CourseComponent} from './course/course.component';
import {CourseChapterComponent} from './course-chapter/course-chapter.component';
import {CourseStudentComponent} from './course-student/course-student.component';
import {MineModifyComponent} from './mine-modify/mine-modify.component';
import {StudentComponent} from './student/student.component';

const appRoutes: Routes = [
  {path: 'course-management', component: CourseManagementComponent},
  {path: 'mine/info', component: MineComponent},
  {path: 'mine/modify', component: MineModifyComponent},
  {path: 'course/:id/info', component: CourseComponent},
  {path: 'course/:id/chapter', component: CourseChapterComponent},
  {path: 'course/:id/student', component: CourseStudentComponent},
  {path: 'course/:id/student/:student-id', component: StudentComponent},
  {
    path: 'course/:id',
    redirectTo: '/course/:id/info',
    pathMatch: 'full'
  },
  {
    path: 'mine',
    redirectTo: 'mine/info',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/course-management',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
