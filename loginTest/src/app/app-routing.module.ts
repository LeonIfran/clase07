import { ActivadoresService } from "./servicio/activadores.service";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { LogeoComponent } from "./componentes/logeo/logeo.component";
import {MenuComponent} from "./componentes/menu/menu.component";
import { VerificadorService } from './servicio/verificador.service';

const routes: Routes = [
  {
    path: "logeo",
    component: LogeoComponent,
    //canActivate: [ActivadoresService]
  },
  {
    path: "menu",
    component: MenuComponent,
    canActivate: [ActivadoresService, VerificadorService]
  },
  { path: "", redirectTo: "/logeo", pathMatch: "full" },
  { path: "**", redirectTo: "/logeo", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
