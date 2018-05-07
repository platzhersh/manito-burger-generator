import { Injectable } from '@angular/core';
import {Ingredient} from "../../models/ingredient";
import {INGREDIENTS} from "../../../assets/mocks/mock-ingredients";

@Injectable()
export class IngredientService {

  constructor() { }

  getIngredients(): Promise<Ingredient[]> {
    return Promise.resolve(INGREDIENTS);
  };

}
