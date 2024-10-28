import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { IUsuario } from '../interfaces/iusuario';
import { SUsuarioService } from '../services/susuario.service';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.page.html',
  styleUrls: ['./regis.page.scss'],
})
export class RegisPage implements OnInit {

  newUsuario: IUsuario = {
    nombre: "",
    apellidos: "",
    email: "",
    password: ""
  };

  confirmarPassword: string = "";

  constructor(
    public alertController: AlertController,
    private usuarioServ: SUsuarioService,
    public navControl: NavController
  ) {}

  ngOnInit() {
  }
  
  async crearUsuario() {
    if (!this.validarCampos()) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, complete todos los campos',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (!this.validarPassword()) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.usuarioServ.crearUsuario(this.newUsuario).subscribe(
      () => {
        this.mostrarMensajeExito();
        this.navControl.navigateRoot('/login');
      },
      error => {
        this.mostrarError('Error al crear el usuario');
      }
    );
  }

  private validarCampos(): boolean {
    return !!(this.newUsuario.nombre && 
              this.newUsuario.apellidos && 
              this.newUsuario.email && 
              this.newUsuario.password && 
              this.confirmarPassword);
  }

  private validarPassword(): boolean {
    return this.newUsuario.password === this.confirmarPassword;
  }

  private async mostrarMensajeExito() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Usuario creado correctamente',
      buttons: ['OK']
    });
    await alert.present();
  }

  private async mostrarError(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
}
