import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservationt';
import { ReservationService } from 'src/app/services/reservation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  foyer: Reservation = new Reservation();



  constructor(
    private foyerService: ReservationService,

    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    // Check if Date Retour is after Date Emprunt


    const confirmationMessage = 'Are you sure you want to add this foyer and associate it with the selected university and blocs?';

    const snackBarRef = this.snackBar.open(confirmationMessage, 'Add', {
      duration: 5000,
    });

    snackBarRef.onAction().subscribe(() => {
      this.foyerService.addReservation(this.foyer).subscribe(
        (response) => {
          this.showSnackBar('Added successfully and associated with university and bloc');
          this.router.navigate(['/Reservation']);
        },
        (error) => {
          console.error('Failed to add and associate with university and bloc:', error);
          this.showSnackBar('Failed to add and associate with university and bloc');
        }
      );
    });
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
}
