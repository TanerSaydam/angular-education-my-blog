import { Routes } from "@angular/router";
import { BlogAddComponent } from "./components/blogs/blog-add/blog-add.component";
import { BlogDetailComponent } from "./components/blogs/blog-detail/blog-detail.component";
import { BlogsComponent } from "./components/blogs/blogs.component";
import { HomeComponent } from "./components/home/home.component";
import { LayoutsComponent } from "./components/layouts/layouts.component";
import { LoginComponent } from "./components/login/login.component";

export const routes: Routes = [
    {
        path: "",
        component: LayoutsComponent,
        children: [
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "login",
                component: LoginComponent
            },
            {
                path: "blogs",
                children: [
                    {
                        path: "",
                        component: BlogsComponent
                    },
                    {
                        path: "add",
                        component: BlogAddComponent
                    },
                    {
                        path: ":id",
                        component: BlogDetailComponent
                    },
                    
                ]               
            }            
        ]
    }
]