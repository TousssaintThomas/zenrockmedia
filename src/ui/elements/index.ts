import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration): void {
  config.globalResources([
  	'./icon/icon',
  	'./nav-list/nav-list',
  	'./input-select/input-select',
  	'./nav-tabs/nav-tabs',
  	'./nav-tabs/tab',
  	'./input-search/input-search'
  ]);
}