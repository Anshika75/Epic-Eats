import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { RecipeType } from '../models/recipe.model';
import { CuisineType } from '../models/cuisine.model';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';

const DEFAULT_RECIPE: RecipeType = {
  name: '',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
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
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  @Input() cuisines: CuisineType[] = [];
  @Output() recipeCreated = new EventEmitter<RecipeType>();
  @Output() cancelAddForm: EventEmitter<void> = new EventEmitter<void>();
  @Output() recipeUpdated = new EventEmitter<RecipeType>();
  @Input() isEditing = false;
  @Input() recipe: RecipeType = { ...DEFAULT_RECIPE };

  recipeForm!: FormGroup;
  validationMessage: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      imagePath: [DEFAULT_RECIPE.imagePath],
      calories: [0, [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      type: ['veg', Validators.required],
      cuisine: ['', Validators.required],
      ingredients: this.fb.array([this.createIngredient()]),
      steps: this.fb.array([this.fb.control('', Validators.required)]),
      tags: this.fb.array([this.fb.control('', Validators.required)]),
      serves: [0, [Validators.required, Validators.min(1)]],
      timeTaken: ['', Validators.required],
      imgTag: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      isFavorite: [false],
      id: [''],
      date: [new Date()]
    });

    // Pre-populate form with existing recipe data if in edit mode
    if (this.isEditing && this.recipe) {
      this.setFormValues(this.recipe);
    }
  }

  createIngredient(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get steps(): FormArray {
    return this.recipeForm.get('steps') as FormArray;
  }

  get tags(): FormArray {
    return this.recipeForm.get('tags') as FormArray;
  }

  setFormValues(recipe: RecipeType) {
    this.recipeForm.patchValue(recipe);
    this.recipeForm.setControl('ingredients', this.fb.array(recipe.ingredients.map(ingredient => this.fb.group(ingredient))));
    this.recipeForm.setControl('steps', this.fb.array(recipe.steps.map(step => this.fb.control(step, Validators.required))));
    this.recipeForm.setControl('tags', this.fb.array(recipe.tags.map(tag => this.fb.control(tag, Validators.required))));
  }

  onAddIngredient() {
    const lastIngredient = this.ingredients.at(this.ingredients.length - 1);
    if (lastIngredient.get('name')?.value && lastIngredient.get('amount')?.value) {
      this.ingredients.push(this.createIngredient());
    } else {
      alert(this.validationMessage = 'Please fill in the current ingredient before adding a new one.');
    }
  }

  onDeleteIngredient(i: number) {
    if (this.ingredients.length > 1) {
      this.ingredients.removeAt(i);
    } else {
      alert(this.validationMessage = 'You must have at least one ingredient.');
    }
  }

  onAddStep() {
    const lastStep = this.steps.at(this.steps.length - 1);
    if (lastStep.value) {
      this.steps.push(this.fb.control('', Validators.required));
    } else {
      alert(this.validationMessage = 'Please fill in the current step before adding a new one.');
    }
  }

  onDeleteStep(i: number) {
    if (this.steps.length > 1) {
      this.steps.removeAt(i);
    } else {
      alert(this.validationMessage = 'You must have at least one step.');
    }
  }

  onAddTag() {
    const lastTag = this.tags.at(this.tags.length - 1);
    if (lastTag.value) {
      this.tags.push(this.fb.control('', Validators.required));
    } else {
      alert(this.validationMessage = 'Please fill in the current tag before adding a new one.');
    }
  }

  onDeleteTag(i: number) {
    if (this.tags.length > 1) {
      this.tags.removeAt(i);
    } else {
      alert(this.validationMessage = 'You must have at least one tag.');
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

  markAllAsTouched() {
    this.recipeForm.markAllAsTouched();
    this.ingredients.controls.forEach(control => control.markAsTouched());
    this.steps.controls.forEach(control => control.markAsTouched());
    this.tags.controls.forEach(control => control.markAsTouched());
  }

  displayValidationErrors() {
    const controls = this.recipeForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        alert(this.validationMessage = `Please fill in the ${name} field correctly.`);
        return;
      }
    }

    const ingredients = this.ingredients.controls;
    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i].invalid) {
        alert(this.validationMessage = `Please fill in the ingredient at position ${i + 1} correctly.`);
        return;
      }
    }

    const steps = this.steps.controls;
    for (let i = 0; i < steps.length; i++) {
      if (steps[i].invalid) {
        alert(this.validationMessage = `Please fill in the step at position ${i + 1} correctly.`);
        return;
      }
    }

    const tags = this.tags.controls;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].invalid) {
        alert(this.validationMessage = `Please fill in the tag at position ${i + 1} correctly.`);
        return;
      }
    }
  }

  onSubmit() {
    if (this.recipeForm.invalid) {
      this.markAllAsTouched();
      this.displayValidationErrors();
      return;
    }

    const recipe: RecipeType = this.recipeForm.value;

    if (this.isEditing) {
      this.recipeUpdated.emit(recipe);
    } else {
      recipe.id = uuidv4(); // Generate a unique ID for the new recipe
      recipe.date = new Date(); // Set the date to the current date when creating a new recipe
      this.recipeCreated.emit(recipe);
    }
    this.resetForm();
  }


  resetForm() {
    this.recipeForm.reset(DEFAULT_RECIPE);
    this.recipeForm.setControl('ingredients', this.fb.array([this.createIngredient()]));
    this.recipeForm.setControl('steps', this.fb.array([this.fb.control('', Validators.required)]));
    this.recipeForm.setControl('tags', this.fb.array([this.fb.control('', Validators.required)]));
    this.validationMessage = null;
  }

  onCancelAddForm() {
    this.cancelAddForm.emit();
  }
}