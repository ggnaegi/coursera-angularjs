import {Component, Input} from '@angular/core';

@Component({
  template:
    "<ul class=\"list-group mt-2 ml-2\">\n" +
    "<li *ngFor=\"let item of itemsData.sortedItems\" class=\"list-group-item\">{{item.name}}</li>\n" +
    "</ul>"
})
export class ItemsComponent{
  @Input('itemsData')
  itemsData;
}

@Component({
  template:"<a class=\"nav-link\">{{itemsData.currentCategory.name}}<span class=\"sr-only\">(current)</span></a>"
})
export class ItemsLiComponent {
  @Input('itemsData')
  itemsData;
}
