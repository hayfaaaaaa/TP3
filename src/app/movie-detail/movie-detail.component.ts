import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie?: Movie; 

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); 
    this.getMovieById(id); 
  }

  getMovieById(id: number): void {
    this.movieService.getMovieById(id).subscribe(
      (movie) => (this.movie = movie),
      (error) => console.error('Erreur lors de la récupération du film:', error)
    );
  }
}
