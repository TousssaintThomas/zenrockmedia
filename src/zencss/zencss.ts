import {Router, RouterConfiguration} from 'aurelia-router';

export class Zencss {
  router: Router;

  heading = 'Zencss';
  title = 'Zencss';

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title ='zencss';
    config.map([
      { 
        route: ['', 'introduction'], 
        name: 'introduction',
        moduleId: './introduction/introduction', 
        title: 'Introduction',
        nav: true, 
        settings: {
          icon:'flag'
        } 
      },
      { 
        route: 'download',
        name: 'download',
        moduleId: './download/download',
        nav: true,
        title: 'Download',
        settings: {
          icon: 'download'
        }
      },
      { 
        route: 'accordian',
        name: 'accordian',
        moduleId: './accordian/accordian',
        nav: true,
        title: 'Accordian',
        settings: {
          icon: 'database'
        }
      },
      {
        route: 'color-palette',
        name: 'color-palette',
        moduleId: './color-palette/color-palette',
        nav: true,
        title: 'Color Palette',
        settings: {
          icon: 'pencil'
        }
      },
      {
        route: 'reset',
        name: 'reset',
        moduleId:'./reset/reset',
        nav: true,
        title: 'Reset'
      },
      { 
        route: 'grid',
        name: 'grid',
        moduleId: './grid/grid',
        nav: true, 
        title: 'Grid',
        settings: {
          icon: 'th-large'
        }
      },
      {
        route: 'typography',
        name: 'typography',
        moduleId: './typography/typography',
        nav: true,
        title: 'Typograpgy'
      },
      { 
        route: 'list',
        name: 'list',
        moduleId: './list/list',
        nav: true,
        title: 'List',
        settings: {
          icon: 'list-alt'
        }
      },
      { 
        route: 'buttons',
        name: 'buttons',
        moduleId: './buttons/buttons',
        nav: true, title: 'Buttons',
        settings: {
          icon: 'keyboard-o'
        }
      },
      {
        route: 'navigation',
        name: 'navigation',
        moduleId :'./navigation/navigation',
        nav: true,
        title: 'Navigation'
      },
      { 
        route: 'tables',
        name: 'tables',
        moduleId: './tables/tables',
        nav: true,
        title: 'Tables',
        settings: {
          icon: 'table'
        }
      },
      { 
        route: 'forms', 
        name: 'forms',
        moduleId: './forms/forms',
        nav: true,
        title: 'Forms',
        settings: {
          icon: 'pencil'
        }
      },
      { 
        route: 'menus', 
        name: 'menus',
        moduleId: './menus/menus',
        nav: true,
        title: 'Menus',
        settings: {
          icon: 'tasks'
        }
      }
    ]);

    this.router = router;
  }
}