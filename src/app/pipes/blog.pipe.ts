import { Pipe, PipeTransform } from '@angular/core';
import { BlogModel } from '../models/blog.model';

@Pipe({
  name: 'blog'
})
export class BlogPipe implements PipeTransform {

  transform(value: any[], search: string): any[] {
    if(search == "")
      return value;

    return value.filter(p=> {
      const title = p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
      const category = p.category.toLocaleLowerCase().includes(search.toLocaleLowerCase());

      return title + category
    })
  }

}
