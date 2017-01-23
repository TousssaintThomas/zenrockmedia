import {Router, RouterConfiguration} from 'aurelia-router';

export class services {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: ['', 'welcome'], name: 'welcome',       moduleId: './mobile',       nav: true, title: 'Tutorial', settings: 'graduation-cap' }
    ]);

    this.router = router;
  }
}
