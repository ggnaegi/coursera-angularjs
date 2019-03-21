import {AppComponent} from './app.component';
import {CategoriesComponent} from "./categories.component";
import {ItemsComponent} from "./items.component";
import {DataService} from "./data.service";
import {Transition} from '@uirouter/core';
import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

export const appState = {
  name: 'app',
  component: AppComponent,
  url: '/',
};

export const categoriesState = {
  name: 'categories',
  url: '/categories',
  component: CategoriesComponent
};

export const itemsState = {
  name: 'items',
  parent: 'categories',
  url: 'items/{categoryId}',
  component: ItemsComponent
};

export const APP_STATES = [
  appState,
  categoriesState,
  itemsState
];
