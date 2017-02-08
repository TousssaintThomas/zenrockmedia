import {EventAggregator} from 'aurelia-event-aggregator';
import {WebAPI} from './web-api';
import {siteUpdated, siteViewed} from './messages';
import {inject} from 'aurelia-framework';

@inject(WebAPI, EventAggregator)
export class siteList {
  sites;
  selectedId = 0;

  constructor(private api: WebAPI, ea: EventAggregator){
    ea.subscribe(siteViewed, msg => this.select(msg.site));
    ea.subscribe(siteUpdated, msg => {
      let id = msg.site.id;
      let found = this.sites.find(x => x.id == id);
      Object.assign(found, msg.site);
    });
  }

  created(){
    this.api.getsiteList().then(sites => this.sites = sites);
  }

  select(site){
    this.selectedId = site.id;
    return true;
  }
}