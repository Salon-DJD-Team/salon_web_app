import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-banner-v1',
  imports: [],
  templateUrl: './banner-v1.component.html',
})
export class BannerV1Component {

  pageTitle = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    // Listen to route change
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.getChild(this.route);
        this.pageTitle = currentRoute.snapshot.data['title'] || 'Page';
      });
  }

  // Get deepest child route
  getChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

}
