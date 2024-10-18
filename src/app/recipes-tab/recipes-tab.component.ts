import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeType } from '../models/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes-tab',
  standalone: true,
  imports: [RecipeComponent, CommonModule],
  templateUrl: './recipes-tab.component.html',
  styleUrl: './recipes-tab.component.css'
})
export class RecipesTabComponent {
  @Input() recipes: RecipeType[] = [];
  @Output() deleteRecipe = new EventEmitter<string>();
  @Output() toggleFavorite = new EventEmitter<number>();
  @Output() recipeSelected = new EventEmitter<RecipeType>(); 

  onDeleteRecipe(recipeId: string) { 
    console.log('Delete event received for recipe ID:', recipeId);
    this.deleteRecipe.emit(recipeId); // Emit the recipe ID to the parent
  }

  onToggleFavorite(recipeId: number) {
    this.toggleFavorite.emit(recipeId);
  }

  onRecipeSelected(recipe: RecipeType) {
    this.recipeSelected.emit(recipe);  // Emit selected recipe to parent component
  }
}

