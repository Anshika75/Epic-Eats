import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  trimDescription(description: string): string {
    return description.length > 100 ? description.substring(0, 100) + '...' : description;
  }
}
