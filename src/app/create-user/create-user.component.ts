import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup,} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})

export class CreateUserComponent implements OnInit {
  
  destino: any[] = [ 'Guayaquil', 'Quito', 'Galápagos', 'Cuenca'];
  alojamiento: any[] = ['Hotel', 'Apartamento', 'Complejo turístico' ];

  //form: FormGroup;
  registrosNuevos: any[] = [];
 
  constructor(private dialogRef: MatDialogRef<CreateUserComponent>, private router: Router, private _snackBar: MatSnackBar) {
   }


   ngOnInit(): void {
    //this.startDate.setValue(new Date(2023, 0, 1));
  }

   usuarioNuevo = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    telefono: new FormControl('',Validators.required),
    correo: new FormControl('', Validators.required),
    destino: new FormControl('', Validators.required),
    alojamiento: new FormControl('', Validators.required)
  })

  @Output() registrosAgregados = new EventEmitter<any[]>();
  onSubmit()
  {
    if (this.usuarioNuevo.valid) {
      const nuevoRegistro = {
        cedula: this.usuarioNuevo.value.cedula,
        nombre: this.usuarioNuevo.value.nombre,
        telefono: this.usuarioNuevo.value.telefono,
        correo: this.usuarioNuevo.value.correo,
        destino: this.usuarioNuevo.value.destino,
        alojamiento: this.usuarioNuevo.value.alojamiento
      };
    /*let objToSend: NavigationExtras = {
      queryParams: {
        cedula: this.usuarioNuevo.value.cedula,
        nombre: this.usuarioNuevo.value.nombre,
        telefono: this.usuarioNuevo.value.telefono,
        correo: this.usuarioNuevo.value.correo,
        destino: this.usuarioNuevo.value.destino,
        alojamiento: this.usuarioNuevo.value.alojamiento
      },
      skipLocationChange: false,
      fragment: 'top' 
    };*/
      this.registrosAgregados.emit([nuevoRegistro]);
      this.usuarioNuevo.reset();
      this.dialogRef.close();
  }

    //this.dialogRef.close(); 
    //this.redirectTo('/crud', objToSend);
    this._snackBar.open('El usuario fue creado con éxito','',{
      duration: 2000,
      horizontalPosition:'center',
      verticalPosition: 'bottom',
      })

    /*this._snackBar.open('El usuario ha sido editado con éxito', 'Aceptar', {
      duration: 3000, // Duración en milisegundos
    });*/
  }

  /*redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }*/

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }

  cancel() {
    this.usuarioNuevo.reset();
    this.dialogRef.close();
  }


}

