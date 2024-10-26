import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ini',
  templateUrl: './ini.page.html',
  styleUrls: ['./ini.page.scss'],
})
export class IniPage implements OnInit {

  usuario: any;
  
  nombre: string = '';
  apellidos: string = '';
  email: string = '';
  

  constructor(public navControl: NavController, private apiService: ApiService) {}

  ngOnInit() {
    const uEmail = localStorage.getItem('email'); // Obtiene el email del usuario almacenado
    if (uEmail) {
        this.apiService.getUsuarioPorEmail(uEmail).subscribe(
            (data) => {
                this.usuario = data; // Asigna los datos del usuario a la variable
                if (this.usuario) {
                    this.nombre = this.usuario.nombre; // Asigna nombre
                    this.apellidos = this.usuario.apellidos; // Asigna apellidos
                    this.email = this.usuario.email; // Asigna email
                } else {
                    console.error('No se encontró el usuario con este email.');
                }
            },
            (error) => {
                console.error('Error al obtener los datos del usuario:', error);
            }
        );
    } else {
        console.error('No se encontró el email del usuario en localStorage');
    }
  }


  async modificarUsuario() {
    this.navControl.navigateRoot('/crud-lista');
  }


  async salir() {
    localStorage.removeItem('Ingresado');
    console.log('Sesión cerrada');
    this.navControl.navigateRoot('login'); 
  }

}
