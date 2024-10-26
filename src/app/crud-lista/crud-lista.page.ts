import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-lista',
  templateUrl: './crud-lista.page.html',
  styleUrls: ['./crud-lista.page.scss'],
})
export class CrudListaPage implements OnInit {
  usuarios: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.apiService.getUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    );
  }

  eliminarUsuario(email: string) {
    this.apiService.deleteUsuarioPorEmail(email).subscribe(
      () => {
        this.cargarUsuarios(); // Recargar la lista después de eliminar
      },
      (error) => {
        console.error('Error al eliminar el usuario:', error);
      }
    );
  }

  modificarUsuario(email: string) {
    this.router.navigate(['/cud-modi', email]);
  }
}

