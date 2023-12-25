import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter',
})
export class UserFilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter(
      (item) =>
        item.id.includes(searchTerm) ||
        item.status.toLowerCase().includes(searchTerm) ||
        (item.firstName + ' ' + item.lastName).toLowerCase().includes(searchTerm) || 
        item.role.toLowerCase().includes(searchTerm)
    );
  }
}
