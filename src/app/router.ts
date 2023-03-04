import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadComponent: ()=> import("./components/layouts/layouts.component").then(c=> c.LayoutsComponent),
        children: [
            {
                path: "",                
                loadComponent: ()=> import("./components/home/home.component").then(c => c.HomeComponent)
            },
            {
                path:"login",                
                loadComponent: ()=> import("./components/login/login.component").then(c=> c.LoginComponent)
            },
            {
                path:"register",                
                loadComponent: ()=> import("./components/register/register.component").then(c=> c.RegisterComponent)
            },
            {
                path: "blogs",                
                loadComponent: ()=> import("./components/blogs/blogs.component").then(c=> c.BlogsComponent)
            }, 
            {
                path: "blogs/add",
                loadComponent: ()=> import("./components/blogs/blog-add/blog-add.component").then(c=> c.BlogAddComponent)
            },
            {
                path: "blogs/detail/:id",
                loadComponent: ()=> import("./components/blogs/blog-detail/blog-detail.component").then(c=> c.BlogDetailComponent)
            },
            {
                path: "about",
                loadComponent:()=> import("./components/about/about.component").then(c=> c.AboutComponent)
            }           
        ]
    }
]