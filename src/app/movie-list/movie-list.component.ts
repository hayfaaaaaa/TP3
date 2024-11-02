import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [SearchBarComponent, CommonModule, RouterModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = []; 
  searchTerm: string = ''; 
  successMessage: string = '';
  errorMessage: string = '';

  constructor(public movieService: MovieService) {}
  
  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovieList().subscribe(
      (movies) => {
        this.movies = movies as Movie[]; 
        this.filteredMovies = this.movies; 
        this.successMessage = 'Movies loaded successfully!';
      },
      (err) => {
        this.errorMessage = 'Failed to load movies. Please try again later.';
      }
    );
  }

  filterMovies(): void {
    this.filteredMovies = this.movies.filter(movie =>
      movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
