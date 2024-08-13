import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  destino: any[] = [ 'Guayaquil', 'Quito', 'Galápagos', 'Cuenca'];
  alojamiento: any[] = ['Hotel', 'Apartamento', 'Complejo turístico' ];
  user: any;
  editForm!: FormGroup;
  //data: any;
  userIndex: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      destino: ['', Validators.required],
      alojamiento: ['', Validators.required],
    });

    this.user = this.data.user;
    this.userIndex = this.data.userIndex;
    this.editForm.patchValue(this.user);
    //this.editForm.patchValue(registroEditado);
  }

  
  onSubmit() {
    if (this.editForm.valid) {
      console.log('Formulario válido. Guardando cambios...');
      const editedUser = {
        cedula: this.editForm.value.cedula,
        nombre: this.editForm.value.nombre,
        telefono: this.editForm.value.telefono,
        correo: this.editForm.value.correo,
        destino: this.editForm.value.destino,
        alojamiento: this.editForm.value.alojamiento,
      };
  
      this.dialogRef.close(editedUser);
  
      // Actualiza los valores en la matriz `data`
      this.data[this.userIndex] = editedUser;
  
      this._snackBar.open('El usuario fue editado con éxito', '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    } else {
      this._snackBar.open('No se editó el usuario', '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  }
  
  /*onSubmit() {
    if (this.editForm.valid) {
      console.log('Formulario válido. Guardando cambios...');
      const editedUser = {
        cedula: this.editForm.value.cedula,
        nombre: this.editForm.value.nombre,
        telefono: this.editForm.value.telefono,
        correo: this.editForm.value.correo,
        destino: this.editForm.value.destino,
        alojamiento: this.editForm.value.alojamiento,
      };
      this.dialogRef.close(editedUser);
      this.data[this.userIndex] = this.user;

      this.dialogRef.close();     
      this._snackBar.open('El usuario fue editado con éxito', '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      }); 
    }
    
  }*/


  cancel() {
    this.dialogRef.close();
  }
  
}
