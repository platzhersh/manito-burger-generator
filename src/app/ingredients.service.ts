import { Injectable } from '@angular/core';

@Injectable()
export class IngredientsService {

  let ingredients = [
  	"Jalapenos",
	"Cheddar",
	"Raclette",
	"Gruyere",
	"Ei",
	"Speck",
	"Chapignons",
	"Karamelisierte Zwiebeln"
  ];

  let sauces = [
  	"Hausgemachte Mayo",
	"Hausgemachte Guacamole",
	"Hausgemachte scharfe Sauce",
	"BBQ Sauce",
	"Café de Paris",
	"Mayo",
	"Ketchup"
  ];
  let specials = [
  	"Extra Fleisch (+170g)",
  ];

  constructor() { }

}
