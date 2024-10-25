import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators, EmailValidator} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-regis',
  templateUrl: './regis.page.html',
  styleUrls: ['./regis.page.scss'],
})
export class RegisPage implements OnInit {

  formularioRegis: FormGroup;

  constructor(public fb: FormBuilder, 
              public alertController: AlertController, 
              public navControl: NavController,
              private apiService: ApiService ) { 

    this.formularioRegis = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'apellidos': new FormControl("",Validators.required),
      'email': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmarPassword': new FormControl("",Validators.required)
    });
  }

  ngOnInit() {
  }

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
    

    this.apiService.createUsuario(usuario).subscribe(
      async (response) => {
          const alert = await this.alertController.create({
              header: 'Registro Exitoso',
              message: 'Usuario registrado correctamente.',
              buttons: ['Entendido']
          });
          await alert.present();
          this.navControl.navigateRoot('login'); // Redirige a la página de login
      },
      async (error) => {
          const alert = await this.alertController.create({
              header: 'Error',
              message: 'Hubo un problema al registrar el usuario.',
              buttons: ['Entendido']
          });
          await alert.present();
          console.error('Error al registrar el usuario:', error);
      }
  );
  
    /*
    localStorage.setItem('usuario',JSON.stringify(usuario));

    localStorage.setItem('Registrado','true');
      this.navControl.navigateRoot('');
    */
  }

  

}