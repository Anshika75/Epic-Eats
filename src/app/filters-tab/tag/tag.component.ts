import { Component, Input, Output, EventEmitter } from '@angular/core';

export type TagType = {
  id: string;
  name: string;
}
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
  @Input({ required: true }) tag!: TagType;
  @Input({required:true}) selected!: boolean;
  @Output() tagSelected = new EventEmitter<string>(); 

  onSelectedTag() {
    this.tagSelected.emit(this.tag.id); 
  }
}

