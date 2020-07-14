import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ApplicationRouteNames} from "./app-routes-name";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ApplicationRouteNames.Login,
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
