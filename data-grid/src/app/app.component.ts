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
    { Name: 'Alice', Age: 30, City: 'New York' },
    { Name: 'Bob', Age: 25, City: 'London' },
    { Name: 'Charlie', Age: 35, City: 'Paris' }
  ];
}