import { Ingredient } from '../ingredient/ingredient'
import {forEach} from "@angular/router/src/utils/collection";
import {Sauce} from "../sauce/sauce";

const baseprice = 8.0;

export class Burger {
  name: string;
  ingredients: Array<Ingredient>;
  sauces: Array<Sauce>;

  // a simple constructor.
  constructor(name: string, ingredients: Array<Ingredient>) {
    this.name = name;
    this.ingredients = ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Array<Ingredient>) {
    Array.prototype.push.apply(this.ingredients, ingredients);
  }

  removeIngredient(ingredient: Ingredient) {
    let index = this.ingredients.indexOf(ingredient, 0);
    if (index > -1) {
       this.ingredients.splice(index, 1);
    }
  }

  getTotal(): number {
    let total = baseprice;

    for (let i of this.ingredients) {
      total += i.price;
    }
    return total;
  }

}
