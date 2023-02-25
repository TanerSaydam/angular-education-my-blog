import { Component, OnInit } from '@angular/core';
import { BlogModel } from 'src/app/models/blog.model';
import { AuthService } from 'src/app/services/auth.service';
import { BlogService } from 'src/app/services/blog.service';
import { SwalService } from 'src/app/services/swal.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: BlogModel[] = [];
  constructor(
    public _auth: AuthService,
    public _blog: BlogService,
    private _swal: SwalService
  ){
    _auth.checkIsAdmin();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this._blog.getAll().subscribe(res=>{
      this.blogs = res;
    })
  }

  delete(id: number){
    this._swal.toastSwal();
    // this._swal.callSwal("Sil?","Blog yazısını silmek istiyor musunuz?",()=>{
    //   this._blog.delete(id, ()=> {
    //     this.getAll();
    //   })
    // })
  }
}
