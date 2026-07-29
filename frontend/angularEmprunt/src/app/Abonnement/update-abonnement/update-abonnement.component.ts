import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Abonnement } from 'src/app/models/Abonnement';
import { AbonnementService } from 'src/app/services/abonnement.service';

@Component({
  selector: 'app-update-abonnement',
  templateUrl: './update-abonnement.component.html',
  styleUrls: ['./update-abonnement.component.scss']
})
export class UpdateAbonnementComponent {
  @Input() foyer: Abonnement = new Abonnement();
  @Output() updateUser = new EventEmitter();
  
    constructor(
      private s: AbonnementService,
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
        this.foyer.id
      ).subscribe(
        () => {
          this.updateUser.emit(updateUser);
          this.router.navigate(['/Abonnement']);
        },
        (error) => {
          console.error('Failed to update and associate with university and bloc:', error);
        }
      );

  }
  

  

}