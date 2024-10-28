import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from  '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { IUsuario } from '../interfaces/iusuario';
import { SUsuarioService } from '../services/susuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  newUsuario: Partial<IUsuario> = {
    nombre: "",
    password: ""
  };

  constructor(
    public navControl: NavController,
    private usuarioServ: SUsuarioService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async validarLogin() {
    if (!this.newUsuario.nombre || !this.newUsuario.password) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingresa nombre y contraseña',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.usuarioServ.listarUsuarios().subscribe(async (usuarios: any) => {
      const usuarioEncontrado = usuarios.find((u: IUsuario) => 
        u.nombre === this.newUsuario.nombre && 
        u.password === this.newUsuario.password
      );

      if (usuarioEncontrado) {
        
        this.router.navigate(['/ini', usuarioEncontrado.id]);
      } else {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Usuario o contraseña incorrectos',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }
}
