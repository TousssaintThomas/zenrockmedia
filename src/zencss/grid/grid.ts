import {Router, RouterConfiguration} from 'aurelia-router';
export class Grid {
	router: Router;
	heading: string = "Grid";
	description: string = "Simple css for Grids";
	configureRouter(config: RouterConfiguration, router: Router) {
		config.map([
		  { route: ['', 'welcome'], name: 'welcome',       moduleId: './tutorial/tutorial',       nav: true, title: 'Tutorial', settings: 'graduation-cap' },
		  { route: 'download',  name: 'download', moduleId: './download/download', nav: true, title: 'Download', settings: 'download'},
		  { route: 'changelog',  name: 'changelog', moduleId: './changelog/changelog', nav: true, title: 'Changelog', settings: 'code-fork' }
		]);

		this.router = router;
	}
}