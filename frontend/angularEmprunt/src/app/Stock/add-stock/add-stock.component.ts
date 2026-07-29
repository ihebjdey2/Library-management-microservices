import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Abonnement } from 'src/app/models/Abonnement';
import { Stock } from 'src/app/models/Stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-add-Stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent {
  stock: Stock = new Stock();



  constructor(
    private stockService: StockService,

    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  saveUser(): void {

      this.stockService.addEmprunt(this.stock).subscribe(
        (response) => {
          this.router.navigate(['/Stock']);
        },
        (error) => {
          console.error('error:', error);
        }
      );

  }


}
