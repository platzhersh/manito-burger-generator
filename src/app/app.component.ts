import { Component } from '@angular/core';
import { Burger } from './burger/burger'
import {Ingredient} from "./ingredient/ingredient";
import {IngredientService} from "./ingredient/ingredient.service";
import {SauceService} from "./sauce/sauce.service";
import {Sauce} from "./sauce/sauce";
import {BurgerService} from "./burger/burger.service";
import {
  trigger,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('itemState', [
      transition('void => *', animate('100ms ease-in')),
      transition('* => void', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent {
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
