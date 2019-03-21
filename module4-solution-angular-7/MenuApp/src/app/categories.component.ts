import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DataService} from './data.service';

@Component({
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit, OnDestroy{
  categoriesList:any = [];
  subscriber;

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.subscriber = this.dataService.getAllCategories().subscribe((result:{}) => {
      this.categoriesList = result;
    })
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}

