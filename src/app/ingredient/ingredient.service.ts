import { Injectable } from '@angular/core';
import {Ingredient} from "./ingredient";
import {INGREDIENTS} from "../mock-ingredients";

@Injectable()
export class IngredientService {

  constructor() { }

  getIngredients(): Promise<Ingredient[]> {
    return Promise.resolve(INGREDIENTS);
  };

}
