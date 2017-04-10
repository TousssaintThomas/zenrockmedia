import {Aurelia} from 'aurelia-framework';
import {AppRouter, RouterConfiguration} from 'aurelia-router';

export class App {
  router: AppRouter;

  configureRouter(config: RouterConfiguration, router: AppRouter) {
    config.title = 'Aurelia';
    config.map([
      {
        route: '',
        redirect: 'tour'
      },
      { 
      	route: 'tour',     
      	name: 'tour',          
      	moduleId: './tour/tour',          
      	nav: true, 
      	title: 'tour' 
      },
      { 
      	route: 'zencss',      
      	name: 'zencss',     
      	moduleId: './zencss/zencss',     
      	nav: true, 
      	title: 'Zen Css' 
      },
      { 
      	route: 'admin',      
      	name: 'admin',    
      	moduleId: './admin/admin',     
      	nav: true, 
      	title: 'Administrator' 
      },
      {
        route: 'user',
        name: 'user',
        moduleId: './user/user',
        nav: true,
        title: 'User'
      },
      { 
        route: 'themeforest',      
        name: 'themeforest',    
        moduleId: './themeforest/themeforest',     
        nav: true, 
        title: 'Themeforest' 
      }
    ]);

    this.router = router;
  }
}
