import { Component } from '@angular/core';
import { BlogModel } from 'src/app/models/blog.model';
import { AuthService } from 'src/app/services/auth.service';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  constructor(
    public _auth: AuthService,
    public _blog: BlogService
  ){
    _auth.checkIsAdmin();
  }

  delete(id: number){
    let result = confirm("Blog yazısını silmek istiyor musunuz?");
    if(result)
      this._blog.delete(id);
  }
}
