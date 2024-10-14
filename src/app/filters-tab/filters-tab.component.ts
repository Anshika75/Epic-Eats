import { CuisineType } from './../models/cuisine.model';
import { Component } from '@angular/core';
import { TagComponent } from './tag/tag.component';
import { CuisineData } from '../data/cuisine';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-filters-tab',
  standalone: true,
  imports: [TagComponent],
  templateUrl: './filters-tab.component.html',
  styleUrl: './filters-tab.component.css'
})
export class FiltersTabComponent {
  dietaryTypes = [{ id: '1', name: 'Veg' }, { id: '2', name: 'Non-Veg' }];
  cuisines: CuisineType[] = CuisineData; 
  selectedCuisineTagId = '1';
    onSelectedCuisineTag(tagId: string) {
      this.selectedCuisineTagId = tagId;
    }
    selectedDietaryTagId = '1';
      onSelectedDietaryTag(tagId: string) {
        this.selectedDietaryTagId = tagId;
      }
}
