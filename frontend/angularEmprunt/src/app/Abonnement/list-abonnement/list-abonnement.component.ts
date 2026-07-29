import { Component, Input } from '@angular/core';
import { Abonnement } from 'src/app/models/Abonnement';
import { AbonnementService } from 'src/app/services/abonnement.service';

@Component({
  selector: 'app-list-abonnement',
  templateUrl: './list-abonnement.component.html',
  styleUrls: ['./list-abonnement.component.scss']
})
export class ListAbonnementComponent {
  @Input() foyer: Abonnement = new Abonnement();


  displayedFoyers: Abonnement[] = [];
  foyers: Abonnement[] = [];
  search = '';
  usertoSelected!: Abonnement;
  show = false;

  constructor(private abonnementService: AbonnementService) {}

  ngOnInit(): void {
    this.abonnementService.getEmprunt().subscribe((d) => {
      this.foyers = d;
      this.displayedFoyers = d; // Assign the data to displayedFoyers as well
    });
  }
  deleteFoyerById(id: number): void {

      this.abonnementService.deleteEmprunt(id).subscribe(
        () => {
          console.log('Emprunt deleted successfully');
          this.foyers = this.foyers.filter((foyer) => foyer.id !== id);
          this.displayedFoyers = this.foyers.slice(); // Update displayedFoyers as well
          console.log('displayedFoyers after deletion:', this.displayedFoyers);
        
         
        },
        (error) => {
          console.error('Failed to delete Emprunt:', error);
          window.location.reload()
          console.log('Error status:', error.status);
          console.log('Error body:', error.error);
        }
      );
  
  }

  update(foyer: Abonnement) {
    console.log('Selected Emprunt:', foyer);
    this.usertoSelected = foyer;
    this.show = true;
  }
  changeTab(e: any) {
    this.show = false;
    for (let i = 0; i < this.foyers.length; i++) {
      if (this.foyers[i].id == e.id) {
        this.foyers[i] = e;
      }
    }
  }

 

}
