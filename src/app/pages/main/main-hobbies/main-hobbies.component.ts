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
      src: 'https://static.fnac-static.com/multimedia/Images/FR/NR/ca/46/c0/12601034/1540-1/tsp20200901143314/S16.jpg',
    },
    {
      title: 'Linkin Park',
      genre: 'Rock alternatif / Nu metal',
      why: 'Leur retour avec From Zero est un délice !',
      src: 'https://static.fnac-static.com/multimedia/Images/FR/NR/55/b4/1f/18854997/1541-1/tsp20250327145107/From-Zero-Edition-Deluxe.jpg',
    },
    {
      title: 'Billie Eilish & Finneas',
      genre: 'Pop alternative / Électro',
      why: 'Des paroles qui restent en tête, des émotions brutes.',
      src: 'https://static.fnac-static.com/multimedia/Images/FR/NR/15/a8/bf/12560405/1520-1/tsp20210428112156/Happier-Than-Ever-Edition-Limitee-Exclusivite-Fnac.jpg',
    },
    {
      title: 'League of Legends (Arcane, K/DA...)',
      genre: 'Pop / Soundtrack',
      why: 'En dehors des univers, des énergies, styles et visuels marquants !',
      src: 'https://static.fnac-static.com/multimedia/Images/FR/NR/10/6f/18/18378512/1540-1/tsp20241018112058/Arcane-League-Of-Legends-Season-2-Soundtrack-From-The-Animated-Series-Edition-Limitee.jpg',
    },
    {
      title: 'Yseult',
      genre: 'Pop française / R&B',
      why: `Une voix puissante et des textes qui vont droit au cœur, mais aussi un côté girl power.`,
      src: 'https://cdn-images.dzcdn.net/images/cover/1d1ea39356915dc71311996828a6ec18/0x1900-000000-80-0-0.jpg',
    },
    {
      title: 'BBNO$',
      genre: 'Hip-hop alternatif / Rap décalé',
      why: 'Un peu décalé, décontracté... donnant un peu confiance en soi.',
      src: 'https://www.fnacspectacles.com/obj/mam/france/eb/61/bbno--tickets_325785_2821484_222x222.jpg',
    },
  ];

  public gameFavorites: Hobby[] = [
    { title: 'Clair Obscur', genre: 'RPG narratif', why: 'Une immersion totale portée par une écriture riche et des visuels marquants.' },
    { title: 'Crime Scene Cleaner', genre: 'Simulation / Puzzle', why: 'Original et satisfaisant, avec une approche ludique du nettoyage post-crime.' },
    { title: 'Zero Escape', genre: 'Visual novel / Puzzle', why: 'Un scénario complexe et ingénieux qui tient en haleine jusqu’à la fin.' },
    { title: 'Amnesia', genre: 'Horreur psychologique', why: 'Une atmosphère oppressante et des choix narratifs marquants.' },
    { title: 'We Were Here', genre: 'Puzzle coopératif', why: 'Une expérience unique où la communication est la clé.' },
    { title: 'Life is Strange', genre: 'Aventure narrative', why: 'Un récit émotionnel fort, où chaque choix compte et laisse une trace.' },
  ];

  public movieFavorites: Hobby[] = [
    { title: 'Arcane', genre: 'Animation / Fantasy', why: 'Une animation sublime au service d’une histoire profonde et nuancée.' },
    { title: 'Hazbin Hotel', genre: 'Animation comédie musicale', why: 'Un style visuel unique et un humour piquant.' },
    { title: 'Dan Da Dan', genre: 'Anime / Surnaturel', why: 'Un mélange explosif d’action, d’humour et de moments touchants.' },
    { title: 'Game of Thrones', genre: 'Fantasy dramatique', why: 'Des intrigues captivantes et des personnages inoubliables.' },
    { title: 'New Amsterdam, Good Doctor...', genre: 'Drama médical', why: 'Des histoires humaines touchantes avec une dose d’émotion bien dosée.' },
    { title: 'The Haunting of Hill House', genre: 'Horreur dramatique', why: 'Un mélange parfait entre frissons et drame familial.' },
  ];
}

class Hobby {
  public title: string;
  public genre: string;
  public why: string;
  public src?: string;
}
