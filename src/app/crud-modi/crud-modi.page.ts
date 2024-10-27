import { Component, OnInit } from '@angular/core';
import { SUsuarioService } from '../services/susuario.service';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-crud-modi',
  templateUrl: './crud-modi.page.html',
  styleUrls: ['./crud-modi.page.scss'],
})
export class CrudModiPage {

  usuario = {
    id: 0,
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
  }

  constructor(private usuarioServ:SUsuarioService, private router:Router, public navControl:NavController) { }

  ionViewWillEnter(){
    this.getUsuarioById(this.getFromURL())
  }


  getFromURL(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id = parseInt(arr[2])
    return id
  }

  getUsuarioById(usuarioId:number){
    this.usuarioServ.getUsuarioById(usuarioId).subscribe(
    (resp:any) =>{
      this.usuario={
        id: resp[0].id,
        nombre: resp[0].nombre,
        apellidos: resp[0].apellidos,
        email: resp[0].email,
        password: resp[0].password
      }
    }
    )
  }

  actualizarUsuario(){
    this.usuarioServ.updateUsuario(this.usuario).subscribe()
    this.navControl.navigateRoot('lista');
  }

}
