import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators, EmailValidator} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { IUsuario } from '../interfaces/iusuario';
import { SUsuarioService } from '../services/susuario.service';


@Component({
  selector: 'app-regis',
  templateUrl: './regis.page.html',
  styleUrls: ['./regis.page.scss'],
})
export class RegisPage implements OnInit {

  //formularioRegis: FormGroup;

  newUsuario:IUsuario = {
    nombre:"",
    apellidos:"",
    email:"",
    password:""
  };


  constructor(public fb: FormBuilder, 
              public alertController: AlertController,
              private usuarioServ: SUsuarioService,
              public navControl: NavController
            ){}

  ngOnInit() {
  }

  crearUsuario(){
    /*
    var f = this.formularioRegis.value;

    if (this.formularioRegis.invalid){
      const alert = await this.alertController.create({
        header: 'Algo te falto',
        subHeader: 'Subtitle',
        message: 'Tienes que llenar todos los campos.',
        buttons: ['Ta Bien']
      })

      await alert.present();
      return;
      
    }*/

    this.usuarioServ.crearUsuario(this.newUsuario).subscribe()
    this.navControl.navigateRoot('/login')
  }


  /*

  formularioRegis: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navControl: NavController ) { 

    this.formularioRegis = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'apellidos': new FormControl("",Validators.required),
      'email': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmarPassword': new FormControl("",Validators.required)
    });
  }*/

  /*
  async guardar(){
    var f = this.formularioRegis.value;

    if (this.formularioRegis.invalid){
      const alert = await this.alertController.create({
        header: 'Algo te falto',
        subHeader: 'Subtitle',
        message: 'Tienes que llenar todos los campos.',
        buttons: ['Ta Bien']
      })

      await alert.present();
      return;
      
    }

    var usuario ={
      nombre: f.nombre,
      apellidos: f.apellidos,
      email: f.email,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));

    localStorage.setItem('Registrado','true');
      this.navControl.navigateRoot('');

  }
*/
  

}