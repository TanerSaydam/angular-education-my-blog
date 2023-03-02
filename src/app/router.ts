import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadChildren: ()=> import("./components/layouts/layouts.module").then(m=> m.LayoutsModule),        
    }
]