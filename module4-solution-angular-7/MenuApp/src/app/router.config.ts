import { UIRouter, Category } from '@uirouter/core';
import {Injector} from '@angular/core';
import {DataService} from "./data.service";

export function routerConfigFn(router: UIRouter, injector: Injector) {
  const dataService = injector.get(DataService);
  router.urlService.rules.otherwise({state:'app'});
}
