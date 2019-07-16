import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { IngredientService } from './core/ingredient/ingredient.service';
import { SauceService } from './core/sauce/sauce.service';
import { BurgerService } from './core/burger/burger.service';
import { BurgerComponent } from "./shared/components/burger/burger.component";
import { IngredientComponent } from "./shared/components/ingredient/ingredient.component";

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    BurgerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    IngredientService,
    SauceService,
    BurgerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
