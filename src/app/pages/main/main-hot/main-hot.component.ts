import { Component } from '@angular/core';

import { ObserveSectionDirective } from '@src/directives/observe-section.directive';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-hot',
  standalone: true,
  imports: [SharedModule, ObserveSectionDirective],
  templateUrl: './main-hot.component.html',
  styleUrls: ['./main-hot.component.scss'],
})
export class MainHotComponent {
  public isRevealed = false;
  public isRevealedExtra = false;
  public isRevealedVeryExtra = false;
  public showPhoto = false;

  public hotTopics = [
    {
      icon: '↕️​',
      title: 'Versatile',
      description: `Parfois passif, souvent actif, dominant ou dominé, j'aime varier selon l'envie, le moment et la personne...
      Et pas forcément de la pénétration : on peut se faire plaisir un tas de manière 😜​`,
    },
    {
      icon: '💕',
      title: 'Intimité physique et mentale',
      description: `Il me faut un minimum de complicité ou d'échanges avant de passer à une intimité physique.
      Un léger côté demi-sexuel ou sapio qui me dit qu'un physique ne fait pas tout (et pas du tout fan de plans cul).`,
    },
    {
      icon: '💭',
      title: 'Fantasmes',
      description: `Plutôt vanilla / simple dans l'ensemble, mais pas contre certains fantasmes explorations... expérimentations 🧪​ ?`,
    },
    {
      icon: '⏰',
      title: 'Fréquence',
      description: `Ca dépendra de nos libidos ! J'aime beaucoup la spontaniété, pas trop prévoir... et parfois juste des câlins suffisent amplement 🤗​`,
    },
  ];

  public stats = [
    { key: 'Taille', value: '180 cm' },
    { key: 'Poids', value: '120 kg' },
    { key: 'Muscles', value: '+ des jambes que des bras' },
    { key: 'Gras', value: 'Un peu partout' },
    { key: 'Pilosité générale', value: 'Poilu, mais pas trop' },
    { key: 'Tatouage', value: `Juste sur le bras droit (pour l'instant)` },
  ];

  public otherStats = [
    { key: 'Pilosité pubienne', value: 'Entretenu' },
    { key: 'Type', value: 'Pénis de sang' },
    { key: 'Taille', value: `Dans la moyenne (13-14cm ?)` },
    { key: 'Épaisseur', value: `Un peu + que la moyenne` },
    { key: 'Circoncis', value: 'Non' },
    { key: 'Testicules', value: `Gros mais pas pendants` },
    { key: 'Zone érogène', value: 'À toi de trouver 😋' },
  ];

  public likes = [
    `Fellations (en donner + qu'en recevoir)`,
    `Doigtage (en faire + que m'en faire)`,
    'Massages (surtout tantriques)',
    'Cum-covering',
    'Shibari (à tester !)',
  ];

  public boundaries = ['Insultes, surnoms dévalorisants, rabaissements...', 'Anulingus', 'Uro, scato, ...', 'Et à discuter sur le reste ?'];

  public revealContent() {
    this.isRevealed = true;
  }

  public revealExtraContent() {
    this.isRevealedExtra = true;
  }

  public revealVeryExtraContent() {
    this.isRevealedVeryExtra = true;
  }

  public openPhoto() {
    this.showPhoto = true;
  }

  public closePhoto() {
    this.showPhoto = false;
  }
}
