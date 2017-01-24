import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IngredientComponent } from './ingredient/ingredient/ingredient.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { BurgerComponent } from './burger/burger.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    IngredientComponent,
    BurgerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
