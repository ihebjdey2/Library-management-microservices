import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Livre} from "../../models/Livre";
import {LivreService} from "../../services/livre.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: ['./update-livre.component.scss']
})
export class UpdateLivreComponent {
  @Input() foyer: Livre = new Livre();
  @Output() updateUser = new EventEmitter();



  constructor(
    private s: LivreService,
    private ac: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {

    const foyerId = this.ac.snapshot.params['id'];

    if (foyerId) {
      this.s.getLivreById(foyerId).subscribe(
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
        this.foyer.idLivre
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
