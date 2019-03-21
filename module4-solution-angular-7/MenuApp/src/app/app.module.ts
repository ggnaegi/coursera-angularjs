import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import {UIRouterModule} from "@uirouter/angular";
import { AppComponent } from './app.component';
import {CategoriesComponent} from "./categories.component";
import {ItemsComponent, ItemsLiComponent} from "./items.component";
import {DataService} from "./data.service";
import {routerConfigFn} from './router.config';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {appState, categoriesState, itemsState} from "./app.states";


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ItemsComponent,
    ItemsLiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    UIRouterModule.forRoot({
      states: [appState, categoriesState, itemsState],
      useHash: true,
      config: routerConfigFn,
    })
  ],
  exports: [
    UIRouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
