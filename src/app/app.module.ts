import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {CourseManagementComponent} from './course-management/course-management.component';
import {MineComponent} from './mine/mine.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import { CourseComponent } from './course/course.component';
import { CourseChapterComponent } from './course-chapter/course-chapter.component';
import { CourseStudentComponent } from './course-student/course-student.component';
import { MineModifyComponent } from './mine-modify/mine-modify.component';
import { StudentComponent } from './student/student.component';
import { FixProgressDirective } from './fix-progress.directive';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    CourseManagementComponent,
    MineComponent,
    PageNotFoundComponent,
    CourseComponent,
    CourseChapterComponent,
    CourseStudentComponent,
    MineModifyComponent,
    StudentComponent,
    FixProgressDirective,
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
