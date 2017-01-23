import {Router, RouterConfiguration} from 'aurelia-router';
import '../../styles/tour/main.css';

export class Tour {
  router: Router;

  heading = 'Tour';
  title = 'Title';

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title ='Zenrock Media';
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
        route: 'services',   
        name: 'services', 
        moduleId: './services/services', 
        nav: true, 
        title: 'Services', 
        settings: 'globe' 
      }
    ]);

    this.router = router;
  }
}