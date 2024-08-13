import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PaqueteViajeInterface } from "../app/interfaces/PaqueteViajeInterface";
import { UsuarioInterface } from './interfaces/UsuarioInterface';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  baseUrl: string = 'https://localhost:7266/api/Usuario/GetUsuario';
  constructor(private http: HttpClient) {}

  login(user: UsuarioInterface){
      return this.http.post(this.baseUrl, user);
  }

  get getUsername(){
      return localStorage.getItem('userName');
  }

  get isAutenticado(){
      return !!localStorage.getItem('token_value');
  }


  //public loggedIn: boolean = false;
  private loggedIn: boolean = false;
  private usernamee: string = "";

  /*constructor() {
    this.username = '';*/



  setUsername(username: string) {
    this.usernamee = username;
  }

  getUsernamee(): string {
    return this.usernamee;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  loginn() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  setLoggedIn(value: boolean): void {
    this.loggedIn = value;
    console.log('loggedIn:', this.loggedIn);
  }


  

}
