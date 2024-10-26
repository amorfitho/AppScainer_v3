import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,switchMap } from 'rxjs/operators';

import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/usuarios';  // URL del endpoint de usuarios

  constructor(private http: HttpClient) { }

  // Obtener todos los usuarios
  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para obtener un usuario por ID
  getUsuarioById(id: string): Observable<any> { // Cambia el tipo de `number` a `string`
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
        map((usuario) => usuario ? usuario : null) // Retorna el usuario directamente
    );
  }

  // Crear un nuevo usuario
  createUsuario(usuario: any): Observable<any> {
    usuario.id = uuidv4();
    return this.http.post<any>(this.apiUrl, usuario);
  }

  updateUsuario(id: string, usuario: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, usuario);
  } 

// Eliminar un usuario
  deleteUsuario(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  verificarUsuario(nombre: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?nombre=${nombre}&password=${password}`).pipe(
      map((usuarios) => {
        console.log('Usuarios encontrados:', usuarios); // Imprime el array de usuarios
        return usuarios.length > 0 ? usuarios[0] : null;
    })
    );
  }

  getUsuarioPorEmail(email: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}`).pipe(
        map((usuarios) => {
            return usuarios.length > 0 ? usuarios[0] : null;
        })
    );
}
deleteUsuarioPorEmail(email: string): Observable<any> {
  return this.http.get<any[]>(`${this.apiUrl}?email=${email}`).pipe(
    map((usuarios) => usuarios[0]), // Seleccionar el primer usuario que coincida con el email
    switchMap((usuario) => this.http.delete(`${this.apiUrl}/${usuario.id}`))
  );
}

// Actualizar usuario por email
updateUsuarioPorEmail(email: string, datosActualizados: any): Observable<any> {
  return this.http.get<any[]>(`${this.apiUrl}?email=${email}`).pipe(
    map((usuarios) => usuarios[0]), // Seleccionar el primer usuario que coincida con el email
    switchMap((usuario) => this.http.put(`${this.apiUrl}/${usuario.id}`, datosActualizados))
  );
}

}
