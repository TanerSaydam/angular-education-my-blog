import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LayoutsComponent } from "./components/layouts/layouts.component";

export const routes: Routes = [
    {
        path: "",
        component: LayoutsComponent,
        children: [
            {
                path: "",
                component: HomeComponent
            }
        ]
    }
]