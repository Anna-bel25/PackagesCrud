import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiciodebtniniciosesionService {

  constructor() { }

  private showFirstElementSubject: Subject<boolean> = new Subject<boolean>();
  public showFirstElement$ = this.showFirstElementSubject.asObservable();

  private showSecondElementSubject: Subject<boolean> = new Subject<boolean>();
  public showSecondElement$ = this.showSecondElementSubject.asObservable();

  private nombreUsuarioSubject: Subject<string> = new Subject<string>();
  public nombreUsuario$ = this.nombreUsuarioSubject.asObservable();

  private mostrarUsuarioSubject: Subject<boolean> = new Subject<boolean>();
  public mostrarUsuario$ = this.mostrarUsuarioSubject.asObservable();

  toggleFirstElement(show: boolean) {
    this.showFirstElementSubject.next(show);
  }

  toggleSecondElement(show: boolean) {
    this.showSecondElementSubject.next(show);
  }

  setNombreUsuario(nombre: string) {
    this.nombreUsuarioSubject.next(nombre);
  }

  togglemostrarusuario(show: boolean) {
    this.mostrarUsuarioSubject.next(show);
  }
}
