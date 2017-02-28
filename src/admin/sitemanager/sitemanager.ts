import {Router, RouterConfiguration} from 'aurelia-router';

export class Sitemanager{
	router: Router;

	configureRouter(config: RouterConfiguration, router: Router){
    	config.title = 'Contacts';
    	config.map([
      		{ 
      			route: '',              
      			moduleId: './no-selection',   
      			title: 'Select'
      		},
      		{ 
      			route: 'sites/:id',  
      			moduleId: './site-details', 
      			name:'sites' 
      		}
    	]);
	this.router = router;
  }
}