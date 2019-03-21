import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import {UIRouterModule, UIView} from "@uirouter/angular";
import { AppComponent } from './app.component';
import {CategoriesComponent} from "./categories.component";
import {ItemsComponent} from "./items.component";
import {DataService} from "./data.service";
import {routerConfigFn} from './router.config';
import {APP_STATES} from './app.states';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      config: routerConfigFn,
    })
  ],
  exports: [
    UIRouterModule
  ],
  providers: [{provide: DataService, useClass: DataService }],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
