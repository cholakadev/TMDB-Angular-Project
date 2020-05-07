import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviesFilter',
})
export class MoviesFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (items && items.length) {
      return items.filter((item) => {
        if (
          searchText &&
          item.title.toLowerCase().indexOf(searchText.toLowerCase()) === -1
        ) {
          return false;
        }
        return true;
      });
    } else {
      return items;
    }
  }
}
