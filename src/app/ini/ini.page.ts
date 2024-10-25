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

  ngOnInit() {const uEmail = localStorage.getItem('email'); // Obtiene el ID del usuario almacenado
    if (uEmail) {
      this.apiService.getUsuarioPorEmail(uEmail).subscribe(
        (data) => {
          this.usuario = data; // Asigna los datos del usuario a la variable
        },
        (error) => {
          console.error('Error al obtener los datos del usuario:', error);
        }
      );
    }
  }

  async salir() {
    localStorage.removeItem('Ingresado');
    console.log('Sesión cerrada');
    this.navControl.navigateRoot('login'); 
  }

}
