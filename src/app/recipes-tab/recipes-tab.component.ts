import { Component } from '@angular/core';
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeType } from '../models/recipe.model';
import { RecipeData } from '../data/recipe';

@Component({
  selector: 'app-recipes-tab',
  standalone: true,
  imports: [RecipeComponent],
  templateUrl: './recipes-tab.component.html',
  styleUrl: './recipes-tab.component.css'
})
export class RecipesTabComponent {
  recipes: RecipeType[] = RecipeData;
  
}