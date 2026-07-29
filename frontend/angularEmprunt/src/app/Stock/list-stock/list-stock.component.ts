import { Component, Input } from '@angular/core';
import { Abonnement } from 'src/app/models/Abonnement';
import { Stock } from 'src/app/models/Stock';
import {  StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-list-Stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.scss']
})
export class ListStockComponent {
  @Input() foyer: Abonnement = new Abonnement();


  displayedFoyers: Stock[] = [];
  foyers: Stock[] = [];
  search = '';
  usertoSelected!: Stock;
  show = false;

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stockService.getEmprunt().subscribe((d) => {
      this.foyers = d;
      this.displayedFoyers = d; // Assign the data to displayedFoyers as well
    });
  }
  deleteFoyerById(id: number): void {

      this.stockService.deleteEmprunt(id).subscribe(
        () => {
          console.log('Emprunt deleted successfully');
          this.foyers = this.foyers.filter((foyer) => foyer.idstock !== id);
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

  update(foyer: Stock) {
    console.log('Selected Emprunt:', foyer);
    this.usertoSelected = foyer;
    this.show = true;
  }
  changeTab(e: any) {
    this.show = false;
    for (let i = 0; i < this.foyers.length; i++) {
      if (this.foyers[i].idstock == e.id) {
        this.foyers[i] = e;
      }
    }
  }



}
