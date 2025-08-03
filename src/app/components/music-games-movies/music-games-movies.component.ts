import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-music-games-movies',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './music-games-movies.component.html',
  styleUrls: ['./music-games-movies.component.scss'],
})
export class MusicGamesMoviesComponent {
  musicFavorites = [
    { title: 'Pink Floyd - The Wall', genre: 'Rock Progressif', why: "Pour l'ambiance et la profondeur" },
    { title: 'Radiohead - OK Computer', genre: 'Rock Alternatif', why: "L'innovation sonore" },
    { title: 'Daft Punk - Random Access Memories', genre: 'Electronic', why: 'La perfection musicale' },
    { title: 'Arctic Monkeys - AM', genre: 'Indie Rock', why: "L'énergie et le style" },
    { title: 'The Weeknd - After Hours', genre: 'R&B/Synthwave', why: "L'atmosphère nocturne" },
  ];

  gameFavorites = [
    { title: 'The Witcher 3', genre: 'RPG', why: "L'histoire et l'immersion" },
    { title: 'Red Dead Redemption 2', genre: 'Action-Aventure', why: "Le réalisme et l'ambiance western" },
    { title: 'Portal 2', genre: 'Puzzle', why: "L'humour et l'ingéniosité" },
    { title: 'Mass Effect Trilogy', genre: 'RPG Sci-Fi', why: 'Les choix et les personnages' },
    { title: 'Stardew Valley', genre: 'Simulation', why: 'La détente et la progression' },
  ];

  movieFavorites = [
    { title: 'Inception', genre: 'Sci-Fi', why: "L'originalité du concept" },
    { title: 'The Grand Budapest Hotel', genre: 'Comédie', why: "L'esthétique et l'humour" },
    { title: 'Interstellar', genre: 'Sci-Fi', why: "L'émotion et la science" },
    { title: 'La La Land', genre: 'Musical', why: 'La romance et la musique' },
    { title: 'Parasite', genre: 'Thriller', why: 'Le message social' },
  ];
}
