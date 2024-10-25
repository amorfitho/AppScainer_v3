import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-ini',
  templateUrl: './ini.page.html',
  styleUrls: ['./ini.page.scss'],
})
export class IniPage implements OnInit {

  nombre: string = '';
  apellidos: string = '';
  email: string = '';


  constructor(public navControl: NavController) {}

  ngOnInit() {
  }

  datosentrada() {
    
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    
    this.nombre = usuario.nombre || 'Usuario';
    this.apellidos = usuario.apellidos || 'apellido paterno apellido materno';
    this.email = usuario.email || 'email@gmai.cl';
  }

  async salir() {
    localStorage.removeItem('Ingresado');
    console.log('Sesión cerrada');
    // Redirige al usuario a la página de login después de cerrar sesión
    this.navControl.navigateRoot('login');
  }
  //quiero suicidarme
}
