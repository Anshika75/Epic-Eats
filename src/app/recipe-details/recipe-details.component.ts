import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RecipeType } from '../models/recipe.model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
  imports: [CommonModule, DatePipe],
})
export class RecipeDetailsComponent {
  @Input() recipe: RecipeType | undefined;
  @Output() backToRecipes = new EventEmitter<void>();
  @Output() toggleFavorite = new EventEmitter<any>();
  
  onToggleFavorite() {  
    this.toggleFavorite.emit(this?.recipe?.id);
  }

  isFavorited() {
    return this.recipe ? this.recipe.isFavorite : false;
  }

  onBackClick() {
    this.backToRecipes.emit();
  }
}
