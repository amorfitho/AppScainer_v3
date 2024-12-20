import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuarios } from '../interfaces/iusuarios';
import { IUsuario } from '../interfaces/iusuario';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SUsuarioService {

  constructor(private http:HttpClient) { }

  listarUsuarios():Observable<IUsuarios>{
    return this.http.get<IUsuarios>(`${environment.apiURL}/usuarios`)
  }

  crearUsuario(newUsuario:IUsuario):Observable<IUsuario>{
    return this.http.post<IUsuario>(`${environment.apiURL}/usuarios`,newUsuario)
  }

  getUsuarioById(id:Number):Observable<IUsuarios>{
    return this.http.get<IUsuarios>(`${environment.apiURL}/usuarios/?id=${id}`)

  }

  updateUsuario(usuario:any):Observable<IUsuarios>{
    return this.http.post<IUsuarios>(`${environment.apiURL}/usuarios/${usuario.id}`,usuario)
  }

  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${environment.apiURL}/usuarios/${id}`);
  }
  consultarClase(clase:String):Observable<any>{
    return this.http.get(environment.apiURL+"/clases/?codigoClase="+clase)
  }

}
