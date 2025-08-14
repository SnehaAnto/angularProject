import { Component } from '@angular/core';
import { DataGridComponent } from './data-grid/data-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataGridComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myDataArray = [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'London' },
    { name: 'Charlie', age: 35, city: 'Paris' }
  ];
}