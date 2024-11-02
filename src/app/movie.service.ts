import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private http: HttpClient) {}



  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>("assets/movies.json");
  }
  

  getMovieById(id: number): Observable<Movie | undefined> {
    return this.getMovieList().pipe(
      map((movies: Movie[]) => movies.find(movie => movie.id === id))
    );
  }

}
