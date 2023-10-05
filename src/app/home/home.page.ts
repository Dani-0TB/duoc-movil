import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public username: String;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.username = 'username';
    this.activatedRoute.queryParams.subscribe((params) => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.username = state['user'];
      }
    });
  }

}
