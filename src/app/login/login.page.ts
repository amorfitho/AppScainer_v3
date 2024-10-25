import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from  '@angular/router';
import { FormGroup, 
          FormControl,
          Validators,
          FormBuilder 
           } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  cargando: boolean = false;

  constructor(public fb: FormBuilder, 
              public alertController: AlertController, 
              public navControl:NavController, 
              private apiService: ApiService) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  async ingresar() {

    this.cargando = true;

    const f = this.formularioLogin.value;

    this.apiService.verificarUsuario(f.nombre, f.password).subscribe(
      async (usuario) => {
          if (usuario) {
              console.log('Ingresado');
              localStorage.setItem('Ingresado', 'true');
              this.navControl.navigateRoot('ini'); // Redirige a la página de perfil
          } else {
              const alert = await this.alertController.create({
                  header: 'Error',
                  message: 'Nombre o contraseña incorrectos.',
                  buttons: ['Entendido']
              });
              await alert.present();
          }
          this.cargando = false;
      },
      async (error) => {
          const alert = await this.alertController.create({
              header: 'Error',
              message: 'Hubo un problema al intentar iniciar sesión.',
              buttons: ['Entendido']
          });
          await alert.present();
          this.cargando = false;
      }
  );

    /*
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

    setTimeout(async () => {
    if (usuario.nombre == f.nombre && usuario.password== f.password){
      console.log('Ingresado');
      localStorage.setItem('Ingresado','true');
      this.navControl.navigateRoot('ini');
    }else{
      const alert = await this.alertController.create({
        header: 'Algo te falto',
        message: 'Tienes que llenar todos los campos.',
        buttons: ['Ta Bien']
      });

      await alert.present();
    }
    this.cargando = false;
    }, 2000);
    */
  }
}