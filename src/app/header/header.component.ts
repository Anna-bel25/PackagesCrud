import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})


export class HeaderComponent implements OnInit {
  nombreUsuario!: string;
  showFirstElement: boolean = true;
  showSecondElement: boolean = false;
  mostrarUsuario: boolean = false;

  loggedIn: boolean = false;

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {}

  getUsernamee(): string {
    return this.authService.getUsernamee();
  }

  openDialogSesion(){
    this.dialog.open(LoginComponent) 
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  /*login() {
    const dialogRef = this.dialog.open(LoginComponent);
    this.loggedIn = true;
    this.authService.setLoggedIn(true);
    this.router.navigate(['/body']);
  }*/

  login() {
    const dialogRef = this.dialog.open(LoginComponent);
    // Escucha el resultado del cuadro de diálogo
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // El inicio de sesión fue exitoso
        this.loggedIn = true;
        //this.authService.setLoggedIn(true);
        this.router.navigate(['/body']);
      }
    });
  }

  logout() {
    this.loggedIn = false;
    this.authService.setLoggedIn(false);
    this.router.navigate(['/first']);
  }

  cerrarSesion() {
    this.authService.setLoggedIn(false);
    this.router.navigate(['/first']);
  }

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn();
  }
}
