import { Component, OnInit } from '@angular/core';
import { SUsuarioService } from '../services/susuario.service';
import { AlertController } from '@ionic/angular';
import { IUsuario } from '../interfaces/iusuario';

@Component({
  selector: 'app-crud-lista',
  templateUrl: './crud-lista.page.html',
  styleUrls: ['./crud-lista.page.scss'],
})
export class CrudListaPage implements OnInit {
  usuarios: any[] = [];

  constructor(
    private usuarioServ: SUsuarioService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  ionViewWillEnter() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuarioServ.listarUsuarios().subscribe((resp: any) => {
      this.usuarios = resp;
    });
  }

  async eliminarUsuario(id: number) {
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
            this.usuarioServ.eliminarUsuario(id).subscribe(
              () => {
                this.mostrarMensajeExito();
                this.cargarUsuarios(); // Recargar la lista después de eliminar
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
