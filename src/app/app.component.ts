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
  title = 'epiceats';

  // Recipe data
  recipes: RecipeType[] = RecipeData;
  filteredRecipes: RecipeType[] = [...this.recipes]; // Start with all recipes

  // Filter states
  selectedCuisineTagId = '1'; // Default cuisine filter
  selectedDietaryTagId = '1'; // Default dietary filter

  onSelectedCuisineTag(tagId: string) {
    this.selectedCuisineTagId = tagId;
    this.filterRecipes();
  }

  onSelectedDietaryTag(tagId: string) {
    this.selectedDietaryTagId = tagId;
    this.filterRecipes();
  }

  filterRecipes() {
    this.filteredRecipes = this.recipes.filter(recipe => 
      (this.selectedDietaryTagId === '1' ? recipe.type === 'veg' : recipe.type === 'non-veg') &&
      (recipe.cuisine === this.selectedCuisineTagId)
    );
  }
}
