import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Emprunt} from "../../models/Emprunt";
import {EmrpruntService} from "../../services/emrprunt.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-update-emprunt',
  templateUrl: './update-emprunt.component.html',
  styleUrls: ['./update-emprunt.component.scss']
})
export class UpdateEmpruntComponent implements OnInit {
@Input() foyer: Emprunt = new Emprunt();
@Output() updateUser = new EventEmitter();



  constructor(
    private s: EmrpruntService,
    private ac: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
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

  const snackBarRef = this.snackBar.open(associatedMessage, 'Update', {
    duration: 5000,
  });

  snackBarRef.onAction().subscribe(() => {
    const updatedFoyer = {
      ...this.foyer
    };

    this.s.updateEmprunt(
      updateUser,
      this.foyer.idEmprunt
    ).subscribe(
      () => {
        this.showSnackBar('Modification effectuée');
        this.updateUser.emit(updateUser);
        this.router.navigate(['/Foyer']);
      },
      (error) => {
        console.error('Failed to update and associate with university and bloc:', error);
        this.showSnackBar('Failed to update and associate with university and bloc');
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

