import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { loginGuard } from './guard/login.guard';
import { logoutGuard } from './guard/logout.guard';
import { CrudComponent } from './pages/crud/crud.component';
import { PokemonDetailsComponent } from './components/pokemon/pokemon-details/pokemon-details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [logoutGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'crud',
    component: CrudComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'pokemons/:id',
    component: PokemonDetailsComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'favorites', 
    component: FavoritesComponent,
    canActivate: [loginGuard]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
