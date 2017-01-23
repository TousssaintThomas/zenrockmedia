import {Router, RouterConfiguration} from 'aurelia-router';

export class Tour {
  router: Router;

  heading = 'Admin';
  title = 'Admin';

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title ='Admin';
    config.map([
      { 
        route: ['', 'home'], 
        name: 'home',       
        moduleId: './home/home',       
        nav: true, 
        title: 'Home', 
        settings: 'home' 
      },
      { 
        route: 'sitemanager',   
        name: 'sitemanager', 
        moduleId: './sitemanager/sitemanager', 
        nav: true, 
        title: 'Site Manager', 
        settings: 'globe' 
      }
    ]);

    this.router = router;
  }
}