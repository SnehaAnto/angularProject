import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
  transform(array: any[], sortKey: string, asc: boolean = true): any[] {
    if (!Array.isArray(array) || !sortKey) return array;
    const sorted = [...array].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return asc ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return asc ? 1 : -1;
      return 0;
    });
    return sorted;
  }
}