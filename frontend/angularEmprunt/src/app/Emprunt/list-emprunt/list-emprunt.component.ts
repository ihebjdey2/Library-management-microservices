import {Component, OnInit} from '@angular/core';
import {Emprunt} from "../../models/Emprunt";
import {MatSnackBar} from "@angular/material/snack-bar";
import {EmrpruntService} from "../../services/emrprunt.service";

@Component({
  selector: 'app-list-emprunt',
  templateUrl: './list-emprunt.component.html',
  styleUrls: ['./list-emprunt.component.scss']
})
export class ListEmpruntComponent implements OnInit {
/*
  downloadPDF(): void {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Foyer List', 10, 10);

    const columns = [
      { header: 'Nom Foyer', dataKey: 'nomFoyer' },
      { header: 'Capacite Foyer', dataKey: 'capaciteFoyer' },
      { header: 'Universite', dataKey: 'nomUniversite' },
      { header: 'Blocs', dataKey: 'blocs' },
      { header: 'Est sature', dataKey: 'isSaturated' },
    ];

    const data = this.foyers.map((foyer) => ({
      nomFoyer: foyer.nomFoyer,
      capaciteFoyer: foyer.capaciteFoyer,
      nomUniversite: foyer.universite ? foyer.universite.nomUniversite : '',
      blocs: foyer.bloc.map((bloc) => bloc.nomBloc).join(', '),
      isSaturated: this.isFoyerSaturated(foyer) ? 'Yes' : 'No',
    }));

    (doc as any).autoTable({
      columns: columns,
      body: data.map((item) =>
        columns.map((column) => {
          // @ts-ignore
          return item[column.dataKey];
        })
      ),
      startY: 20,
    });

    doc.save('foyer-list.pdf');
  }*/

  displayedFoyers: Emprunt[] = [];
  foyers: Emprunt[] = [];
  search = '';
  usertoSelected!: Emprunt;
  show = false;

  constructor(private foyerservice: EmrpruntService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.foyerservice.getEmprunt().subscribe((d) => {
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
      this.foyerservice.deleteEmprunt(id).subscribe(
        () => {
          console.log('Emprunt deleted successfully');
          this.foyers = this.foyers.filter((foyer) => foyer.idEmprunt !== id);
          this.displayedFoyers = this.foyers.slice(); // Update displayedFoyers as well
          console.log('displayedFoyers after deletion:', this.displayedFoyers);
          this.showSnackBar('Emprunt deleted successfully');
        },
        (error) => {
          console.error('Failed to delete Emprunt:', error);
          console.log('Error status:', error.status);
          console.log('Error body:', error.error);
          this.showSnackBar('Failed to delete Emprunt');
        }
      );
    });
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }

  update(foyer: Emprunt) {
    console.log('Selected Emprunt:', foyer);
    this.usertoSelected = foyer;
    this.show = true;
  }

  changeTab(e: any) {
    this.show = false;
    for (let i = 0; i < this.foyers.length; i++) {
      if (this.foyers[i].idEmprunt == e.id) {
        this.foyers[i] = e;
      }
    }
  }
}

