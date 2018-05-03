import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from '@firebase/util';
import { query } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  courses$;
  courses1$: AngularFireList<{}>;
  course$;
  author$;
  //courses: any[];
  //subscription: Subscription;

  constructor(private dp: AngularFireDatabase) {
    this.courses$ = dp.list('/courses').valueChanges();
    this.courses1$ = dp.list('/courses');
    this.course$ = dp.object('/courses/1').valueChanges();
    this.author$ = dp.object('/authors/1').valueChanges();

    console.log(this.courses1$);
    /* this.subscription = dp.list('/courses').valueChanges().subscribe(courses => {
      this.courses = courses;
      console.log(this.courses);
    }); */
  }

  add(courseName: HTMLInputElement) {
    this.courses1$.push({'name': courseName.value, 'price': 1200, 'sections':['dwfq', 'dwa']});
    courseName.value = '';
  }

  update(course) {
    this.dp.object('/courses/1').set(course + 'updated');
  }

  delete() {

  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }
}
