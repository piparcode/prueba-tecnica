import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Login } from '../interfaces/Login';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  isValidate: Boolean | undefined
  token!: string;

  private http = inject(HttpClient)
  
  constructor() {}

  // voy a quemar la api porque es un ejemplo
  login(objeto:Login): Observable<AuthService>{
    return this.http.post<AuthService>('https://prueba-tecnica-back-7jgj.onrender.com/login', objeto)
  }
}
