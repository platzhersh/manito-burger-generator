import { Component, OnInit } from '@angular/core';
import { Burger } from './models/burger';
import {Ingredient} from './models/ingredient';
import {IngredientService} from './core/ingredient/ingredient.service';
import {SauceService} from './core/sauce/sauce.service';
import {Sauce} from './models/sauce';
import {BurgerService} from './core/burger/burger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Manito Burger Generator';
  burger: Burger = new Burger('Stadtturm Burger', []);
  ingredients: Ingredient[];
  sauces: Sauce[];

  // NEVER call services / do anything else that might be complicated in the constructor
  constructor(
    private ingredientService: IngredientService,
    private sauceService: SauceService,
    private burgerService: BurgerService
  ) {}

  // ngOnInit is a lifecycle hook
  ngOnInit(): void {
    this.getIngredients();
    this.getSauces();
  }

  getIngredients(): void {
    this.ingredientService.getIngredients().then(ingredients => this.ingredients = ingredients);
  }
  getSauces(): void {
    this.sauceService.getSauces().then(sauces => this.sauces = sauces);
  }

  addIngredient(ingredient: Ingredient) {
    this.burger.addIngredient(ingredient);
  }

  removeIngredient(ingredient: Ingredient) {
    this.burger.removeIngredient(ingredient);
  }

  onRandomBurger() {
    console.log('create random burger');
    this.burgerService.getRandomBurger().then(burger => {
      console.log(burger);
      this.burger.ingredients = [];
      this.burger.ingredients = burger.ingredients;
    });
  }

  onReset() {
    console.log('reset burger');
    this.burger.ingredients = [];
  }

}
