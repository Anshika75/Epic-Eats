import { Component } from '@angular/core';
import { RecipeType } from './models/recipe.model';
import { RecipeData } from './data/recipe';
import { CuisineType } from './models/cuisine.model';
import { CuisineData } from './data/cuisine';
import { HeaderComponent } from './header/header.component';
import { FiltersTabComponent } from './filters-tab/filters-tab.component';
import { RecipesTabComponent } from './recipes-tab/recipes-tab.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FiltersTabComponent, RecipesTabComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Recipe data
  recipes: RecipeType[] = RecipeData;
  cuisines: CuisineType[] = CuisineData;
  filteredRecipes: RecipeType[] = [...this.recipes]; // Start with all recipes

  // Filter states
  selectedCuisineTagId = ''; // Default cuisine filter
  selectedDietaryTagId = ''; // Default dietary filter
  cuisine = 0;
  dietary = 0;

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
    if(this.cuisine === 1 && this.dietary === 1) {
       this.filteredRecipes = this.recipes.filter(recipe => 
        (this.selectedDietaryTagId === '1' ? recipe.type === 'veg' : recipe.type === 'non-veg') &&
        (recipe.cuisine === this.cuisines.find(cuisine => cuisine.id === this.selectedCuisineTagId)?.name)
      );
    } else if(this.cuisine === 1 && this.dietary === 0) {
       this.filteredRecipes = this.recipes.filter(recipe => 
        recipe.cuisine === this.cuisines.find(cuisine => cuisine.id === this.selectedCuisineTagId)?.name
      );
    } else if(this.cuisine === 0 && this.dietary === 1) {
       this.filteredRecipes = this.recipes.filter(recipe => 
        (this.selectedDietaryTagId === '1' ? recipe.type === 'veg' : recipe.type === 'non-veg')
      );
    } else{
       this.filteredRecipes = [...this.recipes];
    }

  }

  clearAllFilters() {
    this.selectedCuisineTagId = ''; 
    this.selectedDietaryTagId = ''; 
    this.filteredRecipes = [...this.recipes];
  }

  onDeleteRecipe(recipeId: any) {
    console.log('Delete in AppComponent for recipe ID:', recipeId)
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
    this.filteredRecipes = this.recipes.filter(recipe => recipe.id !== recipeId); 
  }
}
