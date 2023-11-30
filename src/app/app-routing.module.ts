import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LevelesComponent} from "./component/leveles/leveles.component";
import {DashbordComponent} from "./component/dashbord/dashbord.component";

const routes: Routes = [
  {path :"",component:DashbordComponent},
  {path:"level",component:LevelesComponent}
  /*{path:"footer",component:FooterComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
