import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { IUsuario } from '../interfaces/iusuario';
import { SUsuarioService } from '../services/susuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ini',
  templateUrl: './ini.page.html',
  styleUrls: ['./ini.page.scss'],
})
export class IniPage {

  usuario ={
    id:0,
    nombre:"",
    apellidos:"",
    email:"",
    password:""
  };

  constructor(public navControl: NavController, private usuarioserv: SUsuarioService, private loadinCTrL:LoadingController, private router: Router) {}

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
    this.usuarioserv.getUsuarioById(usuarioId).subscribe(
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

  

  async salir() {
    localStorage.removeItem('Ingresado');
    console.log('Sesión cerrada');
    
    this.navControl.navigateRoot('login');
  }
  /*
  datosentrada() {
    
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    
    this.nombre = usuario.nombre || 'Usuario';
    this.apellidos = usuario.apellidos || 'apellido paterno apellido materno';
    this.email = usuario.email || 'email@gmai.cl';

    
  }*/
}
