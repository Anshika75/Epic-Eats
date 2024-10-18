import { Component } from '@angular/core';
import { RecipeType } from './models/recipe.model';
import { RecipeData } from './data/recipe';
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
  imports: [HeaderComponent, FiltersTabComponent, RecipesTabComponent, RecipeFormComponent, CommonModule, RecipeDetailsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: RecipeType[] = RecipeData;
  cuisines: CuisineType[] = CuisineData;
  filteredRecipes: RecipeType[] = [...this.recipes]; 
  selectedCuisineTagId = ''; 
  selectedDietaryTagId = ''; 
  cuisine = 0;
  dietary = 0;
  showFavorites = false;
  showRecipeForm = false; 

   addRecipeForm() {
    this.showRecipeForm = true;
  }
  cancelAddForm() {
    this.showRecipeForm = false;
  }

  onRecipeCreated(newRecipe: RecipeType) {
    this.recipes.push(newRecipe);
    this.filteredRecipes = [...this.recipes]; 
    this.showRecipeForm = false;
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

  // Updated filterRecipes function to handle favorites along with cuisine and dietary filters
  filterRecipes() {
    this.filteredRecipes = this.recipes.filter(recipe => {
      // Apply the cuisine filter if one is selected
      const matchesCuisine = this.cuisine === 0 || recipe.cuisine === this.cuisines.find(cuisine => cuisine.id === this.selectedCuisineTagId)?.name;
      
      // Apply the dietary filter if one is selected
      const matchesDietary = this.dietary === 0 || (this.selectedDietaryTagId === '1' ? recipe.type === 'veg' : recipe.type === 'non-veg');
      
      // Apply the favorites filter if toggled
      const matchesFavorites = !this.showFavorites || recipe.isFavorite;
      
      // Return recipes that match all filters
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
  }

  onToggleFavorite(recipeId: any) {
    const foundRecipe = this.recipes.find(recipe => recipe.id === recipeId);
    if (foundRecipe) {
      foundRecipe.isFavorite = !foundRecipe.isFavorite;
    }
    this.filterRecipes();
  }

  // New function to toggle the favorite filter
  toggleFavorites() {
    this.showFavorites = !this.showFavorites;
    this.filterRecipes();
  }
}
