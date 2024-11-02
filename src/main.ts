import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { MovieListComponent } from './app/movie-list/movie-list.component';
import { MovieDetailComponent } from './app/movie-detail/movie-detail.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(
      [
        { path: '', component: MovieListComponent }, // Page d'accueil affichant la liste des films
        { path: 'movie/:id', component: MovieDetailComponent }, // Détails d'un film spécifique
      ],
      withComponentInputBinding() // Gère les paramètres de route comme @Input dans les composants
    )
  ]
}).catch(err => console.error(err));
