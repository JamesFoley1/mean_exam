import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';

const routes: Routes = [

  { path:'pets', component: HomeComponent, children: [
    { path:'new', component: NewPetComponent },
  ]},

  { path:'pets/:id', component: PetDetailsComponent},

  { path:'pets/edit/:id', component: PetEditComponent },

  { path: '', pathMatch: 'full', redirectTo: '/pets' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
