import { CuisineType } from './../models/cuisine.model';
import { Component } from '@angular/core';
import { TagComponent } from './tag/tag.component';
import { CuisineData } from '../data/cuisine';

@Component({
  selector: 'app-filters-tab',
  standalone: true,
  imports: [TagComponent],
  templateUrl: './filters-tab.component.html',
  styleUrl: './filters-tab.component.css'
})
export class FiltersTabComponent {
  dietaryTypes = [{ id: 'veg', name: 'Veg' }, { id: 'non-veg', name: 'Non-Veg' }];
  cuisines: CuisineType[] = CuisineData; 
}
