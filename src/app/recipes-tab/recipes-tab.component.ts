import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() deleteRecipe = new EventEmitter<string>();
  onDeleteRecipe(recipeId: string) { 
    this.deleteRecipe.emit(recipeId); // Emit the recipe ID to the parent
  }
}
