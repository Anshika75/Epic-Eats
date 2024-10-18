import { CommonModule, DatePipe, } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { RecipeType } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  // @Input() recipeName = 'Spaghetti Bolognese';
  // @Input() description = 'A delicious and easy spaghetti bolognese recipe that the whole family will love.';
  // @Input() imageUrl = 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg';
  // @Input() tags = ['beef', 'pasta'];
  // @Input() imgTag = 'Main Course';
  // @Input() calories = '527 kcal';
  // @Input() time = '30 min';
  // @Input() servings = '4 servings';
  // @Input() date = '12/11/21';
  @Output() deleteRecipe = new EventEmitter<string>();
  @Output() toggleFavorite = new EventEmitter<number>();

  @Input() recipe: any;

  @Output() selectRecipe = new EventEmitter<RecipeType>();

  onSelectRecipe() {
    this.selectRecipe.emit(this.recipe);
  }

  trimDescription(description: string): string {
    return description.length > 70 ? description.substring(0, 70) + '...' : description;
  } 

  onDelete() {
    console.log('Delete clicked for recipe:', this.recipe.id);
    this.deleteRecipe.emit(this.recipe.id); // Emit the recipe ID to the parent
  }

  onToggleFavorite() {
    this.toggleFavorite.emit(this.recipe.id);
  }

  isFavorited() {
    return this.recipe.isFavorite;
  }
}

