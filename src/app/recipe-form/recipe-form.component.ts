import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeType } from '../models/recipe.model';
import { CuisineType } from '../models/cuisine.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const DEFAULT_RECIPE: RecipeType = {
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

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  @Input() cuisines: CuisineType[] = [];
  @Output() recipeCreated = new EventEmitter<RecipeType>();
  @Output() cancelAddForm: EventEmitter<void> = new EventEmitter<void>();
  @Output() recipeUpdated = new EventEmitter<RecipeType>();
  @Input() isEditing = false;

  // Initialize with a default recipe structure
  @Input() recipe: RecipeType = { ...DEFAULT_RECIPE };

  ngOnInit() {
    // Pre-populate form with existing recipe data if in edit mode
    if (this.recipe) {
      this.recipe = { ...this.recipe };
    } else {
      this.recipe = { ...DEFAULT_RECIPE };
    }
  }

  // Add a new ingredient field
  onAddIngredient(i: number) {
    const currentIngredient = this.recipe.ingredients[i];
    if (!currentIngredient.name || !currentIngredient.amount) {
      alert('Please fill in both the ingredient name and amount.');
    } else {
      this.recipe.ingredients.push({ name: '', amount: '' });
    }
  }

  // Delete a specific ingredient
  onDeleteIngredient(i: number) {
    if (this.recipe.ingredients.length > 1) {
      this.recipe.ingredients.splice(i, 1);
    } else {
      alert('You must have at least one ingredient.');
    }
  }

  // Add a new step field
  onAddStep(i: number) {
    const currentStep = this.recipe.steps[i];
    if (!currentStep) {
      alert('Please fill in the current step.');
    } else {
      this.recipe.steps.push('');
    }
  }

  // Delete a specific step
  onDeleteStep(i: number) {
    if (this.recipe.steps.length > 1) {
      this.recipe.steps.splice(i, 1);
    } else {
      alert('You must have at least one step.');
    }
  }

  // Add a new tag field
  onAddTag(i: number) {
    const currentTag = this.recipe.tags[i];
    if (!currentTag) {
      alert('Please fill in the current tag.');
    } else {
      this.recipe.tags.push('');
    }
  }

  // Delete a specific tag
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

  // Form submission logic with validation
  onSubmit() {
    // Check for negative values
    if (Number(this.recipe.calories) < 0 || Number(this.recipe.serves) < 0) {
      alert('Serves and calories cannot be negative numbers.');
      return;
    }

    // Validate required fields
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

    // Ensure tags and imgTag do not contain numbers
    const numberPattern = /\d/;
    if (this.recipe.tags.some(tag => numberPattern.test(tag)) || numberPattern.test(this.recipe.imgTag)) {
      alert('Tags and Image Tag cannot contain numbers.');
      return;
    }

    // Limit description to 200 words
    const wordCount = this.recipe.description.trim().split(/\s+/).length;
    if (wordCount > 200) {
      alert('Description cannot exceed 200 words.');
      return;
    }

    // Emit the recipe data
    if (this.isEditing) {
      this.recipeUpdated.emit(this.recipe);
    } else {
      this.recipeCreated.emit(this.recipe);
    }
    this.resetForm();
  }

  // Reset form to initial state
  resetForm() {
    this.recipe = { ...DEFAULT_RECIPE };
  }

  // Handle form cancellation
  onCancelAddForm() {
    this.cancelAddForm.emit();
  }
}
