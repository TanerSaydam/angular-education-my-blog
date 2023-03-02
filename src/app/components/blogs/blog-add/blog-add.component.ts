import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogModel } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';
import { EditorConfig } from 'src/app/settings/editor';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent {
  blog: BlogModel = new BlogModel();
  categories: string[] = ["Orman","Genel","Konu Dışı","Yazılım"];
  editorConfig = EditorConfig;
  apiUrl: string = "http://localhost:3000/blogs";
  
  
  

  constructor(
    public _blog: BlogService,
    private _http: HttpClient
  ) { 

    let model: BlogModel = {      
      id: 0,
      title: "Ağaçlar ve Orman",
      category: "Orman",
      content: "<p>bilgi payla&#351;&#305;m&#305;n&#305; ama&#231;lamaktad&#305;r. Dergi bu kapsamda &#246;zg&#252;n, g&#252;ndemde olan ve sonu&#231;lar&#305; k&#305;sa s&#252;rede uygulamaya ge&#231;irilebilecek konulara &#246;ncelik vermektedir.</p><p></p><div><span>A&#287;a&#231; ve Orman;</span></div><div><br></div><div><span>- Orman M&#252;hendisli&#287;i,</span></div><div><br></div><div><span>- Orman End&#252;stri M&#252;hendisli&#287;i ve</span></div><div><br></div><div><span>- Peyzaj Mimarl&#305;&#287;&#305;</span></div><div><br></div><div><span>bilimleri ve alt bilimleri ile bu bilimlerle do&#287;rudan veya dolayl&#305; olarak ilgili olan di&#287;er konular&#305; kapsar. Bu kapsamda daha &#246;nce k&#305;smen veya tam metni ba&#351;ka herhangi bir yay&#305;n organ&#305;nda yay&#305;mlanmam&#305;&#351;, sanayinin ve uygulama birimlerinin ilgi ve ihtiya&#231; duydu&#287;u konular yay&#305;na kabul edilecektir.</span></div>",
      createdDate: "Sun Feb 26 2023 11:48:16 GMT+0300 (GMT+03:00)"
    }

    for (let i = 0; i < 10; i++) {      
      model.id = i;

      this._http.post<BlogModel>(this.apiUrl,model).subscribe(res=>{});
    }



  }

  add(form: NgForm) {
    if (form.valid) {
      this._blog.add(this.blog, () => {
        this.blog = new BlogModel();
      });
    }
  }
}
