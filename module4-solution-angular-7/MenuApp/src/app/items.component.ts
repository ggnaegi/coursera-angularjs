import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit, OnDestroy{
  category

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
