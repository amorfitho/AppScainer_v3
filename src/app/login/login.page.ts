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
  // Solo necesitamos nombre y password para el login
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
        // Navegar a la página ini con el ID del usuario
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
  


  /*
  formularioLogin: FormGroup;
  cargando: boolean = false;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navControl:NavController) {

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
  }
} */