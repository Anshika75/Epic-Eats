import { Component, Input } from '@angular/core';
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeType } from '../models/recipe.model';
import { RecipeData } from '../data/recipe';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipes-tab',
  standalone: true,
  imports: [RecipeComponent],
  templateUrl: './recipes-tab.component.html',
  styleUrl: './recipes-tab.component.css'
})
export class RecipesTabComponent {
  @Input() recipes: RecipeType[] = [];
  onDeleteRecipe(recipeId: number) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId.toString());
  }
}
