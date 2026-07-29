import { Component, EventEmitter, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservationt';
import { ReservationService } from 'src/app/services/reservation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
}) 
export class UpdateReservationComponent  {
}