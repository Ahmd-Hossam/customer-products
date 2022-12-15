import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter, finalize, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  path = '';
  title = 'products';
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart),
        map((event) => event as NavigationStart)
      )
      .subscribe((event) => {
        if (event.url) {
          this.path = `${event.url}`.split('/').join('');
          console.log('path is', this.path);
        }
      });
  }
}
