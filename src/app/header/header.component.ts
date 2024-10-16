import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() favoriteCount: number = 0; // Receive the count of favorite recipes from the parent
  @Output() toggleFavorites: EventEmitter<void> = new EventEmitter<void>(); // Emit event for toggling favorites
  
  isFavoritesActive: boolean = false; // Track if the favorite filter is active

  onToggleFavorites() {
    this.isFavoritesActive = !this.isFavoritesActive; // Toggle the heart icon's active state
    this.toggleFavorites.emit(); // Emit the event to inform parent to filter the recipes
  }
}
