import {AppComponent} from './app.component';
import {CategoriesComponent} from "./categories.component";
import {ItemsComponent, ItemsLiComponent} from "./items.component";
import {DataService} from "./data.service";
import {Transition} from '@uirouter/core';
import get = Reflect.get;

export const appState = {
  name: 'app',
  component: AppComponent,
  url: '/',
};

export const getAllCategoriesPrd = (dataService) => {
  return dataService.getAllCategories();
}

export const categoriesState = {
  name: 'categories',
  url: '/categories',
  component: CategoriesComponent,
  resolve: [
    {
      token:'categories',
      deps:[DataService],
      resolveFn: getAllCategoriesPrd
    }
  ]
};

export const getItemsForCategoryPrd = (dataService:DataService, transition:Transition) => {
  return dataService.getItemsForCategory(transition.params().categoryId);
}

export const itemsState = {
  name: 'items',
  parent: 'categories',
  url: '/items/:categoryId',
  resolve:[
    {
      token:'itemsData',
      deps:[DataService, Transition],
      resolveFn: getItemsForCategoryPrd
    }
  ],
  views:{
    "items-div" : {
      component:ItemsComponent
    },
    "items-li" :{
      component:ItemsLiComponent
    }
  }
};
