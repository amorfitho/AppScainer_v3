import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-crud-modi',
  templateUrl: './crud-modi.page.html',
  styleUrls: ['./crud-modi.page.scss'],
})
export class CrudModiPage implements OnInit {
  usuario: any = {
    nombre: '',
    apellidos: '',
    email: '',
    password: ''
  };
  emailOriginal: string ='';

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.emailOriginal = this.route.snapshot.paramMap.get('email') || '';
    this.apiService.getUsuarioPorEmail(this.emailOriginal).subscribe(
      (data) => {
        if (data) {
          this.usuario = data;
        }
      },
      (error) => {
        console.error('Error al cargar los datos del usuario:', error);
      }
    );
  }

  guardarCambios() {
    this.apiService.updateUsuarioPorEmail(this.emailOriginal, this.usuario).subscribe(
      () => {
        this.router.navigate(['/crud-lista']);
      },
      (error) => {
        console.error('Error al actualizar el usuario:', error);
      }
    );
  }
}
