import { Component, OnInit } from '@angular/core';
import { Evenement } from "../../models/Evenement";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EvenementService } from "../../services/evenement.service";

@Component({
  selector: 'app-evenement-list',
  templateUrl: './evenement-list.component.html',
  styleUrls: ['./evenement-list.component.scss']
})
export class EvenementListComponent {
  displayedEvenements: Evenement[] = [];
  evenements: Evenement[] = [];
  search = '';
  evenementSelected!: Evenement;
  show = false;

  constructor(private evenementService: EvenementService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.evenementService.getEvenements().subscribe((data) => {
      this.evenements = data;
      this.displayedEvenements = data; // Assign the data to displayedEvenements as well
    });
  }

  deleteEvenementById(id: number): void {
    const snackBarRef = this.snackBar.open(
      'Are you sure you want to delete this Evenement?',
      'Delete',
      {
        duration: 5000,
      }
    );

    snackBarRef.onAction().subscribe(() => {
      this.evenementService.deleteEvenement(id).subscribe(
        () => {
          console.log('Evenement deleted successfully');
          this.evenements = this.evenements.filter((evenement) => evenement.idEvenement !== id);
          this.displayedEvenements = this.evenements.slice(); // Update displayedEvenements as well
          console.log('displayedEvenements after deletion:', this.displayedEvenements);
          this.showSnackBar('Evenement deleted successfully');
        },
        (error) => {
          console.error('Failed to delete Evenement:', error);
          console.log('Error status:', error.status);
          console.log('Error body:', error.error);
          this.showSnackBar('Failed to delete Evenement');
        }
      );
    });
  }

  updateEvenement(evenement: Evenement) {
    console.log('Selected Evenement:', evenement);
    this.evenementSelected = evenement;
    this.show = true;
  }

  changeTab(updatedEvenement: Evenement) {
    this.show = false;
    for (let i = 0; i < this.evenements.length; i++) {
      if (this.evenements[i].idEvenement === updatedEvenement.idEvenement) {
        this.evenements[i] = updatedEvenement;
      }
    }
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
}