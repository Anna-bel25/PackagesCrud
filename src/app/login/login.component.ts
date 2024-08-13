import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loggedIn: boolean = false;
  usuarioTemp: any;
  hide = true;

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  Password = new FormControl('', [Validators.required]);
  Cedula = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.Cedula.hasError('required')) {
      return 'Debe introducir su cedula';
    }

    return this.Cedula.hasError('cedula') ? 'Cedula no válido' : '';
  }

  getErrorMessagePassword() {
    if (this.Password.hasError('required')) {
      return 'Debe introducir su contraseña';
    }

    return this.Password.hasError('password') ? 'Contraseña no válida' : '';
  }

  //this.loggedIn = false;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<LoginComponent>,
    private service: AuthService
  ) {}

  alert: boolean = false;

  usuarioLogin = new FormGroup({
    Cedula: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
    Transaccion: new FormControl(),
  });

  onSubmit() {
      /*this.usuarioLogin.value.Transaccion = "CONSULTAR_USUARIO_LOGIN";
      this.usuarioTemp = this.usuarioLogin.value.Cedula;
    
      this.service.login(this.usuarioLogin.value as UsuarioInterface).subscribe(
        (data: any) => {
          console.log(data);
          localStorage.setItem('userName', this.usuarioTemp);
          localStorage.setItem('token_value', data);
          
          const cedula = this.usuarioLogin.value.Cedula;
          if (cedula) {
            this.service.setUsername(cedula);
          } else {
            // Manejar el caso de cedula siendo null o undefined
          }
          
          this.service.setLoggedIn(true);
          this.router.navigate(['/crud']);
          this.dialogRef.close();
        },
        (errorData) => alert(errorData.error)
      )*/
      

    this.usuarioLogin.value.Transaccion = "CONSULTAR_USUARIO_LOGIN";
    this.usuarioTemp = this.usuarioLogin.value.Cedula;

    this.service.login(this.usuarioLogin.value as UsuarioInterface).subscribe((data:any) => {
      console.log(data);
      localStorage.setItem('userName',this.usuarioTemp);
      localStorage.setItem('token_value',data);
      this.router.navigate(['/crud']);
      this.dialogRef.close();
    },

    (errorData)  => alert(errorData.error))



    if (
      this.usuarioTemp = this.usuarioLogin.value.Cedula
      //this.usuarioLogin.value.Cedula == '0987654321' &&
      //this.usuarioLogin.value.Password == '123'
    ) {
      this.service.setUsername(this.usuarioLogin.value.Cedula);
      this.service.setLoggedIn(true);
      this.router.navigate(['/crud']);
      this.dialogRef.close();
    } else {
      this.alert = true;
      setTimeout(() => (this.alert = false), 4000);
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  ngOnInit() {}

}
