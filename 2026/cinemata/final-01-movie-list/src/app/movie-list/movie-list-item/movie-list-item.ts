import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'movie-list-item',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './movie-list-item.html',
  styleUrl: './movie-list-item.css',
})
export class MovieListItem {}
