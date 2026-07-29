import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Abonnement } from 'src/app/models/Abonnement';
import { Stock } from 'src/app/models/Stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-update-Stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.scss']
})
export class UpdateStockComponent {
  /*
  @Input() foyer: Stock = new Stock();
  @Output() updateUser = new EventEmitter();

    constructor(
      private s: StockService,
      private ac: ActivatedRoute,
      private router: Router,
  ) {}

    ngOnInit() {
      const foyerId = this.ac.snapshot.params['id'];

      if (foyerId) {
        this.s.getEmpruntById(foyerId).subscribe(
          (data) => {
            this.foyer = data;


          }
        );
      }

    }


    update(updateUser: any): void {

    const associatedMessage = `The selected`;

      const updatedFoyer = {
        ...this.foyer
      };

      this.s.updateEmprunt(
        updateUser,
        this.foyer.idstock
      ).subscribe(
        () => {
          this.updateUser.emit(updateUser);
        },
        (error) => {
          console.error('error', error);
        }
      );*/
      @Input() foyer: Stock = new Stock();
@Output() updateUser = new EventEmitter();



  constructor(
    private s: StockService,
    private ac: ActivatedRoute,
    private router: Router,

) {}

  ngOnInit() {

    const foyerId = this.ac.snapshot.params['id'];

    if (foyerId) {
      this.s.getEmpruntById(foyerId).subscribe(
        (data) => {
          this.foyer = data;

        }
      );
    }
  }

  update(updateUser: any): void {

  const associatedMessage = `The selected`;




    const updatedFoyer = {
      ...this.foyer
    };

    this.s.updateEmprunt(
      updateUser,
      this.foyer.idstock
    ).subscribe(
      () => {

        this.updateUser.emit(updateUser);
        this.router.navigate(['/Foyer']);
      },
      (error) => {
        console.error('Failed to update and associate with university and bloc:', error);
      }
    );

}



  }




