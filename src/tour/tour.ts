import {Router, RouterConfiguration} from 'aurelia-router';

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
      },
      { 
        route: 'portfolio',  
        name: 'portfolio', 
        moduleId: './portfolio/portfolio', 
        nav: true, 
        title: 'Portfolio', 
        settings: 'book' 
      },
      { 
        route: 'about-us',   
        name: 'about-us', 
        moduleId: './about-us/about-us', 
        nav: true, 
        title: 'About Us', 
        settings: 'star' 
      }
    ]);

    this.router = router;
  }
}