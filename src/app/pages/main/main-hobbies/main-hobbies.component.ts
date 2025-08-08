import { Component } from '@angular/core';

import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-hobbies',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './main-hobbies.component.html',
  styleUrls: ['./main-hobbies.component.scss'],
})
export class MainHobbiesComponent {
  public musicFavorites: Hobby[] = [
    {
      title: 'Woodkid',
      genre: 'Pop orchestrale / Indie',
      why: `Son album S16 est puissantément déprimant.`,
      src: 'assets/hobbies/music_01.png',
    },
    {
      title: 'Linkin Park',
      genre: 'Rock alternatif / Nu metal',
      why: 'Leur retour avec From Zero est un délice !',
      src: 'assets/hobbies/music_02.png',
    },
    {
      title: 'Billie Eilish & Finneas',
      genre: 'Pop alternative / Électro',
      why: 'Des paroles qui restent en tête, des émotions brutes.',
      src: 'assets/hobbies/music_03.png',
    },
    {
      title: 'League of Legends (Arcane, K/DA...)',
      genre: 'Pop / Soundtrack',
      why: 'En dehors des univers, des énergies, styles et visuels marquants !',
      src: 'assets/hobbies/music_04.png',
    },
    {
      title: 'Yseult',
      genre: 'Pop française / R&B',
      why: `Une voix puissante et des textes qui vont droit au cœur, mais aussi un côté girl power.`,
      src: 'assets/hobbies/music_05.png',
    },
    {
      title: 'BBNO$',
      genre: 'Hip-hop alternatif / Rap décalé',
      why: 'Un peu décalé, décontracté... donnant un peu confiance en soi.',
      src: 'assets/hobbies/music_06.png',
    },
  ];

  public gameFavorites: Hobby[] = [
    {
      title: 'Clair Obscur',
      genre: 'RPG narratif',
      why: 'Une immersion totale portée par une écriture riche et des visuels marquants.',
      src: 'assets/hobbies/game_01.png',
    },
    {
      title: 'Crime Scene Cleaner',
      genre: 'Simulation / Puzzle',
      why: 'Original et satisfaisant, avec une approche ludique du nettoyage post-crime.',
      src: 'assets/hobbies/game_02.png',
    },
    {
      title: 'Zero Escape (Series)',
      genre: 'Visual novel / Puzzle',
      why: 'Un scénario complexe et ingénieux qui tient en haleine jusqu’à la fin.',
      src: 'assets/hobbies/game_03.png',
    },
    {
      title: 'Amnesias (Series)',
      genre: 'Horreur psychologique',
      why: 'Une atmosphère oppressante et des choix narratifs marquants.',
      src: 'assets/hobbies/game_04.png',
    },
    {
      title: 'We Were Here (Series)',
      genre: 'Puzzle coopératif',
      why: 'Une expérience unique où la communication est la clé.',
      src: 'assets/hobbies/game_05.png',
    },
    {
      title: 'Life is Strange',
      genre: 'Aventure narrative',
      why: 'Un récit émotionnel fort, où chaque choix compte et laisse une trace.',
      src: 'assets/hobbies/game_06.png',
    },
  ];

  public movieFavorites: Hobby[] = [
    {
      title: 'Arcane',
      genre: 'Animation / Fantasy',
      why: 'Une animation sublime au service d’une histoire profonde et nuancée.',
      src: 'assets/hobbies/movie_01.png',
    },
    { title: 'Hazbin Hotel', genre: 'Animation comédie musicale', why: 'Un style visuel unique et un humour piquant.', src: 'assets/hobbies/movie_02.png' },
    {
      title: 'Dan Da Dan',
      genre: 'Anime / Surnaturel',
      why: 'Un mélange explosif d’action, d’humour et de moments touchants.',
      src: 'assets/hobbies/movie_03.png',
    },
    {
      title: 'Game of Thrones',
      genre: 'Fantasy dramatique',
      why: 'Des intrigues captivantes et des personnages inoubliables.',
      src: 'assets/hobbies/movie_04.png',
    },
    {
      title: 'New Amsterdam, Good Doctor...',
      genre: 'Drama médical',
      why: 'Des histoires humaines touchantes avec une dose d’émotion bien dosée.',
      src: 'assets/hobbies/movie_05.png',
    },
    {
      title: 'The Haunting of Hill House',
      genre: 'Horreur dramatique',
      why: 'Un mélange parfait entre frissons et drame familial.',
      src: 'assets/hobbies/movie_06.png',
    },
  ];
}

class Hobby {
  public title: string;
  public genre: string;
  public why: string;
  public src?: string;
}
