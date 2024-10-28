import { Component, OnInit } from '@angular/core';
import { SUsuarioService } from '../services/susuario.service';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(
    private usuarioServ: SUsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    public navControl: NavController,
    private alertController: AlertController
  ) { }

  ionViewWillEnter(){
    this.getUsuarioById(this.getFromURL())
  }

  getFromURL(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id = parseInt(arr[2])
    return id
  }

  getUsuarioById(usuarioId: number) {
    this.usuarioServ.getUsuarioById(usuarioId).subscribe(
      (resp: any) => {
        if (resp && resp[0]) {
          this.usuario = {
            id: resp[0].id,
            nombre: resp[0].nombre,
            apellidos: resp[0].apellidos,
            email: resp[0].email,
            password: resp[0].password
          }
        }
      }
    )
  }


  actualizarUsuario() {
    this.usuarioServ.updateUsuario(this.usuario).subscribe()
    this.navControl.navigateRoot('lista')
  }

  async eliminarUsuario() {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro que deseas eliminar este usuario?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.usuarioServ.eliminarUsuario(this.usuario.id).subscribe(
              () => {
                this.mostrarMensajeExito();
                this.navControl.navigateRoot('/lista');
              },
              error => {
                this.mostrarError('Error al eliminar el usuario');
              }
            );
          }
        }
      ]
    });

    await alert.present();
  }

  private async mostrarMensajeExito() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Usuario eliminado correctamente',
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
