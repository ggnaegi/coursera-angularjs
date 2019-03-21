import {Injectable, Inject} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Category} from "./category";
import {Observable} from 'rxjs';

@Injectable()
export class DataService {

  baseUrl = "https://davids-restaurant.herokuapp.com";
  constructor(@Inject(HttpClient) private httpClient: HttpClient){
  }

  getAllCategories():Promise<Category> {
    return this.httpClient.get<Category>(this.baseUrl +"/categories.json").toPromise();
  }

  getItemsForCategory(categoryShortName){
    return this.httpClient.get(this.baseUrl + "/menu_items.json",
      {params: new HttpParams().set('category', categoryShortName)}).toPromise();
  }
}
