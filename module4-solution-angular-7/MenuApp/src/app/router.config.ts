import { UIRouter, Category } from '@uirouter/core';
import {Injector} from '@angular/core';

export function routerConfigFn(router: UIRouter, injector: Injector) {
  router.urlService.rules.otherwise({state:'app'});
}
