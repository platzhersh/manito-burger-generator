import { Injectable } from '@angular/core';
import {Sauce} from "./sauce";
import {SAUCES} from "../mock-sauces";

@Injectable()
export class SauceService {

  constructor() { }

  getSauces(): Promise<Sauce[]> {
    return Promise.resolve(SAUCES);
  };

}
