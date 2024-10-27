import { Component, OnInit } from '@angular/core';
import { SUsuarioService } from '../services/susuario.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { IUsuarios } from '../interfaces/iusuarios';


@Component({
  selector: 'app-crud-lista',
  templateUrl: './crud-lista.page.html',
  styleUrls: ['./crud-lista.page.scss'],
})
export class CrudListaPage {

  usuarios: IUsuarios[] = [];

  constructor(private usuarioserv: SUsuarioService, private loadinCTrL:LoadingController) { }

  ionViewWillEnter(){
    this.loadusuarios()
  }

  async loadusuarios(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadinCTrL.create({
      message: "carganso datos...",
      spinner: "bubbles"
    });
    await loading.present();

    this.usuarioserv.listarUsuarios().subscribe(
      (resp) => {
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.usuarios = JSON.parse(listString)
        event?.target.complete();
        },
        (err) =>{
          console.log(err.message)
          loading.dismiss();
        }
      )
  }
}
