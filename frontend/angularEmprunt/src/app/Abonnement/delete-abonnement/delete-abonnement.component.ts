import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbonnementService } from 'src/app/services/abonnement.service';

@Component({
  selector: 'app-delete-abonnement',
  templateUrl: './delete-abonnement.component.html',
  styleUrls: ['./delete-abonnement.component.scss']
})
export class DeleteAbonnementComponent {
  constructor(
    private abonenementService: AbonnementService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.abonenementService.deleteEmprunt(id).subscribe(
        () => {
          alert('Emprunt deleted successfully');
        },
        (error) => {
          console.error('Failed to delete Emprunt:', error);
        }
      );
    }
  }
}
