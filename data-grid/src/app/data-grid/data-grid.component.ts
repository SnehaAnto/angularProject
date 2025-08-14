import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})

export class DataGridComponent {
  @Input() data: any[] = [];

  filterControl = new FormControl('');
  sortKey: string = '';
  sortAsc: boolean = true;

  get columns(): string[] {
    return this.data.length ? Object.keys(this.data[0]) : [];
  }

  sortBy(key: string) {
    if (this.sortKey === key) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortKey = key;
      this.sortAsc = true;
    }
  }
}