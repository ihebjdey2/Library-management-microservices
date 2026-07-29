import { Component } from '@angular/core';
import {Emprunt} from "../../models/Emprunt";
import {EmrpruntService} from "../../services/emrprunt.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Livre} from "../../models/Livre";
import {LivreService} from "../../services/livre.service";

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.scss']
})
export class AddLivreComponent {
  foyer: Livre = new Livre();



  constructor(
    private foyerService: LivreService,

    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  saveUser(): void {


    const confirmationMessage = '';

    const snackBarRef = this.snackBar.open(confirmationMessage, 'Add', {
      duration: 5000,
    });

    snackBarRef.onAction().subscribe(() => {
      this.foyerService.addLivre(this.foyer).subscribe(
        (response) => {
          this.showSnackBar('Added successfully ');
          this.router.navigate(['/Livre']);
        },
        (error) => {
          console.error('Failed to add ', error);
          this.showSnackBar('Failed to add ');
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
