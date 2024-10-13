import { Component } from '@angular/core';
import { RecipeComponent } from "./recipe/recipe.component";

@Component({
  selector: 'app-recipes-tab',
  standalone: true,
  imports: [RecipeComponent],
  templateUrl: './recipes-tab.component.html',
  styleUrl: './recipes-tab.component.css'
})
export class RecipesTabComponent {

}
