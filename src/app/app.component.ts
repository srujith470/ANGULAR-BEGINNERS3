import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, Injectable, Inject } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import{CoursesService} from './services/courses.service'
import { CONFIG_TOKEN, APP_CONFIG, AppConfig } from './config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;
  

  constructor( 
    private coursesService: CoursesService, 
    @Inject(CONFIG_TOKEN) private config: AppConfig
    ){
      console.log(config)
  }

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  save(course:Course){
    this.coursesService.saveCourse(course).subscribe(
      () => console.log('Course Saved')
    )
  }

}
