import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
import {ListEmpruntComponent} from "./Emprunt/list-emprunt/list-emprunt.component";
import {UpdateEmpruntComponent} from "./Emprunt/update-emprunt/update-emprunt.component";
import {DeleteEmpruntComponent} from "./Emprunt/delete-emprunt/delete-emprunt.component";
import {AddEmpruntComponent} from "./Emprunt/add-emprunt/add-emprunt.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { AddLivreComponent } from './Livre/add-livre/add-livre.component';
import { UpdateLivreComponent } from './Livre/update-livre/update-livre.component';
import { DeleteLivreComponent } from './Livre/delete-livre/delete-livre.component';
import { ShowLivreComponent } from './Livre/show-livre/show-livre.component';
import {UpdateAbonnementComponent} from "./Abonnement/update-abonnement/update-abonnement.component";
import {ListAbonnementComponent} from "./Abonnement/list-abonnement/list-abonnement.component";
import {AddAbonnementComponent} from "./Abonnement/add-abonnement/add-abonnement.component";
import {AddStockComponent} from "./Stock/add-stock/add-stock.component";
import {UpdateStockComponent} from "./Stock/update-stock/update-stock.component";
import {DeleteStockComponent} from "./Stock/delete-stock/delete-stock.component";
import {ListStockComponent} from "./Stock/list-stock/list-stock.component";
import {AddReservationComponent} from "./Reservation/add-reservation/add-reservation.component";
import {UpdateReservationComponent} from "./Reservation/update-reservation/update-reservation.component";
import {DeleteReservationComponent} from "./Reservation/delete-reservation/delete-reservation.component";
import {ReservationComponent} from "./Reservation/reservation/reservation.component";

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
    ListEmpruntComponent,
    UpdateEmpruntComponent,
    DeleteEmpruntComponent,
    AddEmpruntComponent,
    AddLivreComponent,
    UpdateLivreComponent,
    DeleteLivreComponent,
    ShowLivreComponent,
    AddAbonnementComponent,
    ListAbonnementComponent,
    UpdateAbonnementComponent,
    AddStockComponent,
    UpdateStockComponent,
    DeleteStockComponent,
    ListStockComponent,
    ReservationComponent,
    DeleteReservationComponent,
    UpdateReservationComponent,
    AddReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    MatDatepickerModule, MatNativeDateModule,
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
