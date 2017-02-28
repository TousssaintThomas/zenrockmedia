import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {WebAPI} from './web-api';
import {siteUpdated,siteViewed} from './messages';
import {areEqual} from './utility';

interface site {
  firstName: string;
  lastName: string;
  email: string;
}

@inject(WebAPI, EventAggregator)
export class siteDetail {
  routeConfig;
  site: site;
  originalsite: site;

  constructor(private api: WebAPI, private ea: EventAggregator) { }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;

    return this.api.getsiteDetails(params.id).then(site => {
      this.site = <site>site;
      this.routeConfig.navModel.setTitle(this.site.firstName);
      this.originalsite = JSON.parse(JSON.stringify(this.site));
      this.ea.publish(new siteViewed(this.site));
    });
  }

  get canSave() {
    return this.site.firstName && this.site.lastName && !this.api.isRequesting;
  }

  save() {
    this.api.savesite(this.site).then(site => {
      this.site = <site>site;
      this.routeConfig.navModel.setTitle(this.site.firstName);
      this.originalsite = JSON.parse(JSON.stringify(this.site));
      this.ea.publish(new siteUpdated(this.site));
    });
  }

  canDeactivate() {
    if(!areEqual(this.originalsite, this.site)){
      let result = confirm('You have unsaved changes. Are you sure you wish to leave?');

      if(!result){
        this.ea.publish(new siteViewed(this.site));
      }

      return result;
    }

    return true;
  }
}