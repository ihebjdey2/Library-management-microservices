import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { ListEmpruntComponent } from './Emprunt/list-emprunt/list-emprunt.component';
import { UpdateEmpruntComponent } from './Emprunt/update-emprunt/update-emprunt.component';
import { AddEmpruntComponent } from './Emprunt/add-emprunt/add-emprunt.component';
import { DeleteEmpruntComponent } from './Emprunt/delete-emprunt/delete-emprunt.component';
import { EmployeeAddComponent } from './Employee/employee-add/employee-add.component';
import { EmployeeDeleteComponent } from './Employee/employee-delete/employee-delete.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './Employee/employee-update/employee-update.component';
import { EvenementListComponent } from './Evenement/evenement-list/evenement-list.component';
import { EvenementUpdateComponent } from './Evenement/evenement-update/evenement-update.component';
import { EvenementAjoutComponent } from './Evenement/evenement-ajout/evenement-ajout.component';
import { EvenementDeleteComponent } from './Evenement/evenement-delete/evenement-delete.component';


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
      { path: 'Emprunt', component: ListEmpruntComponent },
      { path: 'Emprunt/updateEmp/:id', component: UpdateEmpruntComponent },
      { path: 'Emprunt/addEmp', component: AddEmpruntComponent },
      { path: 'Emprunt/deleteEmp/:id', component: DeleteEmpruntComponent },
      { path: 'Employee', component: EmployeeListComponent },
      { path: 'Employee/updateEmp/:id', component: EmployeeUpdateComponent },
      { path: 'Employee/addEmp', component: EmployeeAddComponent },
      { path: 'Evenement/delete/:id', component: EvenementDeleteComponent },
      { path: 'Evenement/add', component: EvenementAjoutComponent },
      { path: 'Evenement/update/:id', component: EvenementUpdateComponent },
      { path: 'Evenement', component: EvenementListComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}