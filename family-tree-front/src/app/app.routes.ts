import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { MembreComponent } from './membre/membre.component';
import { UpdateComponent } from './membre/update/update.component';
import {CreateComponent} from './membre/create/create.component';
import {HomeComponent} from './home/home.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'membre', pathMatch: 'full'},
  { path: 'membre/:id', component: MembreComponent },
  { path: 'edit/:id', component: UpdateComponent },
  { path: 'membres/add', component: CreateComponent },
  { path: 'all', component: HomeComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, {useHash: true});
