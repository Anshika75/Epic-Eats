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
  @Output() cancelAddForm: EventEmitter<void> = new EventEmitter<void>();

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
  onAddIngredient(i: number) {
    const currentIngredient = this.recipe.ingredients[i]; 

    if (!currentIngredient.name || !currentIngredient.amount) {
      alert('Please fill in both the ingredient name and amount.');
    } else {
      this.recipe.ingredients.push({ name: '', amount: '' });
    }
  }

  // Function to delete a specific ingredient
  onDeleteIngredient(i: number) {
    if (this.recipe.ingredients.length > 1) {
      this.recipe.ingredients.splice(i, 1);
    } else {
      alert('You must have at least one ingredient.');
    }
  }

  onAddStep(i: number) {
    const currentStep = this.recipe.steps[i];

    if (!currentStep) {
      alert('Please fill in the current step.');
    } else {
      this.recipe.steps.push('');
    }
  }

  // Function to onDelete a specific step
  onDeleteStep(i: number) {
    if (this.recipe.steps.length > 1) {
      this.recipe.steps.splice(i, 1);
    } else {
      alert('You must have at least one step.');
    }
  }

  onAddTag(i: number) {
    const currentTag = this.recipe.tags[i];

    if (!currentTag) {
      alert('Please fill in the current tag.');
    } else {
      this.recipe.tags.push('');
    }
  }

  // Function to delete a specific tag
  onDeleteTag(i: number) {
    if (this.recipe.tags.length > 1) {
      this.recipe.tags.splice(i, 1);
    } else {
      alert('You must have at least one tag.');
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

  // Validation and form submission logic remains the same
  onSubmit() {
    if (Number(this.recipe.calories) < 0 || Number(this.recipe.serves) < 0) {
      alert('Serves and calories cannot be negative numbers.');
      return;
    }

    if (
      !this.recipe.name ||
      !this.recipe.calories ||
      !this.recipe.description ||
      !this.recipe.type ||
      !this.recipe.cuisine ||
      !this.recipe.serves ||
      !this.recipe.timeTaken ||
      !this.recipe.ingredients.every(ingredient => ingredient.name && ingredient.amount) || 
      !this.recipe.steps.every(step => step)
    ) {
      alert('All fields except Image Path must be filled.');
      return;
    }

    const numberPattern = /\d/;
    if (this.recipe.tags.some(tag => numberPattern.test(tag)) || numberPattern.test(this.recipe.imgTag)) {
      alert('Tags and Image Tag cannot contain numbers.');
      return;
    }

    const wordCount = this.recipe.description.trim().split(/\s+/).length;
    if (wordCount > 200) {
      alert('Description cannot exceed 200 words.');
      return;
    }

    this.recipeCreated.emit(this.recipe);
    this.resetForm();
  }

  resetForm() {
    this.recipe = {
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
  }

  onCancelAddForm(){
    this.cancelAddForm.emit();
  }
}

