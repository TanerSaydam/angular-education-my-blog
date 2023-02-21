import { Injectable } from '@angular/core';
import { BlogModel } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: BlogModel[] = [];
  constructor() { 
    for (let i = 0; i < 10; i++) {
      let model:BlogModel = {
        id: i,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus laboriosam dicta veritatis fugit ad ducimus, quidem provident perferendis, nulla repudiandae? In, velit veritatis. Nesciunt qui quaerat dolore ipsa laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus laboriosam dicta veritatis fugit ad ducimus, quidem provident perferendis, nulla repudiandae? In, velit veritatis. Nesciunt qui quaerat dolore ipsa laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus laboriosam dicta veritatis fugit ad ducimus, quidem provident perferendis, nulla repudiandae? In, velit veritatis. Nesciunt qui quaerat dolore ipsa laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus laboriosam dicta veritatis fugit ad ducimus, quidem provident perferendis, nulla repudiandae? In, velit veritatis. Nesciunt qui quaerat dolore ipsa laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus laboriosam dicta veritatis fugit ad ducimus, quidem provident perferendis, nulla repudiandae? In, velit veritatis. Nesciunt qui quaerat dolore ipsa laboriosam.",
        title: "Başlık " + i,
        createdDate: new Date().toString()
      };

      this.blogs.push(model);
    } 
  }

  delete(id: number){
    let index = this.blogs.findIndex(p=> p.id == id);
    this.blogs.splice(index,1);
  }

  add(model: BlogModel){
    this.blogs.push(model);
  }
}
