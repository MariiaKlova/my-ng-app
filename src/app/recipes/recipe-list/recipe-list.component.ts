import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('ЗЕЛЕНИЙ БОРЩ', 'РЕЦЕПТ ЗІ СВІЖИМ ШПИНАТОМ', 'https://klopotenko.com/wp-content/uploads/2022/04/zelenyy-borshch-zi-shpynatom-img-1000x600.jpg?v=1689073582'),
    new Recipe('ПУНДИКИ', 'ЗІ ЗГУЩЕНИМ МОЛОКОМ ТА ГОРІХАМИ', 'https://klopotenko.com/wp-content/uploads/2023/11/pundyky-z-gorihamy-ta-zgushenym-molokom-img-1000x600.jpg?v=1701174403')
  ];

  constructor(){}
  ngOnInit(){

  }
}
