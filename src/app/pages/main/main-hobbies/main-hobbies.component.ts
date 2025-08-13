import { Component } from '@angular/core';

import { ObserveSectionDirective } from '@src/directives/observe-section.directive';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-hobbies',
  imports: [SharedModule, ObserveSectionDirective],
  templateUrl: './main-hobbies.component.html',
  styleUrl: './main-hobbies.component.scss',
})
export class MainHobbiesComponent {
  public musicFavorites: Hobby[] = [
    {
      title: 'Woodkid',
      genre: 'Pop orchestrale / Indie',
      why: `Son album S16 est puissantément déprimant.`,
      src: 'assets/hobbies/music_01.jpg',
    },
    {
      title: 'Linkin Park',
      genre: 'Rock alternatif / Nu metal',
      why: 'Leur retour avec From Zero est un délice !',
      src: 'assets/hobbies/music_02.jpg',
    },
    {
      title: 'Billie Eilish & Finneas',
      genre: 'Pop alternative / Électro',
      why: 'Des paroles qui restent en tête, des émotions brutes.',
      src: 'assets/hobbies/music_03.jpg',
    },
    {
      title: 'League of Legends (Arcane, K/DA...)',
      genre: 'Pop / Soundtrack',
      why: 'En dehors des univers, des énergies, styles et visuels marquants !',
      src: 'assets/hobbies/music_04.jpg',
    },
    {
      title: 'Yseult',
      genre: 'Pop française / R&B',
      why: `Une voix puissante et des textes qui vont droit au cœur, mais aussi un côté girl power.`,
      src: 'assets/hobbies/music_05.jpg',
    },
    {
      title: 'BBNO$',
      genre: 'Hip-hop alternatif / Rap décalé',
      why: 'Un peu décalé, décontracté... donnant un peu confiance en soi.',
      src: 'assets/hobbies/music_06.jpg',
    },
  ];

  public gameFavorites: Hobby[] = [
    {
      title: 'Clair Obscur : Expédition 33',
      genre: 'RPG narratif',
      why: 'Le gameplay, le scénario et la direction artistique sont UNIQUES, magnifiques, parfaits.',
      src: 'assets/hobbies/game_01.jpg',
    },
    {
      title: 'Genshin Impact',
      genre: 'Gatcha / Action-RPG',
      why: 'Un univers avec un lore IMMENSE et soigné, mêlant exploration libre et gameplay intéressant.',
      src: 'assets/hobbies/game_07.jpg',
    },
    {
      title: 'Zero Escape (Series)',
      genre: 'Visual novel / Puzzle',
      why: 'Un mélange entre choix cornéliens et escape-games qui tient en haleine jusqu’à la fin.',
      src: 'assets/hobbies/game_03.jpg',
    },
    {
      title: 'Crime Scene Cleaner',
      genre: 'Simulation / Puzzle',
      why: 'Nettoyage hyper satisfaisant, avec une approche scénaristique sympa mdr.',
      src: 'assets/hobbies/game_02.jpg',
    },
    {
      title: 'Amnesia (Series)',
      genre: 'Horreur psychologique',
      why: 'Des jeux oppressants et horrifiques qui tiennent par leur scénario marquant.',
      src: 'assets/hobbies/game_04.jpg',
    },
    {
      title: 'We Were Here (Series)',
      genre: 'Puzzle coopératif',
      why: 'Idéal pour tester la communication à deux, à travers des escape-games / énigmes.',
      src: 'assets/hobbies/game_05.jpg',
    },
  ];

  public movieFavorites: Hobby[] = [
    {
      title: 'Arcane',
      genre: 'Animation / Fantasy',
      why: `Une animation sublime, avec un lore et des personnages qui me fascinent / m'inspirent.`,
      src: 'assets/hobbies/movie_01.jpg',
    },
    {
      title: 'Hazbin Hotel',
      genre: 'Animation comédie musicale',
      why: 'Un style visuel unique, un humour un peu décalé, et des musiques à rechanter en boucle.',
      src: 'assets/hobbies/movie_02.jpg',
    },
    {
      title: 'Dan Da Dan',
      genre: 'Anime / Surnaturel',
      why: 'Un mélange surprenant entre démons et extra-terrestres, action, humour et moments touchants.',
      src: 'assets/hobbies/movie_03.jpg',
    },
    {
      title: 'Game of Thrones',
      genre: 'Fantasy dramatique',
      why: 'Classique mais très plaisant ! Avec des personnages bien travaillés, inoubliables.',
      src: 'assets/hobbies/movie_04.jpg',
    },
    {
      title: 'New Amsterdam, Good Doctor...',
      genre: 'Drama médical',
      why: 'Des histoires humaines touchantes avec une dose d’émotion bien dosée (larmes à gogo...).',
      src: 'assets/hobbies/movie_05.jpg',
    },
    {
      title: 'The Haunting of Hill House',
      genre: 'Horreur dramatique',
      why: 'Un mélange parfait entre frissons et une énigme le long des saisons.',
      src: 'assets/hobbies/movie_06.jpg',
    },
  ];
}

class Hobby {
  public title: string;
  public genre: string;
  public why: string;
  public src?: string;
}
