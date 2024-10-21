import { Component, OnInit } from '@angular/core';
import { RecipeType } from './models/recipe.model';
import RecipeData from './data/recipe';
import { CuisineType } from './models/cuisine.model';
import { CuisineData } from './data/cuisine';
import { HeaderComponent } from './header/header.component';
import { FiltersTabComponent } from './filters-tab/filters-tab.component';
import { RecipesTabComponent } from './recipes-tab/recipes-tab.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, 
    FiltersTabComponent, 
    RecipesTabComponent, 
    RecipeFormComponent, 
    CommonModule,   
    RecipeDetailsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  recipes: RecipeType[] = [];
  cuisines: CuisineType[] = CuisineData;
  filteredRecipes: RecipeType[] = []; 
  selectedCuisineTagId = ''; 
  selectedDietaryTagId = ''; 
  cuisine = 0;
  dietary = 0;
  showFavorites = false;
  showRecipeForm = false; 
  selectedRecipe: RecipeType | null = null; 
  recipeBeingEdited!: RecipeType;
  isEditing: boolean = false; 

  ngOnInit() {
    if(typeof(Storage) !== 'undefined') {
      const storedRecipes = localStorage.getItem('recipes');
    
    if (storedRecipes) {
      this.recipes = JSON.parse(storedRecipes);
    } else {
      this.recipes = RecipeData;
    }}
    this.filteredRecipes = [...this.recipes];
  }

  onEditRecipe(recipe: RecipeType) {
    this.recipeBeingEdited = recipe;
    this.showRecipeForm = true;
    this.isEditing = true;
    this.selectedRecipe = recipe;
  }

  onRecipeUpdated(updatedRecipe: RecipeType) {
    this.showRecipeForm = false;
    const index = this.recipes.findIndex(r => r.id === updatedRecipe.id);
    if (index > -1) {
      this.recipes[index] = { ...updatedRecipe };
      this.recipes = [...this.recipes];  // Reassign array
      this.filteredRecipes = [...this.recipes];  // Ensure filteredRecipes also gets updated
      this.selectedRecipe = updatedRecipe;
      localStorage.setItem('recipes', JSON.stringify(this.recipes)); // Save to local storage
    }
  }

  cancelEdit() {
    this.showRecipeForm = false;
    this.isEditing = false;
  }

  onRecipeSelected(recipe: RecipeType) {
    this.selectedRecipe = recipe;
  }

  onBackToRecipes() {
    this.selectedRecipe = null;
  }

  addRecipeForm() {
    this.showRecipeForm = true;
    this.selectedRecipe = null;
  }

  cancelAddForm() {
    this.showRecipeForm = false;
  }

  onRecipeCreated(newRecipe: RecipeType) {
    this.recipes.push(newRecipe);
    this.filteredRecipes = [...this.recipes]; 
    this.showRecipeForm = false;
    localStorage.setItem('recipes', JSON.stringify(this.recipes)); // Save to local storage
  }

  get favoriteCount(): number {
    return this.recipes.filter(recipe => recipe.isFavorite).length;
  }

  onSelectedCuisineTag(tagId: string) {
    this.selectedCuisineTagId = tagId;
    this.cuisine = 1;
    this.filterRecipes();
  }

  onSelectedDietaryTag(tagId: string) {
    this.selectedDietaryTagId = tagId;
    this.dietary = 1;
    this.filterRecipes();
  }

  filterRecipes() {
    this.filteredRecipes = this.recipes.filter(recipe => {
      const matchesCuisine = this.cuisine === 0 || recipe.cuisine === this.cuisines.find(cuisine => cuisine.id === this.selectedCuisineTagId)?.name;
      const matchesDietary = this.dietary === 0 || (this.selectedDietaryTagId === '1' ? recipe.type === 'veg' : recipe.type === 'non-veg');
      const matchesFavorites = !this.showFavorites || recipe.isFavorite;
      return matchesCuisine && matchesDietary && matchesFavorites;
    });
  }

  clearAllFilters() {
    this.selectedCuisineTagId = ''; 
    this.selectedDietaryTagId = ''; 
    this.cuisine = 0;
    this.dietary = 0;
    this.filterRecipes();
  }

  onDeleteRecipe(recipeId: any) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
    this.filterRecipes();
    localStorage.setItem('recipes', JSON.stringify(this.recipes)); // Update local storage
  }

  onToggleFavorite(recipeId: any) {
    const foundRecipe = this.recipes.find(recipe => recipe.id === recipeId);
    if (foundRecipe) {
      foundRecipe.isFavorite = !foundRecipe.isFavorite;
      localStorage.setItem('recipes', JSON.stringify(this.recipes)); // Update local storage
    }
    this.filterRecipes();
  }

  toggleFavorites() {
    this.showFavorites = !this.showFavorites;
    this.filterRecipes();
  }
}
