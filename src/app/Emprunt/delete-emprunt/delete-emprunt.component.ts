import {Component, OnInit} from '@angular/core';
import {EmrpruntService} from "../../services/emrprunt.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-delete-emprunt',
  templateUrl: './delete-emprunt.component.html',
  styleUrls: ['./delete-emprunt.component.scss']
})
export class DeleteEmpruntComponent implements OnInit {
  constructor(
    private foyerService: EmrpruntService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.foyerService.deleteEmprunt(id).subscribe(
        () => {
          alert('Emprunt deleted successfully');
        },
        (error) => {
          console.error('Failed to delete Emprunt:', error);
          alert('Failed to delete Emprunt');
        }
      );
    }
  }
}
