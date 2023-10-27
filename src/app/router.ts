import { Route, Routes } from "@angular/router";

import { C1Route } from "./components/c1/c1.route";
import { C2Route } from "./components/c2/c2.route";
import { C3Route } from "./components/c3/c3.route";
import { C1Component } from "./components/c1/c1.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

    const indexRoute : Route = {
    path:"",
    component:C1Component
  }

export const routes : Routes = [
        indexRoute,
        C1Route,
        C2Route,
        C3Route,{
            path:"**",
            component:NotFoundComponent
        }
  ]

  