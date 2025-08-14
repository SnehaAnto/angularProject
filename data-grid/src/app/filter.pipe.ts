 import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(array: any[], filterText: string): any[] {
    if (!Array.isArray(array) || !filterText) return array;
    filterText = filterText.toLowerCase();
    return array.filter(row =>
      Object.values(row).some(
        val => val && val.toString().toLowerCase().includes(filterText)
      )
    );
  }
}