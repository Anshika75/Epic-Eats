import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {
  // @Input() tag!: string;
  // add input with a default value
  @Input() tag = 'veg';
  @Input({required:true}) selected!: boolean;
  @Output() tagSelected = new EventEmitter<string>(); 

  onSelectedTag() {
    this.tagSelected.emit(this.tag); 
  }
}

