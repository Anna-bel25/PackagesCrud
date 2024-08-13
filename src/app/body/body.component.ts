import { Component, inject, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router} from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ReservaComponent } from '../reserva/reserva.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  snackbar: any;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar){}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(ReservaComponent, {
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open('Datos completados con éxito', '', {
          duration: 3000
        });
      } else {
        this.snackBar.open('Reserva cancelada', '', {
          duration: 3000
        });
      }
    });
  }
  

  ngOnInit(): void {  }

  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
}
