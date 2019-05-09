import { LogService } from "./../../servicio/log.service";
import { Component, OnInit, Input } from "@angular/core";

import { NgModule } from "@angular/core";
@Component({
  selector: "app-logeo",
  templateUrl: "./logeo.component.html",
  styleUrls: ["./logeo.component.css"]
})
export class LogeoComponent implements OnInit {
  usuario: string;
  pass: string;
  constructor(private log: LogService) {}

  ngOnInit() {}
  realizarLogeo() {
    const datos = { usuario: this.usuario, pass: this.pass };

    this.log.entrar(datos).subscribe((data: any) => {
      console.log(data);
      if (data.userJTW != null) {
        localStorage.setItem("user", data.userJTW);
      }
    });
  }
}
