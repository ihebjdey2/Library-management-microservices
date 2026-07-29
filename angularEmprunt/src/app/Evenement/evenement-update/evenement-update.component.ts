import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Evenement } from "../../models/Evenement";
import { EvenementService } from "../../services/evenement.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatFormField } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-evenement-update',
  templateUrl: './evenement-update.component.html',
  styleUrls: ['./evenement-update.component.scss']
});
export class EvenementUpdateComponent implements OnInit {
  @Input() evenement: Evenement = new Evenement();
  updateEvenement = new EventEmitter<Evenement>();


  constructor(
    private evenementService: EvenementService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const evenementId = this.activatedRoute.snapshot.params['id'];

    if (evenementId) {
      this.evenementService.getEvenementById(evenementId).subscribe(
        (data) => {
          this.evenement = data;
        }
      );
    }
  }

  update(updatedEvenement: Evenement): void {
    const associatedMessage = `The selected`;

    const snackBarRef = this.snackBar.open(associatedMessage, 'Update', {
      duration: 5000,
    });

    snackBarRef.onAction().subscribe(() => {
      const clonedEvenement = {
        ...this.evenement
      };

      this.evenementService.updateEvenement(
        this.evenement.idEvenement,
        updatedEvenement,
     
      ).subscribe(
        () => {
          this.showSnackBar('Modification effectuée');
          this.updateEvenement.emit(updatedEvenement);
          this.router.navigate(['/evenements']);
        },
        (error) => {
          console.error('Failed to update Evenement:', error);
          this.showSnackBar('Failed to update Evenement');
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