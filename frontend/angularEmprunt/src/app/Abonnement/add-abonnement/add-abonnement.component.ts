import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Abonnement } from 'src/app/models/Abonnement';
import { AbonnementService } from 'src/app/services/abonnement.service';

@Component({
  selector: 'app-add-abonnement',
  templateUrl: './add-abonnement.component.html',
  styleUrls: ['./add-abonnement.component.scss']
})
export class AddAbonnementComponent {
  abonnement: Abonnement = new Abonnement();



  constructor(
    private abonnementService: AbonnementService,

    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    
      this.abonnementService.addEmprunt(this.abonnement).subscribe(
        (response) => {
          this.router.navigate(['/Abonnement']);
        },
        (error) => {
          console.error('Failed to add and associate with university and bloc:', error);
        }
      );
    
  }

  
}
