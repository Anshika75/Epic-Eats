import { Injectable } from '@angular/core';
import { RecipeType } from '../models/recipe.model';  // Importing RecipeType interface
import { CuisineType } from '../models/cuisine.model';
import RecipeData from '../data/recipe';  // Importing sample recipe data
import { CuisineData } from '../data/cuisine';  // Importing sample cuisine data
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  // Fetch all recipes
  getRecipes(): Observable<RecipeType[]> {
    return of(RecipeData);  // Using imported recipe data
  }

  // Fetch all cuisines
  getCuisines(): Observable<CuisineType[]> {
    return of(CuisineData);  // Using imported cuisine data
  }

  // Filter recipes by cuisine
  getRecipesByCuisine(cuisine: string): Observable<RecipeType[]> {
    return of(RecipeData.filter(recipe => recipe.cuisine === cuisine));
  }

  // Filter recipes by dietary preference
  getRecipesByDietary(type: 'veg' | 'non-veg'): Observable<RecipeType[]> {
    return of(RecipeData.filter(recipe => recipe.type === type));
  }
}
