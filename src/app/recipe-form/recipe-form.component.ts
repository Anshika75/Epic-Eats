import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeType } from '../models/recipe.model';
import { CuisineType } from '../models/cuisine.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {
  @Input() cuisines: CuisineType[] = [];
  @Output() recipeCreated = new EventEmitter<RecipeType>();

  recipe: RecipeType = {
    name: '',
    imagePath: '',
    calories: 0,
    description: '',
    type: 'veg', 
    cuisine: '',
    ingredients: [{ name: '', amount: '' }], 
    steps: [''], 
    tags: [''], 
    date: new Date(),
    serves: 0,
    timeTaken: '',
    imgTag: '',
    isFavorite: false,
    id: ''
  };

  // Check if the current ingredient fields are filled before adding a new one
  addIngredient(i: number) {
    const currentIngredient = this.recipe.ingredients[i]; // Validate current input field

    // Ensure both 'name' and 'amount' are filled for the current ingredient
    if (!currentIngredient.name || !currentIngredient.amount) {
      alert('Please fill in both the ingredient name and amount.');
    } else {
      // If valid, add a new empty ingredient field
      this.recipe.ingredients.push({ name: '', amount: '' });
    }
  }


  addStep(i: number) {
    const currentStep = this.recipe.steps[i]; // Validate current input field
    
    if (!currentStep) {
      alert('Please fill in the current step.');
    } else {
      this.recipe.steps.push(''); // If valid, add a new empty step field
    }
  }

  addTag(i: number) {
    const currentTag = this.recipe.tags[i]; // Validate current input field

    if (!currentTag) {
      alert('Please fill in the current tag.');
    } else {
      this.recipe.tags.push(''); // If valid, add a new empty tag field
    }
  }

  trackByIndex(index: number): number {
    return index;
  }
  
  onSubmit() {
    this.recipeCreated.emit(this.recipe);
  }
}
