import {Injectable, Inject} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MenuItem} from "./menuItem";
import {Category} from "./category";

@Injectable()
export class DataService {

  baseUrl = "https://davids-restaurant.herokuapp.com";
  constructor(@Inject(HttpClient) private httpClient: HttpClient){
  }

  getAllCategories() {
    return this.httpClient.get<any[]>(this.baseUrl +"/categories.json").toPromise().then(result =>{
      return result.sort((x,y) => {
        let xName = x.name.toLowerCase();
        let yName = y.name.toLowerCase();
        return yName <= xName ? xName > yName ? 1 : 0 : -1;
      })
    });
  }

  getItemsForCategory(categoryShortName){
    return this.httpClient.get<[Category, MenuItem[]]>(this.baseUrl + "/menu_items.json",
      {params: new HttpParams().set('category', categoryShortName)}).toPromise().then(result => {
      return {

        'currentCategory': result['category'],
        'sortedItems': result['menu_items'].sort((x, y) => {
          let xName = x.name.toLowerCase();
          let yName = y.name.toLowerCase();
          return yName <= xName ? xName > yName ? 1 : 0 : -1;
        })
      };
    });
  }
}
