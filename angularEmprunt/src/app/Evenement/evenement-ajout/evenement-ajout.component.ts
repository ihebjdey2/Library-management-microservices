import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EvenementService } from '../../services/evenement.service';
import { Evenement } from '../../models/Evenement';

@Component({
  selector: 'app-evenement-ajout',
  templateUrl: './evenement-ajout.component.html',
  styleUrls: ['./evenement-ajout.component.scss']
})
export class EvenementAjoutComponent implements OnInit {
  evenement: Evenement = new Evenement();

  constructor(
    private evenementService: EvenementService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  ajouterEvenement(): void {
    // Check if dateFinEvenement is after dateDebutEvenement
    if (this.evenement.dateFinEvenement <= this.evenement.dateDebutEvenement) {
      this.showSnackBar('dateFinEvenement must be after dateDebutEvenement');
      return; // Stop further execution
    }

    const confirmationMessage = 'Are you sure you want to add this event?';

    const snackBarRef = this.snackBar.open(confirmationMessage, 'Add', {
      duration: 5000,
    });

    snackBarRef.onAction().subscribe(() => {
      this.evenementService.addEvenement(this.evenement).subscribe(
        (response) => {
          this.showSnackBar('Event added successfully');
          this.router.navigate(['/evenements']);
        },
        (error) => {
          console.error('Failed to add event:', error);
          this.showSnackBar('Failed to add event');
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