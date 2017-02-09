import { Component } from '@angular/core';
import { Burger } from './burger/burger'
import {Ingredient} from "./ingredient/ingredient";
import {IngredientService} from "./ingredient/ingredient.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Manito Burger Generator';
  burger: Burger = new Burger('Stadtturm Burger', []);
  ingredients: Ingredient[];

  constructor(private ingredientService: IngredientService) {}

  // ngOnInit is a lifecycle hook
  // NEVER call services / do anything else that might be complicated in the constructor
  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients(): void {
    this.ingredientService.getIngredients().then(ingredients => this.ingredients = ingredients);;
  }

  addIngredient(ingredient: Ingredient) {
    this.burger.addIngredient(ingredient);
  }

  removeIngredient(ingredient: Ingredient) {
    this.burger.removeIngredient(ingredient);
  }

}
