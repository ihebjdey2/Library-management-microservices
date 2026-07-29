import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {EmrpruntService} from "../../services/emrprunt.service";
import {Emprunt} from "../../models/Emprunt";

@Component({
  selector: 'app-add-emprunt',
  templateUrl: './add-emprunt.component.html',
  styleUrls: ['./add-emprunt.component.scss']
})
export class AddEmpruntComponent implements OnInit {
  foyer: Emprunt = new Emprunt();



  constructor(
    private foyerService: EmrpruntService,

    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    // Check if Date Retour is after Date Emprunt
    if (this.foyer.date_retourE <= this.foyer.date_Emprunt) {
      this.showSnackBar('Date Retour must be after Date Emprunt');
      return; // Stop further execution
    }

    const confirmationMessage = 'Are you sure you want to add this foyer and associate it with the selected university and blocs?';

    const snackBarRef = this.snackBar.open(confirmationMessage, 'Add', {
      duration: 5000,
    });

    snackBarRef.onAction().subscribe(() => {
      this.foyerService.addEmprunt(this.foyer).subscribe(
        (response) => {
          this.showSnackBar('Added successfully and associated with university and bloc');
          this.router.navigate(['/Emprunt']);
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
