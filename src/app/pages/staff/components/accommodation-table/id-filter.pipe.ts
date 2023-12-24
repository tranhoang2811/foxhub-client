import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idFilter',
})
export class IdFilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter(
      (item) =>
        item.id.includes(searchTerm) ||
        item.ownerName.toLowerCase().includes(searchTerm) ||
        item.status.toLowerCase().includes(searchTerm)
    );
  }
}
