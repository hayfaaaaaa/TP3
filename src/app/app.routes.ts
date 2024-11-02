import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

// Déclaration du tableau de routes
export const routes: Routes = [
  { path: '', component: MovieListComponent }, 
  { path: 'movie/:id', component: MovieDetailComponent }, 
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];
