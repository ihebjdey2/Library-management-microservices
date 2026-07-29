import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import {ListEmpruntComponent} from "./Emprunt/list-emprunt/list-emprunt.component";
import {UpdateEmpruntComponent} from "./Emprunt/update-emprunt/update-emprunt.component";
import {AddEmpruntComponent} from "./Emprunt/add-emprunt/add-emprunt.component";
import {DELETE} from "@angular/cdk/keycodes";
import {DeleteEmpruntComponent} from "./Emprunt/delete-emprunt/delete-emprunt.component";
import {ShowLivreComponent} from "./Livre/show-livre/show-livre.component";
import {UpdateLivreComponent} from "./Livre/update-livre/update-livre.component";
import {AddLivreComponent} from "./Livre/add-livre/add-livre.component";
import {DeleteLivreComponent} from "./Livre/delete-livre/delete-livre.component";
import {ListAbonnementComponent} from "./Abonnement/list-abonnement/list-abonnement.component";
import {UpdateAbonnementComponent} from "./Abonnement/update-abonnement/update-abonnement.component";
import {AddAbonnementComponent} from "./Abonnement/add-abonnement/add-abonnement.component";
import {ListStockComponent} from "./Stock/list-stock/list-stock.component";
import {AddStockComponent} from "./Stock/add-stock/add-stock.component";
import {UpdateStockComponent} from "./Stock/update-stock/update-stock.component";
import {DeleteStockComponent} from "./Stock/delete-stock/delete-stock.component";
import {AddReservationComponent} from "./Reservation/add-reservation/add-reservation.component";
import {DeleteReservationComponent} from "./Reservation/delete-reservation/delete-reservation.component";
import {UpdateReservationComponent} from "./Reservation/update-reservation/update-reservation.component";
import {ReservationComponent} from "./Reservation/reservation/reservation.component";

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/Emprunt',
        pathMatch: 'full',
      },
      {path:'Emprunt',component:ListEmpruntComponent},
      {path:"updateEmp/:id", component:UpdateEmpruntComponent},
      {path:"Emprunt/addEmp", component:AddEmpruntComponent},
      {path:"deleteEmp/:id", component:DeleteEmpruntComponent},
      {
        path: '',
        redirectTo: '/Livre',
        pathMatch: 'full',
      },
      {path:'Livre',component:ShowLivreComponent},
      {path:"updateLivre/:id", component:UpdateLivreComponent},
      {path:"Livre/addLiv", component:AddLivreComponent},
      {path:"deleteLiv/:id", component:DeleteLivreComponent},
      {path:'Abonnement',component:ListAbonnementComponent},
      {path:"updateAbon/:id", component:UpdateAbonnementComponent},
      {path:"Abonnement/addAbon", component:AddAbonnementComponent},
      {path:'Stock',component:ListStockComponent},
      {path:"updatestock/:id", component:UpdateStockComponent},
      {path:"Stock/addStock", component:AddStockComponent},
      {path:"delete/:id", component:DeleteStockComponent},
      {path:'Reservation',component:ReservationComponent},
      {path:"Update/:idR",component:UpdateReservationComponent},
      {path:"deleteRes/:idR",component:DeleteReservationComponent},
      {path:"Reservation/addR",component:AddReservationComponent}
    ],
  },

  {
    path: '',
    redirectTo: '/Livre',
    pathMatch: 'full',
  },
  {path:'Livre',component:ShowLivreComponent},
  {path:"updateLivre/:id", component:UpdateLivreComponent},
  {path:"Livre/addLiv", component:AddLivreComponent},
  {path:"deleteLiv/:id", component:DeleteLivreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
