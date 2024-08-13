import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';



@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit{

    transporte: any[] = ['Tren', 'Avión', 'Carro alquilado'];
    alojamiento: any[] = ['Hotel', 'Apartamento', 'Complejo turístico'];
    servicio: any[] = ['Actividades', 'Excursiones', 'Guías turísticos'];
    npersonas: any[] = ['Dos', 'Tres', 'Cuatro'];
  
    // startDate: FormControl = new FormControl();
    //endDate: FormControl = new FormControl();
  
    startDateControl = new FormControl('', Validators.required);
    endDateControl = new FormControl('', Validators.required);
    name = new FormControl('', Validators.required);
    email = new FormControl('', Validators.required);
    number = new FormControl('', Validators.required);
    cedula = new FormControl('', Validators.required);
    transporteControl = new FormControl('', Validators.required);
    alojamientoControl = new FormControl('', Validators.required);
    servicioControl = new FormControl('', Validators.required);
    npersonasControl = new FormControl('', Validators.required);
  
    getErrorMessageName() {
      if (this.name.hasError('required')) {
        return 'Debe introducir su nombre';
      }
      return this.name.hasError('name') ? 'Nombre no válido' : '';
    }
  
    getErrorMessageEmail() {
      if (this.email.hasError('required')) {
        return 'Debe introducir su correo electrónico';
      }
  
      return this.email.hasError('email') ? 'Correo electrónico no válido' : '';
    }
  
    getErrorMessageNumber() {
      if (this.number.hasError('required')) {
        return 'Debe introducir su telefóno';
      }
  
      return this.number.hasError('number') ? 'Telefóno no válido' : '';
    }
  
    getErrorMessageCedula() {
      if (this.cedula.hasError('required')) {
        return 'Debe introducir su cédula de identidad';
      }
  
      return this.cedula.hasError('cedula') ? 'Cédula no válida' : '';
    }
  
    getErrorMessageStartDate() {
      if (this.startDateControl.hasError('required')) {
        return 'Seleccione la fecha de inicio';
      }
      return '';
    }
  
    getErrorMessageEndDate() {
      if (this.endDateControl.hasError('required')) {
        return 'Seleccione la fecha de fin';
      }
      return '';
    }

  
    constructor(
      private _formBuilder: FormBuilder,
      private router: Router,
      private dialogRef: MatDialogRef<ReservaComponent>,
      private dialog: MatDialog
    ) {}
  
    allFieldsCompleted: boolean = false;
  
    reservaForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      cedula: new FormControl('', Validators.required),
      transporte: this.transporteControl,
      alojamiento: this.alojamientoControl,
      servicio: this.servicioControl,
      npersonas: this.npersonasControl,
      startDate: this.startDateControl,
      endDate: this.endDateControl,
    });
  
    cancel() {
      this.dialogRef.close();
    }
  
    openDialog(): void {
      
    }
  
    ngOnInit() {}


}
