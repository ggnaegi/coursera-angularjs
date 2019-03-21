import {Component, Input} from '@angular/core';

@Component({
  templateUrl: './categories.component.html'
})
export class CategoriesComponent {
  @Input('categories')
  categoriesList;
}
