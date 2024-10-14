import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  // @Input() recipeName = 'Spaghetti Bolognese';
  // @Input() description = 'A delicious and easy spaghetti bolognese recipe that the whole family will love.';
  // @Input() imageUrl = 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg';
  // @Input() tags = ['beef', 'pasta'];
  // @Input() imgTag = 'Main Course';
  // @Input() calories = '527 kcal';
  // @Input() time = '30 min';
  // @Input() servings = '4 servings';
  // @Input() date = '12/11/21';

  @Input() recipe: any;

  
  trimDescription(description: string): string {
    return description.length > 100 ? description.substring(0, 100) + '...' : description;
  }
}
