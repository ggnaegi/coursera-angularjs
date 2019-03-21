import {AppComponent} from './app.component';
import {CategoriesComponent} from "./categories.component";
import {ItemsComponent, ItemsLiComponent} from "./items.component";
import {DataService} from "./data.service";
import {Transition} from '@uirouter/core';

export const appState = {
  name: 'app',
  component: AppComponent,
  url: '/',
};

export const categoriesState = {
  name: 'categories',
  url: '/categories',
  component: CategoriesComponent,
  resolve: [
    {
      token:'categories',
      deps:[DataService],
      resolveFn:(dataService) => {
        return dataService.getAllCategories().then(result =>{
          return result.sort((x,y) => {
            let xName = x.name.toLowerCase();
            let yName = y.name.toLowerCase();
            return yName <= xName ? xName > yName ? 1 : 0 : -1;
          })
        });
      }
    }
  ]
};

export const itemsState = {
  name: 'items',
  parent: 'categories',
  url: '/items/:categoryId',
  resolve:[
    {
      token:'itemsData',
      deps:[DataService, Transition],
      resolveFn: (dataService, transition) => {
        return dataService.getItemsForCategory(transition.params().categoryId).then(result => {
          return {
            'currentCategory':result.category,
            'sortedItems':result.menu_items.sort((x,y) => {
              let xName = x.name.toLowerCase();
              let yName = y.name.toLowerCase();
              return yName <= xName ? xName > yName ? 1 : 0 : -1;
            })
          }
        })
      }
    }
  ],
  views:{
    "items-div" : {
      templateUrl: './items.component.html',
      component:ItemsComponent
    },
    "items-li" :{
      component:ItemsLiComponent,
      templateUrl: './items.component.li.html'
    }
  }
};

export const APP_STATES = [
  appState,
  categoriesState,
  itemsState
];
