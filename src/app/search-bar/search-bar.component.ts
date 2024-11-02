import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'] 
})
export class SearchBarComponent {
  searchTerm: string = ''; 

  @Output() searchTermChange = new EventEmitter<string>(); 

  onSearch(): void {
    this.searchTermChange.emit(this.searchTerm);
  }
}
