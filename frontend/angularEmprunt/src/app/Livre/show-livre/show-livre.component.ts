import { Component } from '@angular/core';
import {Livre} from "../../models/Livre";
import {LivreService} from "../../services/livre.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-show-livre',
  templateUrl: './show-livre.component.html',
  styleUrls: ['./show-livre.component.scss']
})
export class ShowLivreComponent {

  displayedFoyers: Livre[] = [];
  foyers: Livre[] = [];
  search = '';
  usertoSelected!: Livre;
  show = false;

  constructor(private foyerservice: LivreService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.foyerservice.getLivre().subscribe((d) => {
      this.foyers = d;
      this.displayedFoyers = d; // Assign the data to displayedFoyers as well
    });
  }
  deleteFoyerById(id: number): void {
    const snackBarRef = this.snackBar.open(
      'Are you sure you want to delete this Livre?',
      'Delete',
      {
        duration: 5000,
      }
    );

    snackBarRef.onAction().subscribe(() => {
      this.foyerservice.deleteLivre(id).subscribe(
        () => {
          console.log('Emprunt deleted successfully');
          this.foyers = this.foyers.filter((foyer) => foyer.idLivre !== id);
          this.displayedFoyers = this.foyers.slice(); // Update displayedFoyers as well
          console.log('displayedFoyers after deletion:', this.displayedFoyers);
          this.showSnackBar('Livre deleted successfully');
        },
        (error) => {
          console.error('Failed to delete Emprunt:', error);
          console.log('Error status:', error.status);
          console.log('Error body:', error.error);
          this.showSnackBar('Failed to delete Livre');
        }
      );
    });
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }

  update(foyer: Livre) {
    console.log('Selected Livre:', foyer);
    this.usertoSelected = foyer;
    this.show = true;
  }

  changeTab(e: any) {
    this.show = false;
    for (let i = 0; i < this.foyers.length; i++) {
      if (this.foyers[i].idLivre == e.id) {
        this.foyers[i] = e;
      }
    }
  }
}

