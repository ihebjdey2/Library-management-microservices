import { Component, OnInit } from '@angular/core';
import { EvenementService } from "../../services/evenement.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-evenement-delete',
  templateUrl: './evenement-delete.component.html',
  styleUrls: ['./evenement-delete.component.scss']
})
export class EvenementDeleteComponent implements OnInit {
  constructor(
    private evenementService: EvenementService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.evenementService.deleteEvenement(id).subscribe(
        () => {
          alert('Evenement deleted successfully');
        },
        (error) => {
          console.error('Failed to delete Evenement:', error);
          alert('Failed to delete Evenement');
        }
      );
    }
  }
}
