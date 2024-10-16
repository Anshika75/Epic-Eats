import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() favoriteCount: number = 0;
  @Output() toggleFavorites: EventEmitter<void> = new EventEmitter<void>();
  @Output() addForm: EventEmitter<void> = new EventEmitter<void>();
  
  isFavoritesActive: boolean = false;


  onToggleFavorites() {
    this.isFavoritesActive = !this.isFavoritesActive;
    this.toggleFavorites.emit();
  }

  onAddForm() {
    this.addForm.emit();
  }
}
