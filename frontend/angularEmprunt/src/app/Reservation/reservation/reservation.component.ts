import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservationt';
import { ReservationService } from 'src/app/services/reservation.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  
    displayedFoyers: Reservation[] = [];
    foyers: Reservation[] = [];
    search = '';
    usertoSelected!: Reservation;
    show = false;
    foyer:Reservation
  
    constructor(private foyerservice: ReservationService, private snackBar: MatSnackBar) {}
  
    ngOnInit(): void {
      this.foyerservice.getReservation().subscribe((d) => {
        this.foyers = d;
        this.displayedFoyers = d; // Assign the data to displayedFoyers as well
      });
    }
    deleteFoyerById(id: number): void {
  
      const snackBarRef = this.snackBar.open(
       'Are you sure you want to delete this Emprunt?',
       'Delete',
       {
         duration: 5000,
       }
      );
  
      snackBarRef.onAction().subscribe(() => {
        this.foyerservice.deleteReservation(id).subscribe(
          () => {
            console.log('Reservation deleted successfully');
            this.foyers = this.foyers.filter((foyer) => foyer.idR !== id);
            this.displayedFoyers = this.foyers.slice(); // Update displayedFoyers as well
            console.log('displayedFoyers after deletion:', this.displayedFoyers);
            this.showSnackBar('Reservation deleted successfully');
          },
          (error) => {
            console.error('Failed to delete Reservation:', error);
            console.log('Error status:', error.status);
            console.log('Error body:', error.error);
            this.showSnackBar('Failed to deleteReservation');
          }
        );
      });
    }
  
    private showSnackBar(message: string): void {
      this.snackBar.open(message, 'Close', {
        duration: 3000,
      });
    }
  
    update(foyer: Reservation) {
      console.log('Selected Reservation:', foyer);
      this.usertoSelected = foyer;
      this.show = true;
    }
  
    changeTab(e: any) {
      this.show = false;
      for (let i = 0; i < this.foyers.length; i++) {
        if (this.foyers[i].idR == e.id) {
          this.foyers[i] = e;
        }
      }
    }
  }