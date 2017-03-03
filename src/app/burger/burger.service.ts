import { Injectable } from '@angular/core';
import {IngredientService} from "../ingredient/ingredient.service";
import {SauceService} from "../sauce/sauce.service";
import {Ingredient} from "../ingredient/ingredient";
import {Sauce} from "../sauce/sauce";
import {Burger} from "./burger";
import {BURGERS} from "../mock-burger";

@Injectable()
export class BurgerService {

  constructor(private ingredientService: IngredientService, private sauceService: SauceService) { }



  // TODO: avoid duplicate ingredients
  // TODO: create random name
  getRandomBurger(): Promise<Burger> {
    let ingredients: Promise<Array<Ingredient>>;
    let sauces: Promise<Array<Sauce>>;

    const burger = new Burger('', []);
    // get ingredients
    ingredients = this.ingredientService.getIngredients().then( i => {
      console.log('-----> IngredientService.then()', i);
      let ingredientCount = Math.floor(Math.random() * i.length) + 1;
      let i_copy = i;
      let randomIngredients: Array<Ingredient> = [];
      for(let j = 0; j < ingredientCount; j++) {
        let randomIndex = Math.floor(Math.random() * i_copy.length);
        let ingredient = i_copy[randomIndex];
        randomIngredients.push(ingredient);
        i_copy = i_copy.filter((value => value != ingredient));
      }
      console.log('--> ingredients', randomIngredients);
      return randomIngredients;
    });
    // get sauces
    sauces = this.sauceService.getSauces().then( s => {
      let sauceCount = Math.floor(Math.random() * 2) + 1;
      let s_copy = s;
      let randomSauces: Array<Ingredient> = [];
      for(let i = 0; i < sauceCount; i++) {
        let randomIndex = Math.floor(Math.random() * s_copy.length);
        let sauce = s_copy[randomIndex];
        randomSauces.push(sauce);
        s_copy = s_copy.filter((value => value != sauce));
      }
      console.log('--> sauces', randomSauces);
      return randomSauces;
    });

    ingredients.then(i => {
      burger.addIngredients(i);
      console.log('--> addIngredients', i, burger);
    });
    sauces.then(s => {
      burger.addIngredients(s);
      console.log('--> addIngredients', s, burger);
    });

    return Promise.all([sauces, ingredients]).then(() => {
      console.log('--> return Promise', burger);
      return burger;
    });
  }

  getBurgerss(): Promise<Burger[]> {
    return Promise.resolve(BURGERS);
  };

}
