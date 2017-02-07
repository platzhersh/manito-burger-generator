import { Ingredient } from '../ingredient/ingredient'

export class Burger {
  name: string;
  ingredients: Array<Ingredient>;

  // a simple constructor.
  constructor(name: string, ingredients: Array<Ingredient>) {
    this.name = name;
    this.ingredients = ingredients;
  }

}
