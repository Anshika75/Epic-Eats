import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FiltersTabComponent } from "./filters-tab/filters-tab.component";
import { RecipesTabComponent } from "./recipes-tab/recipes-tab.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FiltersTabComponent, RecipesTabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'epiceats';
}
