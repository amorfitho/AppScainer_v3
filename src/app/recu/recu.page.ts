import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-recu',
  templateUrl: './recu.page.html',
  styleUrls: ['./recu.page.scss'],
})
export class RecuPage implements OnInit {

  formularioRecu: FormGroup;

  constructor(
    public fb: FormBuilder, 
    public alertController: AlertController, 
    public navControl: NavController
  ) { 
    this.formularioRecu = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'email': new FormControl("", [Validators.required, Validators.email]), // Valida que sea un email válido
      'newpassword': new FormControl("", [Validators.required, Validators.minLength(6)]), // Contraseña de mínimo 6 caracteres
      'confirmpassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() { }

  async actualizar() {
    var f = this.formularioRecu.value;
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    
    // Verificamos que el formulario esté lleno correctamente y las contraseñas coincidan
    if (f.newpassword !== f.confirmpassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (f.nombre === usuario.nombre && f.email === usuario.email) {
     
      var updateUsuario = {
        nombre: f.nombre,
        apellidos: usuario.apellidos,
        email: f.email,
        password: f.newpassword
      };

      
      localStorage.setItem('usuario', JSON.stringify(updateUsuario));
      localStorage.setItem('Actualizado', 'true');
      
      
      this.navControl.navigateRoot('login');

    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Los datos no coinciden con los del usuario actual.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
  }
}

