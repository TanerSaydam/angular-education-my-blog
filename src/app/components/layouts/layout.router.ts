import { Routes } from "@angular/router";
import { AboutUpdateComponent } from "../about/about-update/about-update.component";
import { AboutComponent } from "../about/about.component";
import { BlogAddComponent } from "../blogs/blog-add/blog-add.component";
import { BlogDetailComponent } from "../blogs/blog-detail/blog-detail.component";
import { BlogsComponent } from "../blogs/blogs.component";
import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { LayoutsComponent } from "./layouts.component";

export const layoutsRoutes: Routes = [
    {
        path: "",
        component: LayoutsComponent,
        children: [
            {
                path: "",
                component: HomeComponent,
                loadChildren: ()=> import("../home/home.module").then(m=> m.HomeModule)
            },
            {
                path:"login",
                component: LoginComponent,
                loadChildren: ()=> import("../login/login.module").then(m=> m.LoginModule)
            },
            {
                path:"register",
                component: RegisterComponent,
                loadChildren: ()=> import("../register/register.module").then(m=> m.RegisterModule)
            },
            {
                path: "blogs",                
                loadChildren: ()=> import("../blogs/blogs.module").then(m=> m.BlogsModule)
            }, 
            {
                path: "about",
                loadChildren:()=> import("../about/about.module").then(m=> m.AboutModule)
            }           
        ]
    }
]