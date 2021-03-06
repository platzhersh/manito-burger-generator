import { Injectable } from '@angular/core';
import { Sauce } from "../../shared/models/sauce/sauce";
import { SAUCES } from "../../../assets/mocks/mock-sauces";

@Injectable()
export class SauceService {

  constructor() {
  }

  getSauces(): Promise<Sauce[]> {
    return Promise.resolve(SAUCES);
  };

}
